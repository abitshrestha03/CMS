import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Left Section */}
      <div className="flex w-full md:w-[60%] lg:w-[65%] bg-white justify-center items-center md:px-4 xl:px-60 2k:px-44">
        <div className="w-[90vw]">
          <h1 className="text-2xl md:text-4xl 2k:text-7xl font-semibold text-center mb-1 xs:mt-32 md:mt-0">
            Sign in
          </h1>
          <p className="mb-6 text-xs lg:text-sm 2k:text-3xl text-center text-gray-400 leading-tight tracking-wider">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et.
          </p>
          <form className="space-y-4 2k:space-y-8">
            <input type="email" placeholder="Email" className="input-style" />
            <input
              type="password"
              placeholder="Password"
              className="input-style"
            />
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 2k:h-12 w-4 2k:w-12 mr-2 2k:mr-8"
                />
                <label className="text-xs 2k:text-4xl mt-1">Remember me</label>
              </div>
              <span className="text-xs 2k:text-4xl text-gray-400 mr-2">Forgot Password?</span>
            </div>
            <div className="flex justify-center text-sm 2k:text-5xl">
              <button className="button-style mt-2">SIGN IN</button>
            </div>
          </form>
          <div className="md:hidden signupFooter absolute bottom-0 right-0 left-0 bg-custom-blue h-12 text-white text-center flex flex-col justify-center">
            <p className="text-xs">
              Don&apos;t have an account?{" "}
              <span className="font-semibold underline" onClick={() => navigate("/signup")}>Sign Up</span>
            </p>
          </div>
        </div>
      </div>
      {/* Right Section */}
      <div className="hidden md:flex md:w-[40%] lg:w-[35%] bg-custom-blue text-white tracking-wide flex-col justify-center items-center md:px-8 px-16">
        <div className="text-center">
          <h1 className="text-4xl 2k:text-8xl font-semibold">Hello</h1>
        </div>

        <div className="text-center text-[#F4F4F4] text-sm lg:text-md 2k:text-4xl mt-3 mb-6 font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et.
        </div>
        <button className="px-10 2k:px-14 py-2 2k:py-4 2k:text-5xl text-white border border-white rounded-full"  onClick={() => navigate("/signup")}>
          SIGN UP
        </button>
      </div>
    </div>
  );
};

export default Signin;
