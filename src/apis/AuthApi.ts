import axios from 'axios';

const baseURL = 'http://localhost:8080/api/auth/login';

interface LoginResponse {
  accessToken: string;
  tokenType: string;
}

interface LoginError {
  message: string;
}

export const login = async (usernameOrEmail: string, password: string) => {
  try {
    const response = await axios.post(baseURL, {
        usernameOrEmail:usernameOrEmail,
     password: password,
    });
    console.log(response.data)
    return response.data;
  } catch (error: any) {
    const errorMessage = error.response ? (error.response.data as LoginError).message : error.message;
    throw new Error(errorMessage);
  }
};
