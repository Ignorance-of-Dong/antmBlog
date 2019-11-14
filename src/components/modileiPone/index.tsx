import React from 'react';
import './style.scss'
function ModileiPonePage() {
    return <div className='mdile-wrap'> 
        <div className="modile-text">
            请访问移动端app
        </div>
        <div className="modile-link" onClick={() => {
            // window.open('../../assect/apk/app.apk')
        }}>
            <a href="https://github.com/Ignorance-of-Dong/antmBlog/raw/master/src/assect/apk/app.apk" download> 下载 </a>
        </div>

        <div className="modile-down">
            文件下载由Git提供！！！！下载可能有些慢，请耐心等待<span role="img" aria-label='生气'>😈😈😈😈生气</span>
        </div>
    </div>
}
export default ModileiPonePage