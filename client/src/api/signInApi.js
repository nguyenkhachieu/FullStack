import { post } from './request';

class LoginApi {
  static postLogin(data) {
    return post('login', data).then(res => res.data);
  }

  static signUp(data) {
    return post('user/register', data).then(res => res.data);
  }
}

export default LoginApi;