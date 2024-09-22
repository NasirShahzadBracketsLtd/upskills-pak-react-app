import axios from "axios";
import { API_BASE_URL, TOKEN } from "../../utils/constants";

const token = localStorage.getItem(TOKEN);
const headers = { headers: { Authorization: `Bearer ${token}` } };

export const fetchUser = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/users/${id}`, headers);
  if (response.status === 200) {
    return response.data;
  }
};

export const fetAllUsers = async () => {
  const response = await axios.get(`${API_BASE_URL}/users`, headers);
  if (response.status === 200) {
    return response.data;
  }
};

export const getRoleApi = async () => {
  const myToken = localStorage.getItem(TOKEN);
  const headers = { headers: { Authorization: `Bearer ${myToken}` } };

  const response = await axios.get(`${API_BASE_URL}/users/user/role`, headers);

  if (response.status === 200) {
    return response.data.role;
  }
};

// export const logoutApi = async () => {
//   const myToken = localStorage.getItem(TOKEN);
//   const myHeaders = { Authorization: `Bearer ${myToken}` };

//   await axios.post(`${API_BASE_URL}/auth/logout`, {}, { headers: myHeaders });
//   localStorage.removeItem(TOKEN);
//   localStorage.removeItem(`user`);
// };

// export const loginApi = async (email, password) => {
//   const response = await axios.post(`${API_BASE_URL}/auth/login`, { email, password });

//   if (response.data.token) {
//     localStorage.setItem(TOKEN, response.data.token.token);

//     return response.data.token.name;
//   }
// };
