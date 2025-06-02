import React, {useState} from "react";
import SwipeCard from "./component/SwipeCard";
import scanner from "./assets/adfScanner.svg";
import receipt from "./assets/receiptLong.svg";
import shoppingBag from "./assets/shoppingBag.svg";

const ReceiptView = ({onSwipeAction}) => {
  const [showSwipeCard, setShowSwipeCard] = useState(true);

  //dynamic items
  const items = [
    { name: "GRILLKORV 500g", price: "10,00" },
    { name: "BREAD", price: "25,00" },
    { name: "MILK", price: "15,50" },
    { name: "COLOMBIA KAFFE", price: "45,90" },
    { name: "ENERGY DRIK 250ML", price: "19,50" },
    { name: "NÖTSTEK FRANSY CA1 . 1", price: "104,99" },
  ];

  const handleApprove = () => {
    setShowSwipeCard(false);
    if (onSwipeAction) onSwipeAction();
  };
  const handleADeny = () => {
    setShowSwipeCard(false);
    if (onSwipeAction) onSwipeAction();
  };

  return (
    <div className="flex flex-col justify-between h-full w-full">
      <div className="flex flex-col h-full">
        {/* container */}
        <div class="flex justify-center w-full overflow-hidden space-x-8 py-4 border-b border-gray-300">
          <div className="iconTextPair">
            <img src={scanner} alt="scanner icon" className="w-6 h-6" />
            <span>6</span>
          </div>

          <div className="iconTextPair">
            <img src={receipt} alt="scanner icon" className="w-6 h-6" />
            <span>3140</span>
          </div>

          <div className="iconTextPair">
            <img src={shoppingBag} alt="scanner icon" className="w-6 h-6" />
            <span>6</span>
          </div>

          <div className="iconTextPair">12:24</div>
        </div>

        <div className="flex flex-col justify-between h-full">
          {/* item list */}
          <div className="px-4 py-2 space-y-2">
            {items.map((item, index) => (
              <div key={index} className="flex justify-between">
                <div>{item.name}</div>
                <div>{item.price}</div>
              </div>
            ))}
          </div>

          <div class="w-full flex justify-between px-4 py-4 border-t border-gray-300">
            <div>Summa</div>
            <div>220.89</div>
          </div>
        </div>
      </div>

      {showSwipeCard && (
        <SwipeCard onApprove={handleApprove} onDeny={handleADeny} />
      )}
    </div>
  );
};

export default ReceiptView;

