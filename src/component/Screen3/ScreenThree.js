import React from 'react'
// import { Link } from "react-router-dom";
import "./ScreenThree.css";
import { rangeStoreVal, display, outerElm } from "../data";
//import {useHistory} from "react-router-dom"
import Draggable from 'react-draggable';


import { useNavigate } from "react-router-dom";

// The default
// import {DraggableCore} from 'react-draggable'; // <DraggableCore>
// import Draggable, {DraggableCore} from 'react-draggable';

function ScreenThree() {
  const navigate= useNavigate();

  const handleStart = (e) => {
    // console.log("Start");
    // console.log(e);
  };
  const handleDrag = (e) => {
    // console.log("Drag");
    // console.log(e);
  };
  const handleStop = (e, val) => {
    console.log("Stop");
    console.log(val);
    // console.log(e.target.val);

    console.log(document.getElementById(`${val}`));

    switch (val) {
      case "iseye": {
        document.getElementById(`${val}`).style.height = "100px";

        document.getElementById(`${val}`).style.width = "150px";
        break;
      }

      case "isnose": {
        document.getElementById(`${val}`).style.height = "50px";

        document.getElementById(`${val}`).style.width = "100px";
        break;
      }
      
      
      case "issmile": {
        document.getElementById(`${val}`).style.height = "70px";

        document.getElementById(`${val}`).style.width = "250px";
        break;
      }
      case "isrighteye": {
        document.getElementById(`${val}`).style.height = "100px";

        document.getElementById(`${val}`).style.width = "150px";
        break;
      }
    }
  };
  const getRender = () => {
    return (
      <div id="Assemble">
        {Object.keys(rangeStoreVal).map((val, index) => {
          let isActive = rangeStoreVal[val]["isChecked"];

          if (isActive == true) {
            return (
              <>
                <Draggable
                  onStart={handleStart}
                  onDrag={handleDrag}
                  onStop={handleStop}
                  onStop={(e) => handleStop(e.MouseEvent, val)}
                >
                  <div
                    id={val}
                    style={{
                      width: "80px",
                      height: "80px",
                      marginBottom: "10px",
                    }}
                    value={val}
                  >
                    <img
                      src={rangeStoreVal[val]["path"]}
                      style={{ height: "100%", width: "100%" }}
                    />
                  </div>
                </Draggable>

                
                
              </>
            );
          }
        })}
      </div>
    );

    // Object.keys(rangeStoreVal).map((val, index) => {
    //   console.log(rangeStoreVal[val]["isChecked"]);

    //   let isActive = rangeStoreVal[val]["isChecked"];

    //   return (
    //     <div>
    //       <h1>adsd</h1>
    //     </div>
    //   );
    //   //   if (isActive == true) {
    //   //     console.log("YES");
    //   //     return (
    //   //       <div>
    //   //         <h1>{val}</h1>
    //   //       </div>
    //   //     );
    //   //   }
    // });
  };

  function handleClick() {
    var arrData = [];
    var itm = document.getElementById("Assemble");

    var cln = itm.cloneNode(true);
    display.push(cln);
    
    console.log(cln, "******************");

    // history.push("/screenFour");
    arrData.push(cln);
    navigate(
       "/screenFour",

      //{state: { detail: arrData }}
    );
  }

  return (
    <div className="ScreenThree-main">
      <div>{getRender()} </div>
      <div>
        <h3>DRAG AND DROP</h3>
      </div>

      <div className="ScreenThree-btn" onClick={handleClick}>
        {" "}
        <center>Next</center>
      </div>
    </div>
  );
}

export default ScreenThree;
