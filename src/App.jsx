import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import ToggleAuthPage from "./pages/ToggleAuthPage";
import Dashboard from "./pages/Dashboard";
import DashboardLayout from "./layouts/DashboardLayouts/DashboardLayout";
import Timeline from "./pages/Timeline";
import ChatPage from "./pages/Chat";

const App = () => {
  const router=createBrowserRouter([
    {
      path:"/signup",
      element:<ToggleAuthPage/>,
    },
    {
      path:"/signin",
      element:<Signin/>,
    },
    {
      path: "/",
      element: <ToggleAuthPage />,  
    },
    {
      path: "/dashboard",
      element:<DashboardLayout><Dashboard/></DashboardLayout>,  
    },
    {
      path: "/timeline",
      element:<DashboardLayout><Timeline/></DashboardLayout>,  
    },
    {
      path: "/chats",
      element:<DashboardLayout><ChatPage/></DashboardLayout>,  
    },
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App;