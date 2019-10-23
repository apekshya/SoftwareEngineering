// src/components/msgBoard.js

// standard React component and CSS file
import React from "react";
import "./msgBoard.css";

const msgBoard = () => {  
  return (
    <div className="msgBoard">
	  <input  />"New Input"
      <p id="msgs">A message will appear here</p>
	  {/* document.getElementById("msgs").innerHTML = "New Message"; */}
    </div>
  );
};

export default msgBoard;
