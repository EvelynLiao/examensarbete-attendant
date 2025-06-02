import ReceiptView from "./ReceiptView";
import NotificationList from "./NotificationList";

const RightSection = ({
  className = "",
  view,
  selectedTill,
  onSwipeAction,
  setSwipeCompleted,
  swipeCompleted,
}) => {
  return (
    <div className="rightSection">
      {view === "receipt" && <ReceiptView onSwipeAction={onSwipeAction} />}
      {view === "notification" && (
        <NotificationList
          swipeCompleted={swipeCompleted}
          setSwipeCompleted={setSwipeCompleted}
        />
      )}
      {view === "none" && (
        <div className="receipt">
          <div className="receipt-title">Receipt</div>
          <div className="receipt-info">No till selected</div>
          <div className="receipt-summa">Summa 0</div>
        </div>
      )}
    </div>
  );
};

export default RightSection;
