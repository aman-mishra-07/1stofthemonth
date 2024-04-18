"use client";
import { useState } from "react";
import Input from "./form-components/Input";
import { createAppointment } from "../lib/action";

const validateForm = (appointment) => {
  let isValid = false;
  if (appointment?.title?.trim() === "") return isValid;
  if (!appointment?.date) return isValid;
  if (appointment?.doctor?.trim() === "") return isValid;

  isValid = true;
  return isValid;
};

const AppointmentForm = ({ heading }) => {
  const [creatingAppointment, setCreatingAppointment] = useState(false);
  const [card, setCard] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const data = Object.fromEntries(formdata);
    if (validateForm(data)) {
      const appointmentRes = await createAppointment(data);
      console.log(appointmentRes);
      setCreatingAppointment(appointmentRes);
    }
  };

  return (
    <div className="w-full max-w-sm">
      <form onSubmit={handleSubmit}>
        <div className="border-2 border-slate-400 p-4 rounded-lg border-black/40">
          <h4 className="text-xl font-bold tracking-tighter">{heading}</h4>
          <div className="text-sm space-y-2 md:mt-6">
            {card ? (
              <>
                <Input type="text" name="title" label={"Title"} />
                <Input type="date" name="date" label={"Date"} />
                <Input type="text" name="doctor" label={"Dr. "} />
              </>
            ) : (
              <>
                <p>1</p>
                <p>2</p>
                <p>3</p>
              </>
            )}
            <button
              type="submit"
              className={`px-3 py-2 mt-4 bg-green-600 text-white rounded-lg ${
                creatingAppointment ? "bg-blue-500" : ""
              }`}
            >
              Save
            </button>

            <div>Tags :</div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;
