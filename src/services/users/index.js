import axios from "axios";
import { API_BASE_URL } from "../../utils/constants";

const token = localStorage.getItem("token");
const headers = { headers: { Authorization: `Bearer ${token}` } };
export const fetchUser = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/users/${id}`, headers);
  if (response.status === 200) {
    return response.data;
  }
};
