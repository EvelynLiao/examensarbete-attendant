import React, { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import crossIcon from "../assets/cross.svg";
import tickIcon from "../assets/tick.svg";

const SwipeCard = ({
  onApprove,
  onDeny,
  showButtons = true,
  middleBgColor = null,
  timeStamp = null,
}) => {
  const [index, setIndex] = useState(1); // Start at the middle card
  const [dismissed, setDismissed] = useState(false);

  const cards = [
    { text: "Request Approved", color: "#A62E71", textColor: "#FFFFFF" },
    { text: "18+ age verification" },
    { text: "Request Denied", color: "#6B373F", textColor: "#FFFFFF" },
  ];

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (index === 1) {
        setIndex(2);
        setTimeout(() => {
          if (onDeny) onDeny();
          setDismissed(true);
        }, 1500);
      }
    },
    onSwipedRight: () => {
      if (index === 1) {
        setIndex(0);
        setTimeout(() => {
          if (onApprove) onApprove();
          setDismissed(true);
        }, 1500);
      }
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  useEffect(() => {
    setIndex(1);
  }, []);

  if (dismissed) return null;

  const handleApprove = () => {
    setIndex(0);
    setTimeout(() => {
      if (onApprove) onApprove();
      setDismissed(true);
    }, 1500);
  };

  const handleDeny = () => {
    setIndex(2);
    setTimeout(() => {
      if (onDeny) onDeny();
      setDismissed(true);
    }, 1500);
  };

  return (
    <div
      {...handlers}
      style={{
        overflow: "hidden",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          transition: "transform 0.3s ease",
          transform: `translateX(-${index * 100}%)`,
        }}
      >
        {cards.map((card, i) => {
          const isMiddle = i === 1;
          const backgroundColor =
            isMiddle && middleBgColor ? middleBgColor : card.color;

          return (
            <div
              key={i}
              className="swipeCardItem"
              style={{
                backgroundColor: backgroundColor,
                color: card.textColor || "#000",
              }}
            >
              {isMiddle ? (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "100%",
                    width: "100%",
                  }}
                >
                  {/* Left side content */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      gap: "5px",
                    }}
                  >
                    <div className="titleLarge">18+ age verification</div>
                    <div className="bodyLarge">Item requires age of 21</div>
                  </div>

                  {/* Right side: buttons or timestamp */}
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    {showButtons ? (
                      <>
                        <img
                          src={tickIcon}
                          alt="Approve"
                          onClick={handleApprove}
                        />
                        <img src={crossIcon} alt="Deny" onClick={handleDeny} />
                      </>
                    ) : (
                      <div className="bodySmall">{timeStamp}</div>
                    )}
                  </div>
                </div>
              ) : (
                card.text
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SwipeCard;

