import React, { useState, useEffect } from "react";
import Header from "./component/Header";
import RightSection from "./RightSection";
import LeftSection from "./LeftSection";
import "./index.css";

const App = () => {
  const [rightView, setRightView] = useState("none");
  const [selectedTill, setSelectedTill] = useState(null);
  const [renderId, setRenderId] = useState(0);
  const [swipeCompleted, setSwipeCompleted] = useState(false);

  useEffect(() => {
    console.log("App - selectedTill changed:", selectedTill);
  }, [selectedTill]);

  const handleSwipeAction = () => {
    setSelectedTill(null);
    setSwipeCompleted(true); // mark swipe done
  };

  const handelTillSelect = (tillNumber) => {
    setSelectedTill(tillNumber);
    setSwipeCompleted(false);
    setRightView("receipt");
  };

  const handelNotificationClick = () => {
    if (!swipeCompleted) {
      setRightView("notification");
      setSelectedTill(null); // Reset selected card when switching to notifications
      setRenderId((prev) => prev + 1);
    }
  };

  return (
    <div>
      <Header
        onNotificationClick={handelNotificationClick}
        notificationsEnabled={!swipeCompleted}
      />

      <div
        className="flex justify-between flexContainer"
        style={{ height: "91.5vh" }}
      >
        <LeftSection
          onSelectTill={handelTillSelect}
          selectedTill={selectedTill}
          renderId={renderId}
          swipeCompleted={swipeCompleted}
        />
        <RightSection
          view={rightView}
          selectedTill={selectedTill}
          onSwipeAction={handleSwipeAction}
          setSwipeCompleted={setSwipeCompleted}
        />
      </div>
    </div>
  );
};

export default App;