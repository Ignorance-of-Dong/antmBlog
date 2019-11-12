import React from 'react';
import { Avatar, Divider } from 'antd'
import Texty from 'rc-texty';
import BannerAnim, { Element } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
import './style.scss'
const BgElement = Element.BgElement;

function Author(props: any) {
    const getEnter = (e: any) => {
        switch (e.index) {
            case 0:
                return {
                    rotate: 90,
                    opacity: 0,
                    y: -60,
                };
            case 10:
            case 1:
                return {
                    y: -60,
                    x: -10,
                    opacity: 0,
                };
            case 9:
            case 2:
                return {
                    y: -60,
                    x: 20,
                    opacity: 0,
                };
            case 3:
                return {
                    y: 60,
                    opacity: 0,
                };
            case 8:
            case 4:
                return {
                    x: 30,
                    opacity: 0,
                };
            case 5:
                return {
                    enter: [
                        {
                            scale: 2,
                            opacity: 0,
                            type: 'set',
                        },
                        { scale: 1.2, opacity: 1, duration: 300 },
                        { scale: 0.9, duration: 200 },
                        { scale: 1.05, duration: 150 },
                        { scale: 1, duration: 100 },
                    ],
                    leave: {
                        opacity: 0, scale: 0,
                    },
                };
            case 6:
                return {
                    scale: 0.8,
                    x: 30,
                    y: -10,
                    opacity: 0,
                };
            case 7:
                return {
                    scale: 0.8,
                    x: 30,
                    y: 10,
                    opacity: 0,
                };
            default:
                return {
                    opacity: 0,
                };
        }
    }
    return <>
        <div className="author-div comm-box">
            <div> <Avatar size={100} src="http://my.ignorantscholar.cn/images/headers.png" /></div>
            <div className="author-introduction">
                <Texty enter={getEnter} leave={getEnter}>稻草程序员，专注于WEB和移动前端开发。。此地维权无门，此时无能为力，此心随波逐流。</Texty>
                <Divider>社交账号</Divider>
                <Avatar size={28} icon="github" className="account" />
                <Avatar size={28} icon="qq" className="account" />
                <Avatar size={28} icon="wechat" className="account" />

            </div>
        </div>
        <BannerAnim prefixCls="banner-user" autoPlay>
            <Element
                prefixCls="banner-user-elem"
                key="0"
            >
                <BgElement
                    key="bg"
                    className="bg"
                    style={{
                        background: '#364D79',
                    }}
                />
                <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
                    Ant Motion Banner
                </TweenOne>
                <TweenOne className="banner-user-text"
                    animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
                >
                    The Fast Way Use Animation In React
                </TweenOne>
            </Element>
            <Element
                prefixCls="banner-user-elem"
                key="1"
            >
                <BgElement
                    key="bg"
                    className="bg"
                    style={{
                        background: '#64CBCC',
                    }}
                />
                <TweenOne className="banner-user-title" animation={{ y: 30, opacity: 0, type: 'from' }}>
                    Ant Motion Banner
                </TweenOne>
                <TweenOne className="banner-user-text"
                    animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
                >
                    The Fast Way Use Animation In React
                 </TweenOne>
            </Element>
        </BannerAnim>
        <div className='auto'><Texty enter={getEnter} leave={getEnter}>系统由 React+Node+Ant D+Ant M驱动</Texty> </div>
        <div className='auto'><a rel="noopener noreferrer" href="http://my.ignorantscholar.cn" target="_blank"><Texty enter={getEnter} leave={getEnter}>my.ignorantscholar.cn</Texty></a></div>

    </>
}

export default Author
