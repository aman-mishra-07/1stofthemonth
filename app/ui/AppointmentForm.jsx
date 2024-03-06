"use client";

import { createAppointment } from "../lib/action";

const AppointmentForm = ({ heading }) => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target)
    const data = Object.fromEntries(formdata);
    data.id = Date.now();
    console.log(data);
    createAppointment(data)
  };
  return (
    <div className="w-full max-w-sm">
      <form onSubmit={handleSubmit}>
        <div className="border-2 border-slate-400 p-4 rounded-lg border-black/40">
          <h4 className="text-xl font-bold tracking-tighter">
            Dental Appointment
          </h4>
          <div className="text-sm space-y-2 md:mt-6">
            <div>
              <label>Title </label>
              <input
                type="text"
                name="title"
                className="border-b bg-transparent w-32 outline-none"
              />
            </div>
            <div>
              <label>Notes </label>
              <input
                type="text"
                name="notes"
                className="border-b bg-transparent w-32 outline-none"
              />
            </div>
            <div>
              <label>Date </label>
              <input
                type="date"
                name="date"
                className="border-b bg-transparent w-32 outline-none"
              />
            </div>
            <div>
              <label>Dr. </label>
              <input
                type="text"
                name="doctor"
                className="border-b bg-transparent w-32 outline-none"
              />
            </div>
            <div className="">
                <button type="submit" className="px-3 py-2 mt-4 bg-green-600 text-white rounded-lg"> Save </button>
            </div>
            <div>
                Tags : 
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;
