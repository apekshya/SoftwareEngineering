'use strict';

/**
 * simple function that returns authorized or forbidden String from jwt
 * requirement: http header
 * Authorization: bearer <your token>
 */

//node json webtoken from auth0
//npm install --save jsonwebtoken
const jwt = require('jsonwebtoken');

//library to pull in jwks data to get the kid
//npm install --save axios
const axios = require('axios');

//library for json web token key set to generate keysof
//npm install --save jwks-rsa-promisified  - this is a third party implementation of jwks-rsa that supports promises
const jwksClient = require('jwks-rsa-promisified');

/**
 * verifyAuth
 * expected input: authoriation header:    Authorization: bearer <jwt token>
 * returns <Promise> String - "forbidden" || "authorized"
 */
const verifyAuth = async header => {
  //retrieving the value to the right of bearer
  const token = header.split(' ')[1];

  if (!token) {
    console.log('no bearer token');
    return 'forbidden';
  }

  try {
    const data = await axios.get(
      'https://myconferencehub.auth0.com/.well-known/jwks.json'
    );
    const kid = data.data.keys[0].kid; //the kid is required to verify the signature

    const client = jwksClient({
      strictSsl: true, // Default value
      jwksUri: 'https://myconferencehub.auth0.com/.well-known/jwks.json',
      requestHeaders: {}, // Optional
      requestAgentOptions: {} // Optional
    });

    //getting the actual key now
    const key = await client.getSigningKeyAsync(kid);
    const signingKey = key.publicKey || key.rsaPublicKey;

    try {
      //set your max age to the expiration time of your JWT expiration in your app. returns decoded jwt...(or fails)
      const decoded = jwt.verify(token, signingKey, {
        algorithms: 'RS256',
        maxAge: '360s'
      });
      return 'authorized';
    } catch (err) {
      console.log(err);
      return 'forbidden';
    }
  } catch (error) {
    console.log(error);
    console.log('failed to make jwks call');
    return 'forbidden';
  }
};

module.exports = verifyAuth;
