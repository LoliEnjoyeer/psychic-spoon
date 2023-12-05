import { IconPasswordUser, IconUsersGroup } from "@tabler/icons-react";
import { useNavigate } from "react-router";
import { useState } from "react";

const LoginPage = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (user, pass) => {
    if (user.length == 0 || pass.length == 0) {
      window.alert("Error - username or password is empty.");
    } else {
      const data = { user, pass };
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: data,
      };
      fetch("192.168.137.1:3000/login", requestOptions).then((response) => {
        response
          ? navigate("/devices")
          : window.alert("Incorrect credentials. Try again!");
      });
    }
  };

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
                onChange={(e) => setUsername(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <button
            className="border shadow-md rounded-md w-32 h-12 mt-20 bg-blue-500 text-white
            hover:shadow-xl
            transform 
            transition 
            duration-200"
            type="submit"
            onClick={() => handleSubmit(username, password)}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
