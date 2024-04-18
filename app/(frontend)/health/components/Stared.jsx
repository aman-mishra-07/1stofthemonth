"use client";
import AppointmentForm from "../../../ui/AppointmentForm";
import React, { useState, useEffect } from "react";
import {
  fetchAppointmentOptions,
} from "../../../lib/action";

const Stared = () => {
  const [appointments, setAppointments] = useState([]);

  const fetchData = async () => {
    const data = await fetchAppointmentOptions();
    setAppointments(data);
    console.log(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  

  const handleAddAppointment = (id) => {
    console.log(id);
  }

  return (
    <div className="space-y-3">
      <h3 className="text-2xl font-semibold text-orange-600 py-10 mt-8">
        {}3 steps away to be 100% up-to-date with your health check.
      </h3>
      <div className="flex gap-2">
        <AppointmentForm />

        <div className="p-4 rounded-lg border border-black/40 w-fit flex gap-4 items-start bg-gray-100 h-fit">
          <button
            type="button"
            className="border flex items-center justify-center h-8 w-8 rounded-full bg-slate-200 shrink-0 text-2xl font-semibold"
          >
            +
          </button>
          <ul>
            <li>
              <button type="button" onClick={fetchData}>Add custom lable</button>
            </li>
            {appointments?.map((appointment, i) => (<li key={appointment?.title}>
              <button type="button" onClick={() => handleAddAppointment(i)}>{appointment?.title}</button>
            </li>))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Stared;
