import React, { useState } from "react";
import ToolTip from "./toolTip";

function App() {
  const [pos, setPos] = useState("right");
  const style = {
    height: "40vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  };

  return (
    <div className="App">
      <div className="container" style={style}>
        <button onClick={() => setPos("top")}>Top</button>

        <div
          style={{
            width: "60%",
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
