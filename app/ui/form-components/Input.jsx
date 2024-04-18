import React from "react";

const Input = ({ type, name, onChange, label, value }) => {
  return (
    <div className="flex gap-2">
      <label>{label}</label>
      <input
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        className="border-b bg-transparent w-32 outline-none"
      />
    </div>
  );
};

export default Input;
