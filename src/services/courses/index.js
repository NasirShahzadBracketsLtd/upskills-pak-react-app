import axios from "axios";
import { API_BASE_URL } from "../../utils/constants";

const token = localStorage.getItem("token");
const headers = { headers: { Authorization: `Bearer ${token}` } };

export const getSingleCourse = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/courses/${id}`, headers);
  if (response.status === 200) {
    return response.data;
  }
};

export const getAllCourses = async () => {
  const response = await axios.get(`${API_BASE_URL}/courses`, headers);

  if (response.status === 200) {
    return response.data;
  }
};

export const deleteCourseApi = async (id) => {
  const response = await axios.delete(`${API_BASE_URL}/courses/${id}`, headers);
  if (response.status === 200) {
    return response.data;
  }
};

export const createCourseApi = async (courseData) => {
  const response = await axios.post(`${API_BASE_URL}/courses`, courseData, headers);
  if (response.status === 201) {
    return response.data;
  }
};

export const updateCourseApi = async (id, courseData) => {
  const response = await axios.patch(`${API_BASE_URL}/courses/${id}`, courseData, headers);
  if (response.status === 200) {
    return response.data;
  }
};

export const getAllPublicCoursesApi = async () => {
  const response = await axios.get(`${API_BASE_URL}/courses/public/courses`);

  if (response.status === 200) {
    return response.data;
  }
};

export const getSinglePublicCourseApi = async (_course_id) => {
  const response = await axios.get(`${API_BASE_URL}/courses/public/course/${_course_id}`);

  if (response.status === 200) {
    return response.data;
  }
};
