import React, { useState } from 'react'
import './style.scss'
import TweenOne from 'rc-tween-one';
import { Icon, Modal, Input, Upload, message} from 'antd'
// import ReactMarkdown from 'react-markdown'
import { addActivelist, addArticlesCollection } from '../../api'
const { Dragger } = Upload;


const p0 = 'M0,100 L25,100 C34,20 40,0 100,0';
const p1 = 'M0,100 C5,120 25,130 25,100 C30,60 40,75 58,90 C69,98.5 83,99.5 100,100';
const ease0 = TweenOne.easing.path(p0);
const ease1 = TweenOne.easing.path(p1);
interface useParmas{
    page:String,
    Submission: Function
}

function Addnotelife(props: useParmas) {
    const animation = [
        {
            repeatDelay: 500,
            y: -70,
            repeat: -1,
            yoyo: true,
            ease: ease0,
            duration: 1000
        },
        {
            repeatDelay: 500,
            appearTo: 0,
            scaleX: 0,
            scaleY: 2,
            repeat: -1,
            yoyo: true,
            ease: ease1,
            duration: 1000,
        }
    ];
    let [modal1Visible, setmodal1Visible] = useState(false)
    let [mdfile, setmdfile] = useState('')
    let [title, settitle] = useState('')
    let [author, setauthor] = useState('')
    let [type, settype] = useState('')
    let [introduction, setintroduction] = useState('')

    const setModal1Visible = (modal1Visible: boolean) => {
        setmodal1Visible(modal1Visible)
    }
    let { paused }: any = props
    // function getBase64(img, callback) {
    //     const reader = new FileReader();
    //     reader.addEventListener('load', () => callback(reader.result));
    //     reader.readAsDataURL(img);
    // }
    const propres = {
        name: 'file',
        multiple: true,
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        onChange(info: any) {
            // const reader = new FileReader()
            // console.log(info)
            // console.log(reader.readAsText(info.fileList[0], "UTF-8"))
            // reader.onload = function (e: any) {
            //     const fileString = e.target.result
            //     console.log(fileString)
            // }
            const { status } = info.file;
            if (status !== 'uploading') {
                // console.log(info.file, info.fileList);
            }
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
                const reader = new FileReader()
                reader.readAsText(info.file.originFileObj, '"UTF-8"')
                reader.onload = function(e: any){
                    // console.log(e.target.result.toString())
                    setmdfile(e.target.result)
                }

            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };

    const Submission = () => {
        if (mdfile === '' || title === '' || author === '' || introduction === '' || type === ''){
            message.error('警告：请完善上传信息！！！！');
            return;
        }
        let params = {
            mdfiletext: mdfile,
            title: title,
            author: author,
            introduction: introduction,
            type: type
        }
        if (props.page === 'homepage') {
            addActivelist(params).then((res: any) => {
                console.log(res)
                props.Submission()
                setmodal1Visible(false)
            })
        } else {
            addArticlesCollection(params).then((res: any) => {
                console.log(res)
                props.Submission()
                setmodal1Visible(false)
            })
        }
    }
    return (
        <>
            <div className='corner-dom' onClick={() => {
                setmodal1Visible(true)
            }}>
                <TweenOne
                    animation={animation}
                    paused={paused}
                    className="code-box-shape"
                    style={{ position: 'absolute', transformOrigin: 'center bottom', }}>
                    <Icon type="setting" spin style={{ fontSize: '50px', color: '#08c' }} />
                </TweenOne>
            </div>
            <Modal
                title={props.page === 'homepage' ? '添加文章' : '添加视频爱好'}
                style={{ top: 20 }}
                visible={modal1Visible}
                onOk={() => {
                    // setModal1Visible(false)
                    Submission()
                }}
                onCancel={() => setModal1Visible(false)}
            >
                <Input placeholder="请填写文章标题" onChange={(e) => {
                    settitle(e.target.value)
                }}/>
                <div className="corner-line"></div>
                <Input placeholder="请填写文章作者" onChange={(e) => {
                    setauthor(e.target.value)
                }}/>
                <div className="corner-line"></div>
                <Input placeholder="请填写文章类型" onChange={(e) => {
                    settype(e.target.value)
                }}/>
                <div className="corner-line"></div>
                <Input placeholder="请填写文章简介" onChange={(e) => {
                    setintroduction(e.target.value)
                }}/>
                <div className="corner-line"></div>
                <Dragger {...propres}>
                    <p className="ant-upload-drag-icon">
                        <Icon type="inbox" />
                    </p>
                    <p className="ant-upload-text"> <span role="img" aria-label='生气'>😈</span> Click or drag to upload a file <span role="img" aria-label='生气'>😈</span> </p>
                    <p className="ant-upload-hint">
                        请使用md结尾的文件上传，注意规范！！！
                    </p>
                </Dragger>
            </Modal>

        </>
    );
}

export default Addnotelife
