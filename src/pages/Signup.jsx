import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Section */}
      <div className="hidden md:flex md:w-[60%] lg:w-[35%] bg-custom-blue text-white tracking-wide flex-col justify-center items-center md:px-8 px-16">
        <div className="text-center">
          <h1 className="text-4xl 2k:text-8xl font-semibold">Welcome Back</h1>
        </div>

        <div className="text-center text-[#F4F4F4] text-md 2k:text-4xl mt-3 mb-6 font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et.
        </div>
        <button
          className="px-10 2k:px-14 py-2 2k:py-4 2k:text-5xl text-white border border-white rounded-full"
          onClick={() => navigate("/signin")}
        >
          SIGN IN
        </button>
      </div>
      {/* Right Section */}
      <div className="flex w-full md:w-[40%] lg:w-[60%] bg-white justify-center items-center md:px-4 xl:px-32 2k:px-44">
        <div className="w-[90vw]">
          <h1 className="text-2xl md:text-3xl lg:text-4xl 2k:text-7xl font-semibold text-center mb-1 mt-24">
            Create Account
          </h1>
          <p className="mb-6 text-xs lg:text-sm 2k:text-3xl text-center text-gray-400 leading-tight tracking-wider">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et.
          </p>
          <form className="space-y-4 2k:space-y-8">
            <input
              type="text"
              placeholder="Full Name"
              className="input-style"
            />
            <input type="email" placeholder="Email" className="input-style" />
            <div className="relative">
              <select className="input-style appearance-none" defaultValue="">
                <option value="" disabled>
                  Role
                </option>
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
              <span className="absolute top-1/2 right-5 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                <svg
                  width="12"
                  height="6"
                  viewBox="0 0 14 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L7 7L13 1"
                    stroke="#B3B3B3"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </div>
            <input
              type="password"
              placeholder="Password"
              className="input-style"
            />
            <div className="flex items-center justify-center">
              <input
                type="checkbox"
                className="h-4 2k:h-12 w-4 2k:w-12 mr-2 2k:mr-8"
              />
              <label className="text-xs 2k:text-4xl">
                I Agree to the{" "}
                <a href="#" className="text-blue-500">
                  Terms and Conditions
                </a>
              </label>
            </div>
            <div className="flex justify-center text-sm 2k:text-5xl">
              <button className="button-style">SIGN UP</button>
            </div>
          </form>
          <div className="md:hidden signupFooter absolute bottom-0 right-0 left-0 bg-custom-blue h-12 text-white text-center flex flex-col justify-center">
            <p className="text-xs">
              Already have an account?{" "}
              <span
                className="font-semibold underline"
                onClick={() => navigate("/signin")}
              >
                Signin
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
