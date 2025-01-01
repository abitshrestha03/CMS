import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import ToggleAuthPage from "./pages/ToggleAuthPage";

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
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App;