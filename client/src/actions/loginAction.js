import { SIGN_IN_USER, SIGN_IN_USER_SUCCESS, SIGN_UP_USER, SIGN_UP_USER_SUCCESS } from './types';
import LoginApi from '../api/signInApi';

export const signIn = (data) => async dispatch => {
  dispatch(setUserLoading());
  let res = await LoginApi.postLogin(data);
  dispatch({
    type: SIGN_IN_USER_SUCCESS,
    payload: res.data
  })
}

export const setUserLoading = () => {
  return {
    type: SIGN_IN_USER,
  }
}

export const signUp = (data) => async dispatch => {
  dispatch(cretaeNewUser());
  let res = await LoginApi.signUp(data);
  dispatch({
    type: SIGN_UP_USER_SUCCESS,
    payload: res.data
  })
}

export const cretaeNewUser = () => {
  return {
    type: SIGN_UP_USER,
  }
}