import axios from 'axios';
const url = 'http://localhost:5000/api/';

const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
}

export default class productApi {
  static getItemList = () => {
    return axios
      .get(url + 'items');
  }

  static addItem = (data) => {
    return axios
      .post(url + 'items', data);
  }
}