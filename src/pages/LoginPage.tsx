import { IconPasswordUser, IconUsersGroup } from "@tabler/icons-react";
import { Navigate } from "react-router";

const LoginPage = () => {
  return (
    <>
      <div className="w-full h-full flex justify-center items-center">
        <div className="border rounded-md w-[32rem] h-[40rem] shadow-lg flex flex-col p-16 items-center">
          <p className="text-4xl">Admin Login</p>
          <p className="text-sm text-gray-300 mt-2">
            Enter your credentials below...
          </p>
          <div className="mt-20 flex flex-col items-start gap-5">
            <div>
              <p className="flex text-xl text-gray-800">
                <IconUsersGroup /> Username
              </p>
              <input
                type="text "
                placeholder="username..."
                className="border rounded-md p-3"
              />
            </div>
            <div>
              <p className="flex text-xl text-gray-800">
                <IconPasswordUser /> Password
              </p>
              <input
                type="password"
                placeholder="password..."
                className="border rounded-md p-3"
              />
            </div>
          </div>
          <button
            onClick={() => {
              <Navigate to="/entry" />;
            }}
            className="border shadow-md rounded-md w-32 h-12 mt-20 bg-blue-500 text-white
            hover:shadow-xl
            transform 
            transition 
            duration-700"
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
