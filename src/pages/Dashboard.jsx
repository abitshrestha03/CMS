import Card from "../components/Card";
import ProgressImage from "/images/ProgressImage.png";
import ExclamationImage from "/images/ExclamationImage.png";
import CompleteCircleImage from "/images/CompleteCircleImage.png";
import PaidRedImage from "/images/PaidRedImage.png";
import PaidGreenImage from "/images/PaidGreenImage.png";
import ProjectTable from "../components/ProjectTable";

const Dashboard = () => {
  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-2 gap-2 mb-8">
        <div className="grid grid-cols-3 gap-2">
          <Card
            type="primary"
            number="212"
            text="Active Tasks"
            image={ProgressImage}
          />
          <Card
            type="primary"
            number="15"
            text="Overdue Tasks"
            image={ExclamationImage}
          />
          <Card
            type="primary"
            number="685"
            text="Completed Tasks"
            image={CompleteCircleImage}
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          <Card
            type="secondary"
            price="$750"
            text="Total amount paid"
            image={PaidGreenImage}
          />
          <Card
            type="secondary"
            number="50"
            text="Placeholder Task 1"
            image={PaidRedImage}
            actionText="Pay Now"
            actionLink="#"
          />
        </div>
      </div>

      <div>
        <h2 className="text-lg font-bold mb-4">Recent Projects</h2>
        <div className="overflow-hidden">
          <ProjectTable/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
