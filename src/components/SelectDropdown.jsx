import  { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Role");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-64">
      {/* Header */}
      <div
        onClick={toggleDropdown}
        className="flex justify-between items-center px-4 py-2 border border-gray-300 rounded-full cursor-pointer"
      >
        <span>{selectedOption}</span>
        <span className="text-gray-500">&#9662;</span> {/* Arrow icon */}
      </div>

      {/* Dropdown Options */}
      {isOpen && (
        <ul
          className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10 overflow-hidden"
        >
          <li
            onClick={() => selectOption("Client")}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          >
            Client
          </li>
          <li
            onClick={() => selectOption("Employee")}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          >
            Employee
          </li>
          <li
            onClick={() => selectOption("Customer Representatives")}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          >
            Customer Representatives
          </li>
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
