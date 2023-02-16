import axios from 'axios';

var url = `https://api.github.com/users/pedro-bink`;
export const requestAPI = axios.create({
  baseURL: url,
});
