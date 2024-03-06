"use client";
import Link from "next/link";
import { IoChevronDownSharp } from "react-icons/io5";
import React, { useState } from "react";

const Dropdown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tab, setTab] = useState(0);

  const handleOpenList = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="space-y-2 relative">
      <button
        type="button"
        onClick={handleOpenList}
        className="border-4 border-yellow-400 px-3 py-2 rounded-xl text-left w-44 flex justify-between items-center"
      >
        <span>{options[tab]}</span>
        <IoChevronDownSharp size={20} />
      </button>

      <div
        className={`absolute z-50 border-4 border-yellow-400 w-52 rounded-xl overflow-hidden transition-all duration-100 ease-linear bg-white  ${
          isOpen
            ? "opacity-1 top-11 pointer-events-auto"
            : "opacity-0 pointer-events-none top-9 "
        }`}
      >
        <ul className="p-1">
          {options?.map((opt, i) => (
            <li key={i}>
              <button
                className="p-2 rounded-md hover:bg-slate-100 capitalize w-full text-left"
                type="button"
                onClick={() => {
                  setTab(i);
                  setIsOpen(false);
                }}
              >
                {opt}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
