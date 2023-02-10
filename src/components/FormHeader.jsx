import React from "react";

const FormHeader = ({ heading }) => {
  return (
    <div className="w-full text-center mt-2 uppercase text-lg font-bold text-slate-600 hidden phone:block">
      <p>{heading}</p>
    </div>
  );
};

export default FormHeader;
