import React from "react";

function ServiceCard({ image, count, title }) {
  return (
    <div>
      <div
        className="bg-red-500 h-40 flex flex-col justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <h3 className="text-7xl font-bold">{count}</h3>
        <p className="text-2xl font-semibold">{title}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
