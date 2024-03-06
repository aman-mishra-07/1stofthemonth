import React from "react";
import Family from "./components/Family";
import Doctor from "./components/Doctor";
import { Suspense } from "react";

const page = ({ searchParams }) => {
  const tabs = {
    family: <Family />,
    doctor: <Doctor />,
  };

  return (
    <div>
      <Suspense>
        {tabs[searchParams.tab] ? tabs[searchParams.tab] : tabs.family}
      </Suspense>
    </div>
  );
};
export default page
