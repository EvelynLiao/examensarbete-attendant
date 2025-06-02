import scanIcon from "../assets/scan.svg";
import paymentIcon from "../assets/creditCard.svg";
import checkIcon from "../assets/check.svg";

export const getStatusIcon = (status) => {
  switch (status) {
    case "scan":
      return <img src={scanIcon} alt="scan" />;
    case "payment":
      return <img src={paymentIcon} alt="payment" />;
    case "complete":
      return <img src={checkIcon} alt="complete" />;
    default:
      return null;
  }
};
