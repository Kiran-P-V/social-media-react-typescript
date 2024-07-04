import { Link } from "react-router-dom";
import facebookLogo from "../../../assets/logos/Facebook-Logo-2019.png";
import UserProfilePlaceholder from "../../../components/userProfilePlaceholder/userProfilePlaceholder";

const Login = () => {
  return (
    <>
      <form className="flex justify-center">
        <div className="bg-slate-100 h-screen flex flex-col md:flex-row w-[80%]">
          <section className="w-full flex justify-center items-center">
            <div className="flex flex-col gap-2">
              <img className="w-48" src={facebookLogo} />
              <p className="text-4xl">Recent Logins</p>
              <p className="text-gray-400 text-sm font-medium">
                Click your picture or add an account.
              </p>
              <aside className="flex gap-2">
                <div className="rounded-xl ring-2 ring-gray-200 hover:shadow-xl h-52 w-40">
                  <div className="h-[75%] bg-gray-300 rounded-t-xl flex justify-center items-center">
                    <UserProfilePlaceholder h="50%" w="50%" iconHeight="2rem" />
                  </div>
                  <div className="h-[25%] bg-white rounded-b-xl flex items-center justify-center">
                    Kiran
                  </div>
                </div>
                <div className="rounded-xl ring-2 ring-gray-200 hover:shadow-xl h-52 w-40">
                  <div className="h-[75%] bg-gray-100 rounded-t-xl"></div>
                  <div className="h-[25%] bg-white rounded-b-xl flex items-center justify-center">
                    Add account
                  </div>
                </div>
              </aside>
            </div>
          </section>
          <section className="w-full flex flex-col justify-center items-center mt-5 md:mt-0">
            <div className="bg-white rounded-md shadow-lg w-96 p-5">
              <div>
                <input
                  type="text"
                  id="email"
                  className="outline-none outline-2 ring-1 mb-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Email address or phone number"
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  id="password"
                  className="outline-none outline-2 ring-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Password"
                  required
                />
              </div>
              <button
                type="button"
                className="mt-5 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Log in
              </button>
              <Link
                className="text-blue-500 text-center block hover:underline"
                to="#"
              >
                Forgotten password?
              </Link>
              <div className="border-b-2 border-gray-200 mt-5" />
              <div className="flex justify-center mt-5">
                <button
                  type="button"
                  className="focus:outline-none text-white bg-green-600 hover:bg-green-700 focus:ring-2 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
                >
                  Create new account
                </button>
              </div>
            </div>
            <p className="flex gap-1 mt-5 text-center text-nowrap mb-5">
              <Link className="text-black font-semibold hover:underline" to="#">
                Create a Page
              </Link>
              for a celebrity, brand or business.
            </p>
          </section>
        </div>
      </form>
    </>
  );
};

export default Login;
