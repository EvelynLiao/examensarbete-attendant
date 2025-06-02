const Card = ({tillNumber, statusIcon}) => {
  return (
    <div className="card">
      <div className="flex flex-row items-center justify-between w-full h-[30%]">
        <div>{tillNumber}</div>
        <div>{statusIcon}</div>
      </div>
    </div>
  );
};

export default Card;