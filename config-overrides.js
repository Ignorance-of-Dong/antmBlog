/*
 * @Author: zhangzheng
 * @Date: 2020-09-03 18:10:16
 * @LastEditors: zhangzheng
 * @LastEditTime: 2020-09-11 14:52:13
 * @Descripttion:
 */
const { override, fixBabelImports } = require("customize-cra");
const path = require("path");

// process.env.GENERATE_SOURCEMAP = "false";
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
// const webpack = require('webpack');
const rewiredMap = () => config => {
  config.devtool =
    config.mode === "development" ? "cheap-module-source-map" : false;
  return config;
};
const addProxy = () => configFunction => {
  configFunction.port = 3001;
  configFunction.proxy = {
    "/default/": {
      target: "http://blogserver.ignorantscholar.cn",
      changeOrigin: true,
      pathRewrite: { "^/default": "/" }
    }
  };
  return configFunction;
};

const alias = () => config => {
  config.resolve.alias = {
    "@": path.resolve(__dirname, "src")
  };
  return config;
};
const addCustomize = () => config => {
  if (process.env.NODE_ENV === "production") {
    config.devtool = false; //去掉map文件
    if (config.plugins) {
      config.plugins.push(new BundleAnalyzerPlugin());
    }
    const splitChunksConfig = config.optimization.splitChunks;

    Object.assign(splitChunksConfig, {
      chunks: "async",
      cacheGroups: {
        vendors: {
          test: /node_modules/,
          name: "vendors",
          priority: -10,
          minSize: 3000,
          maxSize: 40000
        },
        common: {
          name: "common",
          minChunks: 2,
          minSize: 3000,
          maxSize: 40000,
          chunks: "all"
        }
      }
    });
  }
  return config;
};
module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: "css"
  }),
  rewiredMap(),
  alias(),
  addCustomize()
);
