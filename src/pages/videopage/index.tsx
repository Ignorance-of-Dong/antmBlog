import React, { useEffect, useState } from 'react';
import { Header, Author, Addnotelife, Tocify } from '@/components'
import './style.scss'
import marked from 'marked'
import { getArticlesCollection } from '@/api'
function VideoPage(props: any) {
  const tocify = new Tocify()
  const renderer = new marked.Renderer();
  renderer.heading = function (text, level, raw) {
    const anchor = tocify.add(text, level);
    return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
  };
  let [CollectionList, setCollectionList] = useState([])
  const getArticlesCollectionFn = async () => {
    await getArticlesCollection().then((res: any) => {
      setCollectionList(res.data.data)
    })
  }
  let [initData, setinitData] = useState(true)
  useEffect(() => {
    getArticlesCollectionFn()
  }, [initData])
  const change = () => {
    setinitData(!initData)
  }
  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    // tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false
  });
  return <div className='wrap-v'>
    <Header selectIndex={2} {...props} />
    <div className="container">
      <div className="container-left">
        {
          CollectionList.length
            ?
            CollectionList.map((res: any) => {
              return <div key={res.activeid} className="c-l-tip" style={{ background: '#fff' }}>
                <div className="header"> {res.title} </div>
                <div className="introduce">
                  <span>发布时间：{res.uploadate}</span>
                  <span>类型：{res.type}</span>
                  <span>发布者：{res.author}</span>
                </div>
                <div className="content iframer-content aspect-ratio" dangerouslySetInnerHTML={{ __html: marked(res.activeContent) }}></div>
              </div>
            })
            :
            <div />
        }
      </div>
      <div className="container-right-v">
        <div className="linssse-content">
          <Author />
        </div>
      </div>
    </div>
    <Addnotelife page='videopage' Submission={change} />
  </div>
}
export default VideoPage