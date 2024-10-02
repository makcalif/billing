 

// import { Auth } from '@aws-amplify/auth';
import React, { useState, useEffect } from 'react';

import { fetchAuthSession } from 'aws-amplify/auth'
import { Amplify } from '@aws-amplify/core';
import { get , post } from '@aws-amplify/api-rest';
import awsExports from '../aws-exports';
  

function Compare() {
  const [token, setToken] = useState('');
  const [response, setResponse] = useState(null);

  useEffect(() => {
    async function getToken() {
      const session = await fetchAuthSession();
      const idToken = session.tokens?.idToken;
      setToken(idToken);
    }

    getToken();
  }, []);

  async function callBackendAPI() {
    try {
      const apiName = 'apicomparebank'; // Your API name here
      const path = 'https://ju1d8zfbrf.execute-api.us-east-1.amazonaws.com/dev'; // Your API endpoint path
      const myInit = {
        headers: {
          Authorization: token, // Pass the idToken for authentication
        },
      };
      console.log('apiName:', apiName);
      const result = await get(apiName, path, myInit);
      setResponse(result); // Handle the API response
    } catch (error) {
      console.error('Error calling API:', error);
    }
  }

  return (
    <div>   <button onClick={callBackendAPI}>Call Backend API</button> </div>
   
  );
};
export default Compare;
