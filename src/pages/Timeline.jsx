import Card from "../components/Card";
import ProgressImage from "/images/ProgressImage.png";
import ExclamationImage from "/images/ExclamationImage.png";
import CompleteCircleImage from "/images/CompleteCircleImage.png";
import PaidRedImage from "/images/PaidRedImage.png";
import PaidGreenImage from "/images/PaidGreenImage.png";
import ProjectTable from "../components/ProjectTable";
import { IoIosArrowDown } from "react-icons/io";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const Timeline = () => {
  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-2 gap-2 mb-8">
        <div className="grid grid-cols-3 gap-2">
          <Card
            type="primary"
            number="12"
            text="In Progress"
            image={ProgressImage}
          />
          <Card
            type="primary"
            number="25"
            text="Completed"
            image={CompleteCircleImage}
          />
          <Card
            type="primary"
            number="2"
            text="Completed Tasks"
            image={ExclamationImage}
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Card
            type="secondary"
            price="$250"
            text="Total amount paid"
            image={PaidGreenImage}
          />
          <Card
            type="secondary"
            price="$50"
            text="Pending Payments"
            image={PaidRedImage}
            actionText="Pay Now"
            actionLink="#"
          />
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center mb-4">
          <div></div>
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-[#F0F0F0] text-[#B3B3B3] rounded flex items-center">
              Sort
              <FaArrowUp className="h-3 w-3 ml-1 mr-1" />
              <FaArrowDown className="h-3 w-3" />
            </button>

            <button className="px-4 py-2 bg-[#F0F0F0] text-[#B3B3B3] rounded flex items-center">
              This Month
              <IoIosArrowDown className="h-4 w-4 ml-1" />
            </button>
          </div>
        </div>{" "}
        <div className="overflow-hidden">
          <ProjectTable />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
