import axios from "axios";
import { API_BASE_URL, TOKEN } from "../../utils/constants";

export const loginApi = async (email, password) => {
  const response = await axios.post(`${API_BASE_URL}/auth/login`, { email, password });

  if (response.data.token) {
    localStorage.setItem(TOKEN, response.data.token.token);

    return response.data.token.name;
  }
};

export const logoutApi = async () => {
  const myToken = localStorage.getItem(TOKEN);
  const myHeaders = { Authorization: `Bearer ${myToken}` };

  await axios.post(`${API_BASE_URL}/auth/logout`, {}, { headers: myHeaders });
  localStorage.removeItem(TOKEN);
  localStorage.removeItem(`user`);
};
