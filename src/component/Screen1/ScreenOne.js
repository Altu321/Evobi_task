import React from "react";
import cuterobot from "../../cuterobot.jpg";
import "./index.css";
import { Link } from "react-router-dom";

function ScreenOne() {
  return (
    <div className="ScreenOne-main">
      <h1 className="ScreenOne-title">Screen 1 </h1>
      <img className="ScreenOne-img" src={cuterobot} />
      <Link to="/screenTwo">
        <div className="ScreenOne-btn">
          <center>Start</center>
        </div>
      </Link>
    </div>
  );
}

export default ScreenOne;
