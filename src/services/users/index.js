import { API_BASE_URL, TOKEN } from "../../utils/constants";
import api from "../api";

const token = localStorage.getItem(TOKEN);
const headers = { headers: { Authorization: `Bearer ${token}` } };

export const fetchUser = async (id) => {
  const response = await api.get(`${API_BASE_URL}/users/${id}`, headers);
  if (response.status === 200) {
    return response.data;
  }
};

export const fetAllUsers = async () => {
  const response = await api.get(`${API_BASE_URL}/users`, headers);
  if (response.status === 200) {
    return response.data;
  }
};

export const getRoleApi = async () => {
  const myToken = localStorage.getItem(TOKEN);
  const headers = { headers: { Authorization: `Bearer ${myToken}` } };

  const response = await api.get(`${API_BASE_URL}/users/user/role`, headers);

  if (response.status === 200) {
    return response.data.role;
  }
};
