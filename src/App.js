import React, { useState } from "react";
import ToolTip from "./toolTip";

function App() {
  const [pos, setPos] = useState("right");
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
        <button onClick={() => setPos("top")}>Top</button>

        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <button onClick={() => setPos("left")}>Left</button>
          <ToolTip position={pos}></ToolTip>
          <button onClick={() => setPos("right")}>Right</button>
        </div>

        <button onClick={() => setPos("bottom")}>Bottom</button>
      </div>
    </div>
  );
}

export default App;
