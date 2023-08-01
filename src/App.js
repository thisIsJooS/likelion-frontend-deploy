import * as React from "react";
import "./App.css";
import "./index.css";

function App() {
  return (
    <>
      <div className="bg-back-gradation"></div>
      <div className="bg-gradation"></div>
      <div className="rotate">
        <div className="card front">
          <div className="ssu_logo"></div>
          <h1>LIKELION</h1>
          <div className="likelion_wrapper">
            <div className="likelion_logo"></div>
            <p>11th</p>
          </div>
        </div>
        <div className="card back">
          <div>
            <span className="name">주승우</span>
            <span className="position">BE</span>
          </div>
          <a className="github" href="https://github.com/thisisjoos"></a>
        </div>
      </div>
    </>
  );
}

export default App;
