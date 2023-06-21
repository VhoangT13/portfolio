import React from "react";

const Tag = ({ children, className }) => {
  return (
    <div
      className={`${className} border border-gray-800 md:px-3 md:py-2 px-2 py-1 rounded-full`}
    >
      {children}
    </div>
  );
};

export default Tag;
