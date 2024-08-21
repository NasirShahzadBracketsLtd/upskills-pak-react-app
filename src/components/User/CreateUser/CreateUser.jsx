import React from "react";

function CreateUser() {
  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">User Information</h2>

      <form className="space-y-2">
        {/* Name Fields */}
        <div className="flex flex-col md:flex-row md:space-x-6">
          <div className="flex-1">
            {/* <label className="block text-sm font-medium text-gray-600">First Name</label> */}
         h
          </div>
          <div className="flex-1 mt-4 md:mt-0">
            {/* <label className="block text-sm font-medium text-gray-600">Last Name</label> */}
            <input
              type="text"
              placeholder="Last Name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        {/* Email and Password Fields */}
        <div className="flex flex-col md:flex-row md:space-x-6">
          <div className="flex-1">
            {/* <label className="block text-sm font-medium text-gray-600">Email</label> */}
            <input
              type="email"
              placeholder="Email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="flex-1 mt-4 md:mt-0">
            {/* <label className="block text-sm font-medium text-gray-600">Password</label> */}
            <input
              type="password"
              placeholder="Password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        {/* Phone Number and Status Fields */}
        <div className="flex flex-col md:flex-row md:space-x-6">
          <div className="flex-1">
            {/* <label className="block text-sm font-medium text-gray-600">Phone Number</label> */}
            <input
              type="text"
              placeholder="Phone Number"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="flex-1 mt-4 md:mt-0">
            {/* <label className="block text-sm font-medium text-gray-600">Status</label> */}
            <input
              type="text"
              placeholder="Status"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        {/* Role and Gender Fields */}
        <div className="flex flex-col md:flex-row md:space-x-6">
          <div className="flex-1">
            {/* <label className="block text-sm font-medium text-gray-600">Role</label> */}
            <input
              type="text"
              placeholder="Role"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="flex-1 mt-4 md:mt-0">
            {/* <label className="block text-sm font-medium text-gray-600">Gender</label> */}
            <input
              type="text"
              placeholder="Gender"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        {/* Profile Picture and Enrolled Courses Fields */}
        <div className="flex flex-col md:flex-row md:space-x-6">
          <div className="flex-1">
            {/* <label className="block text-sm font-medium text-gray-600">Profile Picture</label> */}
            <input
              type="text"
              placeholder="Profile Picture"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="flex-1 mt-4 md:mt-0">
            {/* <label className="block text-sm font-medium text-gray-600">Enrolled Courses</label> */}
            <input
              type="text"
              placeholder="Courses"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateUser;
