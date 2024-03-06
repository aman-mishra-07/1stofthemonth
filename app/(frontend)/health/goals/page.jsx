import { Suspense } from "react";
import Activity from "./components/Activity";
import Diet from "./components/Diet";
import MyGoals from "./components/MyGoals";

const page = ({ searchParams }) => {
  const tabs = {
    activity: <Activity />,
    "my-goals": <MyGoals />,
    diet: <Diet />,
  };

  return (
    <div>
      <Suspense>
        {tabs[searchParams.tab] ? tabs[searchParams.tab] : tabs["my-goals"]}
      </Suspense>
    </div>
  );
};

export default page;
