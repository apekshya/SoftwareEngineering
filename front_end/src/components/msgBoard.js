// src/components/msgBoard.js

// standard React component and CSS file
import React from "react";
import "./msgBoard.css";

const msgBoard = () => {  
  return (
    <div className="msgBoard">
	  <form>
  <label>
    Chat:
    <input type="text"  />
  </label>
  <input type="submit" value="Submit" />
</form>
<p>Messages go here</p>
	  {/* document.getElementById("msgs").innerHTML = "New Message"; */}
    </div>
  );
};

export default msgBoard;
