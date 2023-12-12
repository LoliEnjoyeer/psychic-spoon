import React from "react";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="mt-0 h-14 border-b-2 flex flex-row">
        <div
          className="w-[25%] border flex justify-center items-center hover:bg-gray-100 cursor-pointer"
          onClick={() => navigate("/devices")}
        >
          Devices
        </div>
        <div
          className="w-[25%] border flex justify-center items-center hover:bg-gray-100 cursor-pointer"
          onClick={() => navigate("/data")}
        >
          Data
        </div>
        <div
          className="w-[25%] border flex justify-center items-center hover:bg-gray-100 cursor-pointer"
          onClick={() => navigate("/alerts")}
        >
          Alerts
        </div>
        <div
          className="w-[25%] border flex justify-center items-center hover:bg-gray-100 cursor-pointer"
          onClick={() => navigate("/api-requests")}
        >
          API
        </div>
      </div>
    </>
  );
};

export default Navbar;
