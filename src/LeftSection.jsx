import React from "react";
import Card from "./component/Card";
import ClickableCard from "./component/ClickableCard";
import { getStatusIcon } from "./component/StatusIcon";

const LeftSection = ({ onSelectTill, selectedTill, renderId, swipeCompleted }) => {
  const tills = Array.from({ length: 25 }, (_, i) => ({
    number: `${i + 1}`,
    status: i % 3 === 0 ? "scan" : i % 3 === 1 ? "payment" : "complete",
  }));

  const handleClick = (tillNumber, index) => {
    if (onSelectTill) onSelectTill(tillNumber);
    console.log("Selected index:", index);
  };

  return (
    <div className="leftSection">
      {tills.map((till, index) =>
        index === 5 ? (
          <ClickableCard
            key={`clickable-${renderId}`} // handle null safely
            tillNumber={till.number}
            statusIcon={getStatusIcon(till.status)}
            onClick={() => handleClick(till.number, index)}
            isSelected={selectedTill === till.number}
            swipeCompleted={swipeCompleted}
          />
        ) : (
          <Card
            key={index}
            tillNumber={till.number}
            statusIcon={getStatusIcon(till.status)}
          />
        )
      )}
    </div>
  );
};

export default LeftSection;