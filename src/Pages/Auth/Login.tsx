import Stratalite from "../../assets/images/stratalite_large.png";
import { icons } from "../../utils/icons";

const Login = () => {
  return (
    <div className="flex h-screen w-screen">
      <div className="w-[30%] bg-[#192434] flex items-center justify-center">
        <div className="w-80 flex flex-col items-center justify-center">
          <img src={Stratalite} className="w-40" />
          <div className="text-white text-28 my-6 text-center tracking-wider">
            <span className="font-bold">Strata</span>
            <span className="font-light">lite</span>
          </div>
          <div className="text-center text-slate-300 font-thin">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sed
            esse vitae in, non unde odio explicabo iste placeat dolore
            architecto laudantium doloribus fugiat quas, fugit est, ratione
            molestias ullam.
          </div>

          <div className="text-white absolute bottom-0 left-0 m-12">
            © 2022 Stratalite
          </div>
        </div>
      </div>
      <div className="w-[70%] h-1/2 my-auto">
        <div className="absolute top-0 right-0 m-8 text-xs font-normal">
          English(UK)
        </div>
        <div className="mx-20 px-6">
          <div className="font-semibold text-28 my-6">Log into Stratalite</div>
          <div className="font-semibold text-gray-200 my-6">
            Enter your details below
          </div>
          <div className="border border-slate-300 flex items-center my-3 w-1/2">
            <label htmlFor="email" className="w-10 p-3 text-gray-100">
              {icons.Auth.email}
            </label>
            <input
              type="text"
              className="quoteprice outline-none rounded p-5 placeholder-gray-700 placeholder-gray-700 text-sm text-gray-700 w-11/12"
              placeholder="Email"
            />
          </div>
          <div className="border border-slate-300 flex items-center my-3 w-1/2">
            <label htmlFor="password" className="w-10 p-3 text-gray-100">
              {icons.Auth.password}
            </label>
            <input
              type="password"
              className="quoteprice outline-none rounded p-5 placeholder-gray-700 placeholder-gray-700 text-sm text-gray-700 w-[80%]"
              placeholder="Password"
            />

            <label htmlFor="hidden" className="w-10 p-3 text-gray-100">
              {icons.Auth.hide}
            </label>
          </div>

          <div className="my-6 font-medium text-sky-400">
            Forgot your password?
          </div>

          <div className="my-6 flex items-center">
            <input type="checkbox" name="remember-me" />
            <div className="text-gray-600 mx-4">Remember me</div>
          </div>

          <div className="my-6 flex items-center">
            <div className="bg-sky-400 rounded border border-sky-400 text-white p-3 w-28 flex justify-center mr-4">
              Log In
            </div>
            <div className="rounded border border-sky-400 text-sky-400 p-3 w-44 flex justify-center">
              Create an account
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 m-8 text-xs flex items-center font-normal">
          <div>Legal</div>
          <div className="ml-6">Privacy</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
