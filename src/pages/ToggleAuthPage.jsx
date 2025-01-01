import { useState } from "react";
import VerifyIcon from "../../public/icons/VerifyIcon";
import { useNavigate } from "react-router-dom";

const ToggleAuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const [fullnameValue, setFullNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const navigate = useNavigate();

  const handleToggle = () => {
    setIsSignUp((prev) => !prev);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left Panel */}
      <div
        className={`w-full md:w-[65vw] flex items-center justify-center bg-white transition-transform duration-500  md:px-12 lg:px-28 xl:px-48 2k:px-44 ${
          isSignUp ? "translate-x-[35vw]" : ""
        }`}
      >
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl 2k:text-7xl text-[#3C3C3C] font-semibold text-center mb-3">
            {isSignUp ? "Create Account" : "Sign In"}
          </h1>
          <p className="mb-12 text-xs lg:text-sm 2k:text-3xl text-center text-custom-gray leading-tight tracking-wider">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et.
          </p>
          <div className="flex flex-col items-center">
            {isSignUp ? (
              <>
                <form className="space-y-7 2k:space-y-12 w-full md:w-[50vw] lg:w-[40vw] xl:w-[32vw]">
                  <div className="relative w-full">
                    {/* Input Field */}
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="input-style pl-10"
                      value={fullnameValue}
                      onChange={(e) => setFullNameValue(e.target.value)}
                    />

                    {/* Icon - Positioned inside the input */}
                    {fullnameValue && (
                      <div className="absolute right-5 top-1/2 transform -translate-y-1/2">
                        <VerifyIcon />
                      </div>
                    )}
                  </div>
                  <div className="relative w-full">
                    {/* Input Field */}
                    <input
                      type="email"
                      placeholder="EMAIL"
                      className="input-style pl-10"
                      value={emailValue}
                      onChange={(e) => setEmailValue(e.target.value)}
                    />

                    {/* Icon - Positioned inside the input */}
                    {emailValue && (
                      <div className="absolute right-5 top-1/2 transform -translate-y-1/2">
                        <VerifyIcon />
                      </div>
                    )}
                  </div>
                  <div className="relative">
                    <select
                      className="input-style appearance-none peer"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Role
                      </option>
                      <option value="client" className="text-gray-400">
                        CLIENT
                      </option>
                      <option value="employee" className="text-gray-400">
                        EMPLOYEE
                      </option>
                      <option
                        value="customer-representatives"
                        className="text-gray-400"
                      >
                        CUSTOMER REPRESENTATIVES
                      </option>
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
                  {/* <Dropdown/> */}
                  <div className="relative w-full">
                    {/* Input Field */}
                    <input
                      type="password"
                      placeholder="PASSWORD"
                      className="input-style pl-10"
                      value={passwordValue}
                      onChange={(e) => setPasswordValue(e.target.value)}
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <input
                      type="checkbox"
                      className="h-4 2k:h-12 w-4 2k:w-12 mr-2 2k:mr-8"
                    />
                    <label className="text-xs 2k:text-4xl">
                      I Agree to the{" "}
                      <a href="#" className="text-[#4A90E2]">
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                  <div className="flex justify-center text-sm 2k:text-5xl">
                    <button className="button-style">SIGN UP</button>
                  </div>
                </form>
              </>
            ) : (
              <>
                <form className="space-y-7 2k:space-y-8 w-full md:w-[47vw] xl:w-[32vw] 2k:w-[30vw]">
                  <div className="relative w-full">
                    {/* Input Field */}
                    <input
                      type="email"
                      placeholder="EMAIL"
                      className="input-style pl-10"
                      value={emailValue}
                      onChange={(e) => setEmailValue(e.target.value)}
                    />

                    {/* Icon - Positioned inside the input */}
                    {emailValue && (
                      <div className="absolute right-5 top-1/2 transform -translate-y-1/2">
                        <VerifyIcon />
                      </div>
                    )}
                  </div>

                  {/* <Dropdown/> */}
                  <div className="relative w-full">
                    {/* Input Field */}
                    <input
                      type="password"
                      placeholder="PASSWORD"
                      className="input-style pl-10"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 2k:h-12 w-4 2k:w-12 mr-2 2k:mr-8"
                      />
                      <label className="text-xs 2k:text-4xl">Remember me</label>
                    </div>
                    <a href="" className="text-custom-gray text-sm">
                      Forgot Password?
                    </a>
                  </div>
                  <div className="flex justify-center text-sm 2k:text-5xl">
                    <button className="button-style mt-2">SIGN IN</button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Right Panel */}
      <div
        className={`md:w-[35vw] bg-custom-blue text-white hidden md:flex flex-col items-center justify-center text-center px-12 transition-transform duration-500 ${
          isSignUp ? "-translate-x-[65vw]" : ""
        }`}
      >
        <h1 className="text-4xl 2k:text-8xl font-semibold">
          {isSignUp ? "Welcome Back" : "Hello,"}
        </h1>
        <p className="text-center text-[#F4F4F4] text-md 2k:text-4xl mt-3 mb-6 font-light">
          {isSignUp
            ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et."
            : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et."}
        </p>
        <button
          onClick={handleToggle}
          className="px-10 2k:px-14 py-2 2k:py-4 2k:text-5xl text-white border border-white rounded-full"
        >
          {isSignUp ? "SIGN IN" : "SIGN UP"}
        </button>
      </div>
      <div className="md:hidden signupFooter absolute bottom-0 right-0 left-0 bg-custom-blue h-12 text-white text-center flex flex-col justify-center">
        <p className="text-xs">
          {`${
            isSignUp
              ? "Already have an account?"
              : `Don&apos;t have an account?`
          }`}
          <span
            className="font-semibold underline"
            onClick={() => navigate(isSignUp ? "/signin" : "/signup")}
          >
            {isSignUp
              ? "Signin"
              : "Signup"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ToggleAuthPage;
