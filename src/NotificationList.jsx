import React from "react";
import SwipeCard from "./component/SwipeCard";

const NotificationList = ({ swipeCompleted, setSwipeCompleted }) => {
  // These handlers will mark swipe completed when user swipes left/right
  const handleApprove = () => {
    setSwipeCompleted(true);
  };

  const handleDeny = () => {
    setSwipeCompleted(true);
  };

  return (
    <div className="rightSection">
      <div style={{ borderBottom: "1px solid #ccc", width: "100%" }}>
        <SwipeCard
          onApprove={handleApprove}
          onDeny={handleDeny}
          showButtons={false}
          timeStamp="2 sec ago"
          middleBgColor="#ffffff"
        />
      </div>
    </div>
  );
};

export default NotificationList;
