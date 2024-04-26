import React from "react";
import HomeIcon from "./icon/homeIcon";
import RegeneLogo from "./icon/RegeneLogo";
import { Button } from "@nextui-org/react";

const Sidenav = () => {
  return (
    <div className="w-2/4 bg-black">
      <div className="flex flex-col lg:px-6 px-2 pt-4 w-full gap-8">
        <Button
          variant="ghost"
          startContent={<RegeneLogo />}
          isIconOnly={true}
          radius="full"
          className="lg:w-auto lg:justify-start px-4 border-0 hover:bg-gradient-to-tr from-[#A966DE] to-[#4C6EFF] text-gray-300 hover:text-white  lg:text-2xl  font-bold pr-6 py-4"
        >
          <span className="hidden lg:flex mx-3"> Regene</span>
        </Button>

        <Button
          variant="ghost"
          startContent={<HomeIcon />}
          isIconOnly={true}
          radius="full"
          className="lg:w-auto lg:justify-start px-4 border-0 hover:bg-gradient-to-tr from-[#A966DE] to-[#4C6EFF] text-gray-300 hover:text-white text-xl"
        >
          <span className="hidden lg:flex mx-3"> Home</span>
        </Button>

        <Button
          variant="ghost"
          startContent={<RegeneLogo />}
          isIconOnly={true}
          radius="full"
          className="lg:w-auto lg:justify-start px-4 border-0 hover:bg-gradient-to-tr from-[#A966DE] to-[#4C6EFF] text-white text-xl"
        >
          <span className="hidden lg:flex mx-3"> Community Feed</span>
        </Button>

        <Button
          variant="ghost"
          startContent={<RegeneLogo />}
          isIconOnly={true}
          radius="full"
          className="lg:w-auto lg:justify-start px-4 border-0 hover:bg-gradient-to-tr from-[#A966DE] to-[#4C6EFF] hover:text-white text-gray-300 text-xl"
        >
          <span className="hidden lg:flex mx-3"> Personal Feeds</span>
        </Button>

        <Button
          variant="ghost"
          startContent={<RegeneLogo />}
          isIconOnly={true}
          radius="full"
          className="lg:w-auto lg:justify-start px-4 border-0 hover:bg-gradient-to-tr from-[#A966DE] to-[#4C6EFF] hover:text-white text-gray-300 text-xl"
        >
          <span className="hidden lg:flex mx-3"> Training & DataSets</span>
        </Button>

        <Button
          variant="ghost"
          startContent={<RegeneLogo />}
          isIconOnly={true}
          radius="full"
          className="lg:w-auto lg:justify-start px-4 border-0 hover:bg-gradient-to-tr from-[#A966DE] to-[#4C6EFF] hover:text-white text-gray-300 text-xl"
        >
          <span className="hidden lg:flex mx-3"> Featured Models</span>
        </Button>

        <Button
          variant="ghost"
          startContent={<RegeneLogo />}
          isIconOnly={true}
          radius="full"
          className="lg:w-auto lg:justify-start px-4 border-0 hover:bg-gradient-to-tr from-[#A966DE] to-[#4C6EFF] hover:text-white text-gray-300 text-xl"
        >
          <span className="hidden lg:flex mx-3"> AI Image Generation</span>
        </Button>

        <Button
          variant="ghost"
          startContent={<RegeneLogo />}
          isIconOnly={true}
          radius="full"
          className="lg:w-auto lg:justify-start px-4 border-0 hover:bg-gradient-to-tr from-[#A966DE] to-[#4C6EFF] hover:text-white text-gray-300 text-xl"
        >
          <span className="hidden lg:flex mx-3"> AI Canvas </span>{" "}
          <Button
            radius="full"
            className="bg-gradient-to-tr from-[#A966DE] to-[#4C6EFF] text-white shadow-lg lg:flex hidden"
          >
            Meta
          </Button>
        </Button>
        <Button
          variant="ghost"
          startContent={<RegeneLogo />}
          isIconOnly={true}
          radius="full"
          className="lg:w-auto lg:justify-start px-4 border-0 hover:bg-gradient-to-tr from-[#A966DE] to-[#4C6EFF] hover:text-white text-gray-300 text-xl"
        >
          <span className="hidden lg:flex mx-3"> Texture Generation</span>
        </Button>
        <Button
          variant="ghost"
          startContent={<RegeneLogo />}
          isIconOnly={true}
          radius="full"
          className="lg:w-auto lg:justify-start px-4 border-0 hover:bg-gradient-to-tr from-[#A966DE] to-[#4C6EFF] hover:text-white text-gray-300 text-xl"
        >
          <span className="hidden lg:flex mx-3"> Settings</span>
        </Button>
        <Button
          variant="ghost"
          startContent={<RegeneLogo />}
          isIconOnly={true}
          radius="full"
          className="lg:w-auto lg:justify-start px-4 border-0 hover:bg-gradient-to-tr from-[#A966DE] to-[#4C6EFF] hover:text-white text-gray-300 text-xl"
        >
          <span className="hidden lg:flex mx-3"> FAQ & Help</span>
        </Button>
        <Button
          variant="ghost"
          startContent={<RegeneLogo />}
          isIconOnly={true}
          radius="full"
          className="lg:w-auto lg:justify-start px-4 border-0 hover:bg-gradient-to-tr from-[#A966DE] to-[#4C6EFF] hover:text-white text-gray-300 text-xl"
        >
          <span className="hidden lg:flex mx-3">Logout</span>
        </Button>
      </div>
    </div>
  );
};

export default Sidenav;
