import { IconUserEdit } from "@tabler/icons-react";
import { IconDeviceImacCode } from "@tabler/icons-react";

const EntryPage = () => {
  const usersURL =
    "https://images.pexels.com/photos/3183129/pexels-photo-3183129.jpeg?cs=srgb&dl=pexels-fauxels-3183129.jpg&fm=jpg";
  const devicesURL =
    "https://predictabledesigns.com/wp-content/uploads/2022/07/Arduino-featured-image.jpg";

  return (
    <div className="w-full h-full justify-center items-center flex ">
      <div
        //@ts-ignore
        class={`w-1/2 h-full flex justify-center items-center 
      bg-[url('${usersURL}')]
      bg-right bg-cover
      hover:scale-125
      transform
      transition
      duration-150`}
      >
        <div className="w-full h-full bg-red-500 bg-opacity-20 flex justify-center items-center cursor-pointer group-hover flex-col">
          <p className="text-white text-5xl">
            <IconUserEdit size={64} />
          </p>
          <p className="text-white text-5xl"> - Manage Users - </p>
        </div>
      </div>
      <div
        className={`w-1/2 h-full flex justify-center items-center 
        bg-[url('${devicesURL}')]
        bg-right bg-cover
        hover:scale-125
        transform
        transition
        duration-150`}
      >
        <div className="w-full h-full bg-gray-500 bg-opacity-20 flex justify-center items-center cursor-pointer group-hover flex-col">
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
