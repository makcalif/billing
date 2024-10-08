 

// import { Auth } from '@aws-amplify/auth';
import React, { useState, useEffect } from 'react';

import { fetchAuthSession, Auth } from 'aws-amplify/auth'
import { Amplify } from '@aws-amplify/core';
// import { get , post } from '@aws-amplify/api-rest';
import {get} from '@aws-amplify/api';
import awsconfig from '../aws-exports';
  
// Amplify.configure(awsconfig); 
// const existingConfig = Amplify.getConfig(); 

// Amplify.configure({
//   ...awsconfig,
//   aws_cloud_logic_custom: [
//         {
//             "name": "apicomparebank",
//             "endpoint": "https://ju1d8zfbrf.execute-api.us-east-1.amazonaws.com/dev",
//             "region": "us-east-1"
//         }
//     ]
//   });
 
console.log('2existingConfig:', Amplify.getConfig());

function Compare() {
  const [token, setToken] = useState('');
  const [response, setResponse] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function getToken() {
      const session = await fetchAuthSession();
      const idToken = session.tokens.idToken?.toString(); //.getJwtToken();
      // const idToken = session.tokens?.idToken.jwtToken;  
      console.log('idToken 1:', idToken);
      setToken(idToken);
      console.log("access token", session.tokens.accessToken)
    }

    getToken();
  }, []);

  
  async function callBackendAPI() {
    try {
      console.log('abc');
      // const apiName = 'afucApiOne'; // Your API name here
      // const path = '/bank'; // Your API endpoint path
      const myInit = {
        headers: {
          Authorization: token, // Pass the idToken for authentication
        },
      };
 
      console.log("headers:", token);
      const fetchData = async () => {
        //https://Your user pool domain/login
        // const response = await fetch(`https://ju1d8zfbrf.execute-api.us-east-1.amazonaws.com/dev/bank/234`, {
          const response = await fetch(`https://sj9et0xlog.execute-api.us-east-1.amazonaws.com/dev`, {
          method: 'GET',  
          
          headers: {
            Authorization: "Bearer " + token
          }
        } ) 

        const newData = await response.json()
        console.log('newData:', newData.body)
        setData(newData)
        
      }; 
      
      fetchData();
      // const result = await get(apiName, path, myInit);
      // console.log('apiName:', apiName);
      // setResponse(result); // Handle the API response
    } catch (error) {
      console.error('Error calling API:', error);
    }
  }

  return (
    <div>   <button onClick={callBackendAPI}>Call Backend API</button> 
    <div>
      {data ? (
        <div>Response: {data.body}</div> // Render when data exists
      ) : (
        <div>Loading...</div> // Show while waiting for data
      )}
    </div>
     </div> 
  );
};
export default Compare;



// import { get } from  '@aws-amplify/api';

// function Compare() {

//   const getData = async () => {
//     try {
//       const response = await get('myApiName', '/path/to/resource');
//       console.log(response);
//     } catch (error) {
//         console.error("Error fetching data", error);
//     }
//   }
// };
// export default Compare;