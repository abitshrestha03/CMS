import { useState } from "react";

export default function CustomSelect() {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility
  const [selectedOption, setSelectedOption] = useState("ROLE"); // State for selected option

  const options = ["CLIENT", "EMPLOYEE", "CUSTOMER REPRESENTATIVES"];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div className="w-full">
      {/* Select field */}
      <div
        className={`flex justify-between items-center border ${
          isOpen ? "border-black" : ""
        }  rounded-t-[24px] 2k:rounded-t-[80px]  ${
          isOpen ? "rounded-b-none" : "rounded-[24px] 2k:rounded-[80px]"
        } py-4 2k:py-7 px-4 2k:px-8 text-xs 2k:text-4xl cursor-pointer shadow-sm`}
        onClick={() => setIsOpen(!isOpen)}
        style={{ boxShadow: `0px 4px 16px 0px #3c3c3c14` }}
      >
        <span
          className={`text-xs 2k:text-4xl ${
            selectedOption === "ROLE" ? "text-custom-gray" : ""
          }`}
        >
          {selectedOption}
        </span>
        <svg
          className={`w-7 2k:w-14 h-7 2k:h-14 transform ${
            isOpen ? "rotate-180" : "rotate-0"
          } transition-transform text-custom-gray`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.06 0l-4.25-4.25a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {/* Dropdown with smooth transition */}
      <div
        className={`overflow-hidden transition-all duration-700 ease-in-out${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{
          maxHeight: isOpen ? "500px" : "0",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className={`border border-black rounded-b-[24px] 2k:rounded-b-[80px]`}>
          {options.map((option, index) => (
            <div
              key={index}
              className={`px-4 2k:px-8 py-5 2k:py-8 text-xs 2k:text-4xl cursor-pointer text-custom-gray hover:bg-gray-100 ${
                index === options.length - 1 ? "rounded-b-[24px] 2k:rounded-b-[80px]" : ""
              }`}
              onClick={() => handleOptionClick(option)}
              style={{ boxSizing: "border-box" }}
            >
              {option}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
