import React from "react";

function TextField(
  type = "text",
  placeholder = "Enter your email",
  value = "",
  onChange = () => {},
  className = "",
  ...props
) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    />
  );
}

export default TextField;
