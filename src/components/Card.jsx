const Card = ({ type, number, price, text, image, actionText, actionLink }) => {
  return (
    <div
      className={`p-4 rounded-md text-center ${
        type === "primary" ? "bg-[#1E3A8A] text-white" : "border border-black"
      }`}
    >
      <div>
        <div className="flex justify-start">
          {actionText && actionLink && (
            <a href={actionLink} className="text-blue-500 underline">
              {actionText}
            </a>
          )}
        </div>
        <div className="flex justify-end">
          {image && (
            <img src={image} style={{ height: "35px", width: "35px" }} />
          )}
        </div>
      </div>
      <div className="flex justify-between items-center mt-8">
        {number && <h3 className="text-3xl font-bold">{number}</h3>}
        {price && <h3 className="text-xl font-bold">{price}</h3>}
      </div>
      <p className="text-start">{text}</p>
    </div>
  );
};

export default Card;
