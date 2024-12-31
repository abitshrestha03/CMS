import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";

const App = () => {
  const router=createBrowserRouter([
    {
      path:"/signup",
      element:<Signup/>,
    },
    {
      path:"/signin",
      element:<Signin/>,
    },
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App;