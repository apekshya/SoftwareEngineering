// src/components/msgBoard.js

// standard React component and CSS file
import React from "react";
import "./msgBoard.css";

function addMessage () {
	let msg = document.getElementById("messages").value = "New Message";  
	alert(msg);
}

const msgBoard = () => {  
  return (
    <div className="msgBoard">
	  <form>
		<label>
			Chat:
			<input 
			  autofocus
			  required
			  type="text"   />
		</label>
		<input type="submit" value="Submit" onclick="addMessage()"/>
	  </form>
	  <p id="messages">Messages go here</p>
    </div>
  );
};

export default msgBoard;
