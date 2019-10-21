// src/components/ExternalApi.js
// this should be deleted later, this is a proof of concept only

// standard imports
import React, { useState } from "react";
import { useAuth0 } from "../react-auth0-wrapper";

// we need axios in order to get information from the API
import axios from "axios";

// the "ExternalApi" component, which demonstrates how to create a button
// to send a request to the backend of the app
const ExternalApi = () => {
  const [showResult, setShowResult] = useState(false);
  const [apiMessage, setApiMessage] = useState("");
  const { getTokenSilently } = useAuth0();

  const callApi = async () => {
    try {
      const token = await getTokenSilently();

      // connect to the endpoint "api/testauth"
      const response = await axios.get("/api/testauth", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      // response is what is returned from the backend.
      console.log(response);

      // extract the part of the response that we are interested in
      const responseData = response.data;

      // use one of React's functions: useState, to show the result
      setShowResult(true);
      // what do we want to show to the user
      setApiMessage(responseData);
    } catch (error) {
      // if we had a problem, it is caught here
      console.error("Caught error:" + error);
      console.log("auth was NOT successful");
    }
  };

  // this is the JSX (HTML) returned to be displayed on the page by App.js
  return (
    <div>
      <button onClick={callApi}>Ping API</button>
      {/* if we called "setShowResult" in the callAPI function, 
       we'll display this value returned, in the "code" font */}
      {showResult && <code>{JSON.stringify(apiMessage, null, 2)}</code>}
    </div>
  );
};

export default ExternalApi;
