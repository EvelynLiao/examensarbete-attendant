import React from "react";
import ageVerificationIcon from "../assets/ageVerification.svg";
import { getStatusIcon } from "./StatusIcon";

const ClickableCard = ({ tillNumber, onClick, isSelected, swipeCompleted }) => {
  let styleClass = "card";

  if (isSelected) {
    styleClass += " cardSelected";
  } else if (swipeCompleted) {
    styleClass += " cardClickNormal";
  } else {
    styleClass += " cardClick";
  }

  // console.log("ClickableCard render:", {
  //   tillNumber,
  //   isSelected,
  //   swipeCompleted,
  //   appliedClass: styleClass,
  // });

  return (
    <div className={`cursor-pointer ${styleClass}`} onClick={onClick}>
      <div className="flex flex-row items-center justify-between w-full h-[30%]">
        <div>{tillNumber}</div>
        <div>{getStatusIcon("scan")}</div>
      </div>
      {!swipeCompleted && (
        <div>
          <img src={ageVerificationIcon} alt="ageVerification" />
        </div>
      )}
    </div>
  );
};

export default ClickableCard;