import React from "react";
import RouterView from "./router/index";
import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="wraper">
      <RouterView />
    </div>
  );
};

export default App;
