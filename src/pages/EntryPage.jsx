import { IconUserEdit, IconDeviceImacCode } from "@tabler/icons-react";
import { useNavigate } from "react-router";

const EntryPage = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full justify-center items-center flex ">
      <div
        className="w-1/2 h-full flex justify-center items-center 
      bg-[url('./assets/users.jpg')]
      bg-right bg-cover
      hover:scale-125
      transform
      transition
      duration-150"
        onClick={() => {
          navigate("users");
        }}
      >
        <div className="w-full h-full bg-red-500 bg-opacity-20 flex justify-center items-center cursor-pointer group-hover flex-col">
          <p className="text-white text-5xl">
            <IconUserEdit size={64} />
          </p>
          <p className="text-white text-5xl"> - Manage Users - </p>
        </div>
      </div>
      <div
        className="w-1/2 h-full flex justify-center items-center 
        bg-[url('./assets/arduino.jpg')]
        bg-right bg-cover
        hover:scale-125
        transform
        transition
        duration-150"
        onClick={() => {
          navigate("devices");
        }}
      >
        <div className="w-full h-full bg-blue-500 bg-opacity-20 flex justify-center items-center cursor-pointer group-hover flex-col">
          <p className="text-white text-5xl">
            <IconDeviceImacCode size={64} />
          </p>
          <p className="text-white text-5xl"> - Manage Devices - </p>
        </div>
      </div>
    </div>
  );
};

export default EntryPage;
