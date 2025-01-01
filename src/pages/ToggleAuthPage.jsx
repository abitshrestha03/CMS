import { useState } from "react";
import VerifyIcon from "../../public/icons/VerifyIcon";
import CustomSelect from "../components/CustomSelect";

const ToggleAuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  const [fullnameValue, setFullNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");


  const handleToggle = () => {
    setIsSignUp((prev) => !prev);
  };

  return (
    <div className="flex h-screen overflow-y-auto">
      {/* Left Panel */}
      <div
        className={`w-full md:w-[65vw] flex items-center justify-center bg-white transition-transform duration-500  md:px-12 lg:px-28 xl:px-44 2k:px-44 ${
          isSignUp ? "md:translate-x-[35vw]" : ""
        }`}
      >
        <div className="flex flex-col md:items-center justify-center xs:px-4 md:px-0">
          <h1 className="text-2xl md:text-3xl lg:text-4xl 2k:text-7xl text-[#3C3C3C] font-semibold text-center xs:mb-2 md:mb-3">
            {isSignUp ? "Create Account" : "Sign In"}
          </h1>
          <p className="xs:mb-6 md:mb-12 text-xs lg:text-sm 2k:text-3xl text-center text-custom-gray leading-tight tracking-wider">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et.
          </p>
          <div className="flex flex-col items-center">
            {isSignUp ? (
              <>
                <form className="xs:space-y-5 md:space-y-7 2k:space-y-12 w-full md:w-[50vw] lg:w-[41vw] xl:w-[38vw]">
                  <div className="relative w-full">
                    {/* Input Field */}
                    <input
                      type="text"
                      placeholder="FULL NAME"
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
                  <CustomSelect />
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
                  <div className="flex items-center justify-center" style={{margin:'2rem 0'}}>
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
                <form className="xs:space-y-5 md:space-y-7 2k:space-y-8 w-full md:w-[52vw] lg:w-[45vw] xl:w-[38vw] 2k:w-[30vw]">
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
                  <div className="flex items-center justify-between px-2">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        className="h-4 2k:h-12 w-4 2k:w-12 mr-2 2k:mr-8"
                      />
                      <label className="text-xs 2k:text-4xl">Remember me</label>
                    </div>
                    <a href="" className="text-custom-gray text-xs 2k:text-4xl">
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
        className={`md:w-[35vw] bg-custom-blue text-white hidden md:flex flex-col items-center justify-center text-center md:px-2 lg:px-12 transition-transform duration-500 ${
          isSignUp ? "md:-translate-x-[65vw]" : ""
        }`}
      >
        <h1 className="text-4xl 2k:text-8xl font-semibold">
          {isSignUp ? "Welcome Back" : "Hello,"}
        </h1>
        <p className="text-center text-[#F4F4F4] md:text-xs lg:text-[14px] tracking-wide 2k:text-4xl mt-3 mb-6 font-light">
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
              ? "Already have an account? "
              : `Don't have an account? `
          }`}
          <span
            className="font-semibold underline"
            onClick={() => handleToggle()}
            >
            {isSignUp ? "Signin" : "Signup"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ToggleAuthPage;
