const { override, fixBabelImports } = require('customize-cra');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const webpack = require('webpack');
const rewiredMap = () => config => {
    config.devtool = config.mode === 'development' ? 'cheap-module-source-map' : false;
    return config;
};

const extendsert = () => config => {
    // config.entry = {
    //     index: './src/index.tsx',
    //     vendor: ['rc-banner-anim', 'rc-queue-anim', 'rc-texty', 'rc-tween-one']
    // }
    // config.externals = {
    //     'rc-banner-anim': 'rc-banner-anim',
    //     'rc-queue-anim': 'rc-queue-anim',
    //     'rc-texty': 'rc-texty',
    // }
    return config;
}
const addCustomize = () => config => {
    if (process.env.NODE_ENV === 'production') {
        config.devtool = false; //去掉map文件
        if (config.plugins) {
            config.plugins.push(new BundleAnalyzerPlugin());
        }
        const splitChunksConfig = config.optimization.splitChunks;
        if (config.entry && config.entry instanceof Array) {
            config.entry = {
                main: config.entry,
                vendor: ['rc-banner-anim', 'rc-queue-anim', 'rc-texty', 'rc-tween-one', 'highlightjs', 'react-canvas-nest']
            }
        } else if (config.entry && typeof config.entry === 'object') {
            config.entry.vendor = ['rc-banner-anim', 'rc-queue-anim', 'rc-texty', 'rc-tween-one', 'highlightjs', 'react-canvas-nest']
        }

        Object.assign(splitChunksConfig, {
            chunks: 'async',
            cacheGroups: {
                vendors: {
                    test: /node_modules/,
                    name: 'vendors',
                    priority: -10,
                },
                common: {
                    name: 'common',
                    minChunks: 2,
                    minSize: 30,
                    chunks: 'all'
                }
            }
        })
    }
    return config;
}
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    }),
    rewiredMap(),
    extendsert(),
    addCustomize()
);
