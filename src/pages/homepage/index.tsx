import React, { useEffect, useState } from 'react';
import Header from '../../components/header'
import QueueAnim from 'rc-queue-anim';
import Author from '../../components/author'
import { Skeleton } from 'antd';
import Addnotelife from '../../components/addnotelife'
import { getActivelist } from '../../api'
import './style.scss'
function HomePage(props:any){
    let [activeList, setActiveList] = useState([])
    let [initData, setinitData] = useState(true)
    useEffect(() => {
        getActivelist().then(res => {
            setActiveList(res.data.data)
        })
    }, [initData])
    const change = () => {
        setinitData(!initData)
    }
    return <div className='wrap-h'>
        <QueueAnim delay={1000} className="queue-simple">
            <Header selectIndex={0}{...props}/>
        </QueueAnim>
        <div className="container">
            <div className="container-left">
                <QueueAnim delay={500} className="queue-simple">

                    {
                        activeList.length ? activeList.map((res: any) => {
                            return <div key={res.id} className="c-l-tip" onClick={() => {
                                props.history.push(`/detailpage?activeid=${res.activeid}`)
                            }}>
                                <div className="header">
                                    {res.title}
                                </div>
                                <div className="introduce">
                                    <span>发布时间：{res.uploadate}</span>
                                    <span>类型：{res.type}</span>
                                    <span>作者：{res.author}</span>
                                </div>
                                <div className="content">
                                    {res.introduction}
                                </div>
                            </div>
                        }) : <Skeleton active/>
                    }
                </QueueAnim>
            </div>
            <div className="container-right-h">
                <Author/>
            </div>
        </div>
        <Addnotelife page='homepage' Submission={change}/>
    </div>
}
export default HomePage