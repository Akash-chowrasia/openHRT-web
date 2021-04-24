import { hostedAxios } from '../../helpers/hosted-axios';

export const authApi = {};

authApi.doLogin = async ({ email, password }) =>
  hostedAxios.post('/login', { email, password });

authApi.doRegister = async (data) => hostedAxios.post('/register', data);
