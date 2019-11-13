import React, { useEffect, useState } from 'react';
import Header from '../../components/header'
import QueueAnim from 'rc-queue-anim';
import { Icon, Affix} from 'antd'
import 'markdown-navbar/dist/navbar.css';
import './style.scss'
import Tocify from '../../components/tocify/tocify'
import { getActiveDetail } from '../../api'
import marked from 'marked'
import hljs from "highlightjs";
import 'highlightjs/styles/monokai-sublime.css';

function VideoPage(props: any) {
    console.log(props)
    const query = () => {
        let url = window.location.href
        if (url.indexOf('?') === -1) return null
        var arr1 = url.split("?");
        var params = arr1[1].split("&");
        var obj: any = {};//声明对象
        for (var i = 0; i < params.length; i++) {
            var param = params[i].split("=");
            obj[param[0]] = decodeURIComponent(param[1]);//为对象赋值
        }
        return obj;
    }
    let [activeDetail, setactiveDetail] = useState({})


    const getDeatilsFn = async() => {
        let { activeid } = query()
        let params = {
            activeid: activeid
        }
        await getActiveDetail(params).then((res) => {
            setactiveDetail(res.data.data)
        })
    }
    /* eslint-disable */
    useEffect(() => {
        getDeatilsFn()
    },[])

    const tocify = new Tocify()
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
        tables: true,
        breaks: false,
        smartLists: true,
        smartypants: false,
        highlight: function (code) {
            return hljs.highlightAuto(code).value;
        }
    });


    let { activeContent, title, uploadate, type, id }: any = activeDetail
    console.log(activeDetail)
    let html = marked(activeContent ? activeContent : '');

    return <div className='wrap'>
        <QueueAnim delay={1000} className="queue-simple">
            <Header selectIndex={1} {...props} />
        </QueueAnim>
        <div className="container">
            <div className="container-left">
                <div className="detailed-title">
                    {title}
                </div>

                <div className="list-icon center line-geban">
                    <span><Icon type="calendar" /> {uploadate}</span>
                    <span><Icon type="folder" /> {type}</span>
                    <span><Icon type="fire" /> {id}</span>
                </div>

                <div className="detailed-content">
                    
                    <div className="active-content" dangerouslySetInnerHTML={{ __html: html }} >
                        
                    </div>
                </div>
            </div>
            <div className="container-right-d">
                <div className="ding">
                    <Affix offsetTop={25}>
                        <div className="detailed-nav comm-box">
                            <div className="nav-title">文章目录</div>
                            <div className="toc-list">
                                {tocify && tocify.render()}
                            </div>

                        </div>
                    </Affix>
                </div>
                </div>
        </div>
    </div>
}
export default VideoPage