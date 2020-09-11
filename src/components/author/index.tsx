import React from "react";
import Avatar from "@material-ui/core/Avatar";
import "./style.scss";

function Author(props: any) {
  return (
    <>
      <div className="author">
        <div className="avator-pic">
          <Avatar src="http://my.ignorantscholar.cn/images/headers.png" />
        </div>
        <div className="author-introduction">
          稻草程序员，专注于WEB和移动前端开发。。此地维权无门，此时无能为力，此心随波逐流。
          社交账号
        </div>
      </div>

      <div className="auto">系统由 React+Node+Ant D+Material-ui驱动 </div>
      <div className="auto">
        <a
          rel="noopener noreferrer"
          href="http://my.ignorantscholar.cn"
          target="_blank"
        >
          my.ignorantscholar.cn
        </a>
      </div>
    </>
  );
}

export default Author;
