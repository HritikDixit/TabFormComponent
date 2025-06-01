import React, { useState } from "react";
import Interest from "./Interest";
import Profile from "./Profile";
import Settings from "./Settings";

export default TabForm = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState({
    name: "Hritik Dixit",
    age: "40",
    Gender: "Male",
    email: "hritikdixit@gmail.com",
    theme: "dark",
    interests: ["music", "coding", "javascript"],
  });
  const tabs = [
    {
      name: "Profile",
      component: Profile,
    },
    {
      name: "Settings",
      component: Settings,
    },
    {
      name: "Interest",
      component: Interest,
    },
  ];
  const ActiveTabComponent = tabs[activeTab].component;

  const handlePrevClick = () => {
    setActiveTab((prev) => prev - 1);
  };

  const handleNextClick = () => {
    setActiveTab((prev) => prev + 1);
  };

  const handleSubmitClick = () => {
    console.log(data);
  };

  return (
    <>
      <div className="headingContainer">
        {tabs.map((t, index) => (
          <div
            key={index}
            className="heading"
            onClick={() => setActiveTab(index)}
          >
            {t.name}
          </div>
        ))}
      </div>
      <div className="tab-Body">
        <ActiveTabComponent data={data} setData={setData} />
      </div>
      <div>
        {activeTab > 0 && <button onClick={handlePrevClick}> Prev </button>}
        {activeTab < tabs.length - 1 && (
          <button onClick={handleNextClick}> Next </button>
        )}
        {activeTab === tabs.length - 1 && (
          <button onClick={handleSubmitClick}> Submit </button>
        )}
      </div>
    </>
  );
};
