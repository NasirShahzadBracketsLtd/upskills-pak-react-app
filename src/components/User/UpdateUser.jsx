import React, { useEffect, useState } from "react";
import Select from "react-select";
import { USER_GENDER, USER_ROLE, USER_STATUS } from "../../utils/enum";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { API_BASE_URL } from "../../utils/constants";
import { toast } from "react-toastify";
import { fetchUser } from "../../services/users";

const UpdateUser = () => {
  // Added default empty array for `courses`
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    gender: USER_GENDER.MALE,
    role: USER_ROLE.STUDENT,
    status: USER_STATUS.ACTIVE,
    enrolledCourses: [],
  });

  /**-------------------------------------------------------------------
                     * Handle Token and Headers
   -------------------------------------------------------------------*/

  const token = localStorage.getItem(`token`);

  if (!token) {
    navigate(`/login`);
  }
  const headers = { headers: { Authorization: `Bearer ${token}` } };

  useEffect(() => {
    const fetchCoursesList = async () => {
      try {
        const usersResponse = await axios.get(
          `${API_BASE_URL}/courses`,
          headers
        );
        setCourses(usersResponse.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCoursesList();
  }, []);

  // Fetch user data when the component mounts if an ID is present
  useEffect(() => {
    const fetchUserDetails = async (id) => {
      try {
        const user = await fetchUser(id);
        setUser(user);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    if (userId) {
      fetchUserDetails(userId);
    }
  }, [userId]);

  // Prefill form when editing a user
  useEffect(() => {
    if (user) {
      console.log("user", user);
      setFormData({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
        phoneNumber: user.phoneNumber || "",
        gender: user.gender || USER_GENDER.MALE,
        role: user.role || USER_ROLE.STUDENT,
        status: user.status || USER_STATUS.ACTIVE,
        enrolledCourses: user.enrolledCourses || [], // Map to course IDs
      });
    }
  }, [user]);

  // Handle input change for regular inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle multi-select change for enrolled courses
  const handleCourseChange = (selectedCourses) => {
    setFormData({
      ...formData,
      enrolledCourses: selectedCourses
        ? selectedCourses.map((course) => course.value)
        : [],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (user) {
        const response = await axios.patch(
          `${API_BASE_URL}/users/${user._id}`,
          formData,
          headers
        );
        if (response.status === 200) {
          toast.success(`User Updated Successfully!`);
          navigate(`/users/${user._id}`);
        }
      }
    } catch (err) {
      toast.error(`Failed to update user. Please try again.`);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mx-36 mt-6">
      <h2 className="text-2xl font-bold mb-6">{`Update User`}</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* FirstName */}
          <div className="mb-4">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              aria-label="First Name"
            />
          </div>

          {/* LastName */}
          <div className="mb-4">
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              aria-label="Last Name"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              aria-label="Email"
            />
          </div>

          {/* Gender */}
          <div className="mb-4">
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              aria-label="Gender"
            >
              <option value={USER_GENDER.MALE}>{USER_GENDER.MALE}</option>
              <option value={USER_GENDER.FEMALE}>{USER_GENDER.FEMALE}</option>
              <option value={USER_GENDER.OTHER}>{USER_GENDER.OTHER}</option>
            </select>
          </div>

          {/* PhoneNumber */}
          <div className="mb-4">
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              aria-label="Phone Number"
            />
          </div>

          {/* Role */}
          <div className="mb-4">
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              aria-label="Role"
            >
              <option value={USER_ROLE.ADMIN}>{USER_ROLE.ADMIN}</option>
              <option value={USER_ROLE.STUDENT}>{USER_ROLE.STUDENT}</option>
            </select>
          </div>

          {/* Status */}
          <div className="mb-4">
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              aria-label="Status"
            >
              <option value={USER_STATUS.ACTIVE}>{USER_STATUS.ACTIVE}</option>
              <option value={USER_STATUS.INACTIVE}>
                {USER_STATUS.INACTIVE}
              </option>
            </select>
          </div>

          {/* Enrolled Courses */}
          <div className="mb-4 col-span-2">
            <Select
              isMulti
              name="courses"
              options={courses.map((course) => ({
                value: course._id,
                label: course.title,
              }))}
              value={courses
                .filter((course) =>
                  formData.enrolledCourses.includes(course._id)
                ) // Show preselected courses
                .map((course) => ({ value: course._id, label: course.title }))}
              className="basic-multi-select"
              classNamePrefix="select"
              onChange={handleCourseChange}
              placeholder="Select Enrolled Courses"
              aria-label="Enrolled Courses"
            />
          </div>
        </div>

        <div className="flex justify-end mt-6">
          <button
            type="button"
            onClick={() => navigate("/users")}
            className="mr-4 bg-red-500 text-white hover:bg-red-600 px-6 py-2 rounded-full focus:outline-none"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white hover:bg-blue-600 px-6 py-2 rounded-full focus:outline-none"
          >
            {"Update User"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;
