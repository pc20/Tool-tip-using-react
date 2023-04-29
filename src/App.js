import React, { useState } from "react";
import ToolTip from "./toolTip";

function App() {
  // creating a variable pos which will be passed to ToolTip component as prop.
  const [pos, setPos] = useState("right");

  // style for container
  const style = {
    height: "35vh",
    width:"40vw",
    margin:"auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    border: "5px dashed black",
    padding:"10px",
  };

  return (
    <div className="App">
      <h1>Tool-Tip Using React</h1>
       <h3>Click on buttons to position tool-tip accordingly.</h3>
      <div className="container" style={style}>
        
        {/* button which will set POS  = Top */}
        <button onClick={() => setPos("top")}>Top</button>

        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* button to set POS = left */}
          <button onClick={() => setPos("left")}>Left</button>

          {/* Calling ToolTip component by passing POS as prop */}
          <ToolTip position={pos}></ToolTip>

          {/* button to set POS = right */}
          <button onClick={() => setPos("right")}>Right</button>
        </div>

          {/* buttom which will set POS = bottom */}
        <button onClick={() => setPos("bottom")}>Bottom</button>
      </div>
    </div>
  );
}

export default App;
