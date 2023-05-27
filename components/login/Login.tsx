import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {};
export const Login = (props: Props) => {
  const loader = () => {
    return "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png";
  };
  return (
    <div className=" w-screen h-screen flex flex-col items-center justify-center bg-[#343541] z-20 overflow-hidden blurcontainer px-4 blurcontainer ">
      <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-6 card rounded-md p-[20px] pb-[40px] scale-95">
      <h2
        className={`text-slate-200 text-center font-medium pb-4 uppercase tracking-[6px]`}
      >
        login
      </h2>
        <input
          className="mb-6 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500"
          type="text"
          placeholder="Email"
        />
        <input
          className="mb-6 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500"
          type="text"
          placeholder="Password"
        />

        <div className="flex items-center">
          <div className="w-1/2 flex items-center text-slate-200">
            <input id="remember-me" type="checkbox" className="mt-1 mr-2" />
            <label htmlFor="remember-me">Remember me!</label>
          </div>
          <button
            className="ml-auto w-1/2 bg-gray-800 p-2 rounded font-semibold hover:bg-gray-900 text-slate-200 tracking-wider"
            type="submit"
          >
            Log In
          </button>
        </div>
        

        <div className="text-right">
        <p className="my-3 text-center text-slate-200 ">OR</p>

        <div className="google-login flex gap-3 form-input items-center justify-center mb-7">
          <Image
            loader={loader}
            src={"image.png"}
            width={20}
            height={20}
            alt="loader"
          ></Image>
          <p className="text-slate-200 cursor-pointer"> Sign in with Google</p>
        </div>

        <p className="text-center text-slate-200 text-sm flex gap-2 justify-center ">
          Dont have an account?{" "}
          <Link href="/signup" className="text-green-500">
            SignUp
          </Link>
        </p>
      </div>


      </div>
      

      <div className="flex justify-center w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12">
        <p className="font-semibold text-gray-600 text-sm" />
      </div>
    </div>
  );
};
