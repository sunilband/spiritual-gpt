import Image from "next/image";
import Link from "next/link";

type Props = {};
const SignUp = (props: Props) => {
  const loader = () => {
    return "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png";
  };
  return (
    <div className=" w-screen h-screen flex flex-col items-center justify-center bg-[#343541] z-20 overflow-hidden blurcontainer px-4 blurcontainer">
      <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-6 card rounded-md">
        <div className="flex gap-6">
          <input
            className="mb-6 p-2 appearance-none block w-[48%] bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500"
            type="text"
            placeholder="First Name"
          />
          <input
            className="mb-6 p-2 appearance-none block w-[48%] bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500"
            type="text"
            placeholder="Last Name"
          />
        </div>

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

        <input
          className="mb-6 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500"
          type="text"
          placeholder="Confirm Password"
        />

        <div className="flex items-center">
          <button
            className="ml-auto w-1/2 bg-gray-800 text-white p-2 rounded font-semibold hover:bg-gray-900 "
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </div>
      <div className="text-right w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-6 ">
        <p className="my-3 text-center ">OR</p>

        <div className="google-login flex gap-3 form-input items-center justify-center mb-10">
          <Image
            loader={loader}
            src={"image.png"}
            width={20}
            height={20}
            alt="loader"
          ></Image>
          <p className="text-slate-200 cursor-pointer"> Sign up with Google</p>
        </div>

        <p className="text-center text-slate-200 text-sm flex gap-2 justify-center ">
          Already have an account?{" "}
          <Link href="/login" className="text-green-500">
            Login
          </Link>
        </p>
      </div>

      <div className="flex justify-center w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12">
        <p className="font-semibold text-gray-600 text-sm" />
      </div>
    </div>
  );
};

export default SignUp;
