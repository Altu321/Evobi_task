import React, { useState } from "react";
import "./ScreenTwo.css";
import cuterobot from "../../cuterobot.jpg";

import eye from "../../image/eye.jpg";
import smile from "../../image/smile.jpg";
import nose from "../../image/nose.jpg";
import righteye from "../../image/righteye.jpg";
import { Link } from "react-router-dom";
import { rangeStoreVal } from "../data";


function ScreenTwo() {
  
  const [iseye, seteye] = useState(false);
  const [isnose, setnose] = useState(false);
  const [issmile, setsmile] = useState(false);
  const [isrighteye, setrighteye] = useState(false);
  

  const handleSwitch = (comp) => {
    console.log(comp);
    switch (comp) {
      case "eye": {
        if (iseye) {
          rangeStoreVal["iseye"].isChecked = false;

          seteye(false);
        } else {
          sessionStorage.setItem("data", { iseye: iseye });
          rangeStoreVal["iseye"].isChecked = true;

          seteye(true);
        }
        break;
      }

      case "nose": {
        if (isnose) {
          rangeStoreVal["isnose"].isChecked = false;

          setnose(false);
        } else {
          rangeStoreVal["isnose"].isChecked = true;

          setnose(true);
        }
        break;
      }

      case "smile": {
        if (issmile) {
          rangeStoreVal["issmile"].isChecked = false;

          setsmile(false);
        } else {
          rangeStoreVal["issmile"].isChecked = true;

          setsmile(true);
        }
        break;
      }
      case "righteye": {
        if (isrighteye) {
          rangeStoreVal["isrighteye"].isChecked = false;

          setrighteye(false);
        } else {
          rangeStoreVal["isrighteye"].isChecked = true;

          setrighteye(true);
        }
        break;
      }
    }
  };

  console.log("file data ", rangeStoreVal);

  return (
    <div className="ScreenTwo">
      <div className="ScreenTwo-title">Select Robot Parts</div>
      <div className="ScreenTwo-list">
        <div
          className={iseye ? "isActiveeye" : "notActiveeye"}
          style={{ height: "80%", width: "70%", position: "relative" }}
          onClick={() => handleSwitch("eye")}
        >
          {" "}
          <img
            src={eye}
            style={{ height: "70%", width: "70%", alignItems: "center" }}
          ></img>
          <h3 style={{ position: "absolute", bottom: "-10px", left: "30%" }}>
             EYE
          </h3>
        </div>

        <div
          className={isnose ? "isActiveeye" : "notActiveeye"}
          style={{ height: "80%", width: "70%", position: "relative" }}
        >
          {" "}
          <img
            style={{ height: "70%", width: "70%" }}
            src={nose}
            onClick={() => handleSwitch("nose")}
          ></img>{" "}
          <h3 style={{ position: "absolute", bottom: "-10px", left: "30%" }}>
            NOSE
          </h3>
        </div>

        

        

        <div
          style={{ height: "80%", width: "70%", position: "relative" }}
          className={issmile ? "isActiveeye" : "notActiveeye"}
        >
          {" "}
          <img
            style={{ height: "70%", width: "70%" }}
            src={smile}
            onClick={() => handleSwitch("smile")}
          ></img>
          <h3 style={{ position: "absolute", bottom: "-10px", left: "30%" }}>
            SMILE
          </h3>
        </div>
         <div
          className={isrighteye ? "isActiveeye" : "notActiveeye"}
          style={{ height: "80%", width: "70%", position: "relative" }}
        >
          {" "}
          <img
            style={{ height: "70%", width: "70%" }}
            src={righteye}
            onClick={() => handleSwitch("righteye")}
          ></img>{" "}
          <h3 style={{ position: "absolute", bottom: "-10px", left: "30%" }}>
            RIGHT EYE
          </h3>
        </div> 
      </div>
      <div className="ScreenTwo-img">
        {" "}
        <img src={cuterobot} style={{width:"50vh"}}></img>
      </div>
      <Link to="/screenThree">
        <div className="ScreenTwo-btn">
          {" "}
          <center>Next</center>
        </div>
      </Link>
    </div>
  );
}

export default ScreenTwo;
