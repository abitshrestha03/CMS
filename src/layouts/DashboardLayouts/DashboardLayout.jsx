import DashboardHeader from "../../components/DashboardHeader"
import DashboardSidebar from "../../components/DashboardSidebar"


const DashboardLayout = ({ children }) => {
    return (
        <div className="flex h-screen bg-gray-100">
            <DashboardSidebar />
            <div className="flex flex-col flex-1">
                <DashboardHeader />
                <main className="flex-1 p-6 overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default DashboardLayout