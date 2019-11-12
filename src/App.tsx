import React from 'react';
import RouterView from "./router/index"
import './App.css';
import 'rc-texty/assets/index.css';

const App: React.FC = () => {
  return <div className="wraper">
    <RouterView />
  </div>
}

export default App;
