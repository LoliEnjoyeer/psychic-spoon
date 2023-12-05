import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";

const DevicesPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("192.168.137.1:3000/data/showData/IoTDevice", {}).then((response) => {
      console.log(response);
    });
  }, []);

  return (
    <>
      <Navbar />
    </>
  );
};

export default DevicesPage;

//Zak. 1 - Urządzenia nazwa lokacja isconnected
//Zak.2 - Dane wilgotność temperatura wyslane dane
//Zak.3 ALerty
//Zak.4 API Requesty
