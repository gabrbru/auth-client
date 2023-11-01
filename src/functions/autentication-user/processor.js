'use strict';

import axios from 'axios';

import { config } from 'dotenv'
config()

const httpClient = () =>{
    const api = axios.create({baseURL: process.env.BASEURL})
    return api;
}

export const { post, get, patch, put } = httpClient();

export const executor = async (event)  =>{
  try {
    
  const cpf = event.pathParameters['cpf'];

  const { data } = await get(`/api/health`)

  if(data){
    return {
      statusCode: 200,
      body: JSON.stringify({ sucess:true })
    };
  }

  return {
    statusCode: 401,
    body: JSON.stringify({ sucess: false })
  };
  
    
  } catch (error) {
     console.log("ERRROR ", error)
      return {
        statusCode: 500,
        body: JSON.stringify({msg: "Erro interno de servidor"})
      }
  }
  
}
