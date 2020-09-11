import React, { useEffect, useState } from "react";
import { Affix } from "antd";
import {Header, Tocify} from "@/components";
import { getActiveDetail } from "@/api";

import marked from "marked";
import hljs from "highlight.js";
import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";

import "highlight.js/styles/atom-one-dark.css";
import "./style.scss";
import "markdown-navbar/dist/navbar.css";

function DetailPage(props: any) {
  const query = () => {
    let url = window.location.href;
    if (url.indexOf("?") === -1) return null;
    var arr1 = url.split("?");
    var params = arr1[1].split("&");
    var obj: any = {}; //声明对象
    for (var i = 0; i < params.length; i++) {
      var param = params[i].split("=");
      obj[param[0]] = decodeURIComponent(param[1]); //为对象赋值
    }
    return obj;
  };
  let [activeDetail, setactiveDetail] = useState({});

  const getDeatilsFn = async () => {
    let { activeid } = query();
    let params = {
      activeid: activeid
    };
    await getActiveDetail(params).then(res => {
      setactiveDetail(res.data.data);
    });
  };
  /* eslint-disable */
  useEffect(() => {
    getDeatilsFn();
  }, []);

  const tocify = new Tocify();
  const renderer = new marked.Renderer();
  renderer.heading = function (text, level, raw) {
    const anchor = tocify.add(text, level);
    return `<a id="${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
  };

  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    breaks: false,
    smartLists: true,
    smartypants: false,
    langPrefix: "hljs",
    highlight: function (code) {
      return hljs.highlight("javascript", code).value;
    }
  });

  let { activeContent, title, uploadate, type, id }: any = activeDetail;
  let html = marked(activeContent ? activeContent : "").replace(
    /<pre>/g,
    "<pre class='hljs'>"
  );
  return (
    <div className="wrap">
      <Header selectIndex={1} {...props} />
      <div className="container">
        <Slide
          direction="right"
          in={activeContent ? true : false}
          mountOnEnter
          unmountOnExit
        >
          <Paper elevation={4}>
            <div className="detail-container">
              <div className="detailed-title">{title}</div>

              <div className="list-icon center line-geban">
                <span>
                  上传时间： {uploadate}
                </span>
                <span>
                  文章类型： {type}
                </span>
                <span>
                  阅读数： {id}
                </span>
              </div>

              <div className="detailed-content">
                <div
                  className="active-content"
                  dangerouslySetInnerHTML={{ __html: html }}
                ></div>
              </div>
            </div>
          </Paper>
        </Slide>

        <div className="container-right-d">
          <div className="ding">
            <Affix offsetTop={25}>
              <div className="detailed-nav comm-box">
                <div className="nav-title">文章目录</div>
                <div className="toc-list">{tocify && tocify.render()}</div>
              </div>
            </Affix>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DetailPage;
