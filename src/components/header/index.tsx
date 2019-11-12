import React from 'react'
import './style.scss'
import Texty from 'rc-texty';
function Header(props: any) {
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
    let {selectIndex = 0} = props
    return <>
        <div className="blog-header">
            <div className="blog-text">
                <div className="blog-left">
                    <Texty>倥侗无知</Texty>
                </div>
                <div className="blog-other">
                    <Texty>Ant Motion..........</Texty>
                </div>
            </div>
            <div className="blog-tab">
                <div className="tab" onClick={() => {
                    props.history.push('/')
                }}>
                    <Texty enter={getEnter} leave={getEnter}>{'Home Page'}</Texty>
                    <div className="line" style={{ display: selectIndex === 0 ? 'block' : 'none'}}></div>
                </div>
                <div className="tab">
                    <Texty enter={getEnter} leave={getEnter}>{'Article'}</Texty>
                    <div className="line" style={{ display: selectIndex === 1? 'block' : 'none' }}></div>
                </div>
                <div className="tab" onClick={() => {
                    props.history.push('/videopage')
                }}>
                    <Texty enter={getEnter} leave={getEnter}>{'Video life'}</Texty>
                    <div className="line" style={{ display: selectIndex === 2 ? 'block' : 'none' }}></div>
                </div>
            </div>
        </div>
    </>
}

export default Header