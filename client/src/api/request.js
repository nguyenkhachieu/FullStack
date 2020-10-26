import axios from 'axios';
const apiUrl = 'http://localhost:5000/api/';

export default function request(url, options) {
  return axios({ ...options, url: url })
    .then((response) => (response));
}

export function get(url){
  let fullUrl = apiUrl + url;
  let user;
  let headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
  };

  if (user && user != null) {
    headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'token' + ' ' + user.token,
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache'
    };
  }

  let options = {
    method: 'GET',
    headers: headers,
    credentials: "include"
  };

  return request(fullUrl, options);
}

export function post(url, bodyData) {

  let fullUrl = apiUrl + url;
  // let user = getCurrentUser();
  let user;
  let headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  };

  if (user && user != null) {
    headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'token' + ' ' + user.token
    };
  }

  let options = {
    method: 'POST',
    headers: headers,
    credentials: 'include',
    data: bodyData
  };


  return request(fullUrl, options);
}
