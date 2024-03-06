import AppointmentForm from "../../../ui/AppointmentForm";
import React from "react";

const Stared = () => {
  return (
    <div className="space-y-3">
      <h3 className="text-2xl font-semibold text-orange-600 py-10 mt-8">
        3 steps away to be 100% up-to-date with your health check.
      </h3>
      <div className="flex gap-2">
        <AppointmentForm />
        <div className="p-4 rounded-lg border border-black/40 w-fit flex gap-4 items-start bg-gray-100 h-fit">
          <button type="button">Add</button>
          <ul>
            <li>
              <button type="button">Add custom lable</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Stared;
