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
      {tabs[searchParams.tab] ? tabs[searchParams.tab] : tabs["my-goals"]}
    </div>
  );
};

export default page;
