import React from "react";
import "./toolTip.css";

function ToolTip(props) {

  // function to handle position of tool-tip and arrow
  function renderSwitch() {

    switch (props.position) {

      // if postition is TOP, set show-top variable as black and other white
      case "top":
        document.documentElement.style.setProperty("--top-pos", "100%");
        document.documentElement.style.setProperty("--left-pos", "45%");
        document.documentElement.style.setProperty("--show-top", "black");
        document.documentElement.style.setProperty("--show-bottom", "white");
        document.documentElement.style.setProperty("--show-left", "white");
        document.documentElement.style.setProperty("--show-right", "white");
        return { bottom: "100%", left: "-20%" };

         // if postition is TOP, set show-bottom variable as black and other white
      case "bottom":
        document.documentElement.style.setProperty("--top-pos", "-31%");
        document.documentElement.style.setProperty("--left-pos", "45%");
        document.documentElement.style.setProperty("--show-top", "white");
        document.documentElement.style.setProperty("--show-bottom", "black");
        document.documentElement.style.setProperty("--show-left", "white");
        document.documentElement.style.setProperty("--show-right", "white");
        return { top: "131%", left: "-20%" };

         // if postition is TOP, set show-left variable as black and other white
      case "left":
        document.documentElement.style.setProperty("--top-pos", "35%");
        document.documentElement.style.setProperty("--left-pos", "100%");
        document.documentElement.style.setProperty("--show-top", "white");
        document.documentElement.style.setProperty("--show-bottom", "white");
        document.documentElement.style.setProperty("--show-left", "black");
        document.documentElement.style.setProperty("--show-right", "white");
        return { right: "105%", top: "-90%" };

         // if postition is RIGHT, which is default case, set show-right variable as black and other white
      default:
        document.documentElement.style.setProperty("--top-pos", "35%");
        document.documentElement.style.setProperty("--left-pos", "-11%");
        document.documentElement.style.setProperty("--show-top", "white");
        document.documentElement.style.setProperty("--show-bottom", "white");
        document.documentElement.style.setProperty("--show-left", "white");
        document.documentElement.style.setProperty("--show-right", "black");
        return { left: "105%", top: "-90%" };
    }
  }

  return (
    <div className="ToolTip">
      Hover over Me
      {/* Tool-Tip text which will appear on hovering over the text */}
      {/* Styling is done dynamically based on position it receives from parent component */}
      <span className="toolTipText" style={renderSwitch()}>
        Thanks for hovering. This is a ToolTip
      </span>
    </div>
  );
}

export default ToolTip;
