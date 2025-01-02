const CardTwo = ({price,text}) => {
  return (
    <div className="bg-gray-200 text-gray-700 p-4 rounded-md text-center">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-bold">{price}</h3>
          <p>{text}</p>
        </div>
        <span>📄</span>
      </div>
    </div>
  );
};

export default CardTwo;
