import { API_BASE_URL, TOKEN } from "../../utils/constants";
import api from "../api";

const token = localStorage.getItem(TOKEN);
const headers = { headers: { Authorization: `Bearer ${token}` } };

export const createUserApi = async (formData) => {
  const response = await api.post(`${API_BASE_URL}/users`, formData, headers);
  if (response.status === 201) {
    return response.data;
  }
};

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

export const deleteUserApi = async (id) => {
  await api.delete(`${API_BASE_URL}/users/${id}`, headers);
};

export const updateUserApi = async (_user_id, formData) => {
  console.log(formData);
  const response = await api.patch(`${API_BASE_URL}/users/${_user_id}`, formData, headers);
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
