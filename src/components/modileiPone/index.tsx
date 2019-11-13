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
            <a href="../../assect/apk/app.apk" download> 下载 </a>
        </div>

        <div className="modile-down">
            https://www.cnblogs.com/ldlx-mars/p/7666854.html
        </div>
    </div>
}
export default ModileiPonePage