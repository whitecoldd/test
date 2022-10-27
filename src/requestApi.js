import axios from 'axios'

const BASE_URL ='https://www.breakingbadapi.com/api/'

export const publicRequest = axios.create({
    baseURL: BASE_URL,
  });