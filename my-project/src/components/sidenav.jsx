import React from "react";
import HomeIcon from "./icon/homeIcon";
import RegeneLogo from "./icon/RegeneLogo";
import { Button } from "@nextui-org/react";

const Sidenav = () => {
  return (
    <div className="w-2/4 bg-black">
      <div className="w-full">
        <div className="flex flex-col px-6 py-4 w-full gap-6">
          <Button
            variant="ghost"
            startContent={<RegeneLogo />}
            isIconOnly={true}
            radius="full"
            className="lg:w-auto lg:justify-start px-4 border-0 hover:bg-gradient-to-tr from-[#A966DE] to-[#4C6EFF] text-white  lg:text-2xl pr-6 py-4"
          >
            <span className="hidden lg:flex mx-3"> Regene</span>
          </Button>

          <Button
            variant="ghost"
            startContent={<HomeIcon />}
            isIconOnly={true}
            radius="full"
            className="lg:w-auto lg:justify-start px-4 border-0 bg-gradient-to-tr from-[#A966DE] to-[#4C6EFF] text-white text-xl"
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
            <span className="hidden lg:flex mx-3"> Regene</span>
          </Button>

          <Button
            variant="ghost"
            startContent={<RegeneLogo />}
            isIconOnly={true}
            radius="full"
            className="lg:w-auto lg:justify-start px-4 border-0 hover:bg-gradient-to-tr from-[#A966DE] to-[#4C6EFF] text-white text-xl"
          >
            <span className="hidden lg:flex mx-3"> Regene</span>
          </Button>

          <Button
            variant="ghost"
            startContent={<RegeneLogo />}
            isIconOnly={true}
            radius="full"
            className="lg:w-auto lg:justify-start px-4 border-0 hover:bg-gradient-to-tr from-[#A966DE] to-[#4C6EFF] text-white text-xl"
          >
            <span className="hidden lg:flex mx-3"> Regene</span>
          </Button>

          <Button
            variant="ghost"
            startContent={<RegeneLogo />}
            isIconOnly={true}
            radius="full"
            className="lg:w-auto lg:justify-start px-4 border-0 hover:bg-gradient-to-tr from-[#A966DE] to-[#4C6EFF] text-white text-xl"
          >
            <span className="hidden lg:flex mx-3"> Regene</span>
          </Button>

          <Button
            variant="ghost"
            startContent={<RegeneLogo />}
            isIconOnly={true}
            radius="full"
            className="lg:w-auto lg:justify-start px-4 border-0 hover:bg-gradient-to-tr from-[#A966DE] to-[#4C6EFF] text-white text-xl"
          >
            <span className="hidden lg:flex mx-3"> Regene</span>
          </Button>

          <Button
            variant="ghost"
            startContent={<RegeneLogo />}
            isIconOnly={true}
            radius="full"
            className="lg:w-auto lg:justify-start px-4 border-0 hover:bg-gradient-to-tr from-[#A966DE] to-[#4C6EFF] text-white text-xl"
          >
            <span className="hidden lg:flex mx-3"> Regene</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
