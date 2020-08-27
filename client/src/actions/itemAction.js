import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS, ITEMS_LOADING } from './types';
import productApi from '../api/productApi';

export const getItems = () => async dispatch => {
  dispatch(setItemLoading());
  let res = await productApi.getItemList();
  dispatch({
    type: GET_ITEMS,
    payload: res.data
  })
}

export const deleteItems = (id) => {
  return {
    type: DELETE_ITEMS,
    payload: id,
  }
}

export const addItem = (item) => async dispatch => {
  let res = await productApi.addItem(item);
  dispatch({
    type: ADD_ITEMS,
    payload: res.data
  })
}

export const setItemLoading = () => {
  return {
    type: ITEMS_LOADING,
  }
}