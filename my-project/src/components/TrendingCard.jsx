import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Button,
  Avatar,
  Checkbox,
} from "@nextui-org/react";
import { PlusIcon } from "./icon/PlusIcon";
import HomeIcon from "./icon/homeIcon";
import TrophyIccon from "./icon/TrophyIccon";
import ProgressBar from "./Progress";
import HeadsetImg from "../assets/HeadsetImg.jpeg";
import HeartIcon from "./icon/HeartIcon";

const TrendingCard = () => {
  return (
    <div>
      {" "}
      <div className=" flex justify-between w-full">
        <div className="py-6 flex w-1/2 ">
          <Button
            radius="full"
            className="bg-gradient-to-tr from-[#A966DE] to-[#4C6EFF] text-white shadow-lg lg:flex hidden font-bold"
          >
            <HomeIcon />
            Trending
          </Button>
          <Button radius="full" className="bg-gray-100 lg:flex hidden ">
            <PlusIcon />
            New
          </Button>
          <Button radius="full" className="bg-gray-100 lg:flex hidden ">
            <TrophyIccon />
            Top
          </Button>
        </div>
        <div className="flex w-1/3 py-6">
          <Button isIconOnly aria-label="Like " radius="full">
            +
          </Button>
          <ProgressBar />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <Card isFooterBlurred className="w-full">
          <img
            alt="head set"
            className="object-cover w-full h-[20rem] xl:h-[25rem]"
            src={HeadsetImg}
          />
          <div className="flex justify-between items-center overflow-hidden py-1 mt-5 absolute before:rounded-xl w-full px-4 rounded-large  z-10">
            <div className="flex gap-2 w-full text-white text-xl items-center">
              <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
              <p>UkrianeArt</p>
              <Checkbox defaultSelected className="" />
            </div>
            <Button
              isIconOnly
              aria-label="Like"
              radius="full"
              className="text-tiny text-white bg-black/20"
            >
              <HeartIcon />
            </Button>
          </div>
          <CardFooter className="flex flex-col left-2 text-white overflow-hidden py-1 px-4 absolute before:rounded-xl rounded-large bottom-1 w-[95%] shadow-small  z-10">
            <p className="font-bold w-full text-lg">Artwork Graphic Design</p>
            <p className="w-full">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum esse
              non, tempore quasi quos, totam officiis cum, in sint vel illum.
              Magnam
            </p>
          </CardFooter>
        </Card>
        <Card isFooterBlurred className="w-full">
          <img
            alt="head set"
            className="object-cover w-full h-[20rem] xl:h-[25rem]"
            src={HeadsetImg}
          />
          <div className="flex justify-between items-center overflow-hidden py-1 mt-5 absolute before:rounded-xl w-full px-4 rounded-large  z-10">
            <div className="flex gap-2 w-full text-white text-xl items-center">
              <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
              <p>UkrianeArt</p>
              <Checkbox defaultSelected className="" />
            </div>
            <Button
              isIconOnly
              aria-label="Like"
              radius="full"
              className="text-tiny text-white bg-black/20"
            >
              <HeartIcon />
            </Button>
          </div>
          <CardFooter className="flex flex-col left-2 text-white overflow-hidden py-1 px-4 absolute before:rounded-xl rounded-large bottom-1 w-[95%] shadow-small  z-10">
            <p className="font-bold w-full text-lg">Artwork Graphic Design</p>
            <p className="w-full">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum esse
              non, tempore quasi quos, totam officiis cum, in sint vel illum.
              Magnam
            </p>
          </CardFooter>
        </Card>
        <Card isFooterBlurred className="w-full">
          <img
            alt="head set"
            className="object-cover w-full h-[20rem] xl:h-[25rem]"
            src={HeadsetImg}
          />
          <div className="flex justify-between items-center overflow-hidden py-1 mt-5 absolute before:rounded-xl w-full px-4 rounded-large  z-10">
            <div className="flex gap-2 w-full text-white text-xl items-center">
              <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
              <p>UkrianeArt</p>
              <Checkbox defaultSelected className="" />
            </div>
            <Button
              isIconOnly
              aria-label="Like"
              radius="full"
              className="text-tiny text-white bg-black/20"
            >
              <HeartIcon />
            </Button>
          </div>
          <CardFooter className="flex flex-col left-2 text-white overflow-hidden py-1 px-4 absolute before:rounded-xl rounded-large bottom-1 w-[95%] shadow-small  z-10">
            <p className="font-bold w-full text-lg">Artwork Graphic Design</p>
            <p className="w-full">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum esse
              non, tempore quasi quos, totam officiis cum, in sint vel illum.
              Magnam
            </p>
          </CardFooter>
        </Card>
        <Card isFooterBlurred className="w-full">
          <img
            alt="head set"
            className="object-cover w-full h-[20rem] xl:h-[25rem]"
            src={HeadsetImg}
          />
          <div className="flex justify-between items-center overflow-hidden py-1 mt-5 absolute before:rounded-xl w-full px-4 rounded-large  z-10">
            <div className="flex gap-2 w-full text-white text-xl items-center">
              <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
              <p>UkrianeArt</p>
              <Checkbox defaultSelected className="" />
            </div>
            <Button
              isIconOnly
              aria-label="Like"
              radius="full"
              className="text-tiny text-white bg-black/20"
            >
              <HeartIcon />
            </Button>
          </div>
          <CardFooter className="flex flex-col left-2 text-white overflow-hidden py-1 px-4 absolute before:rounded-xl rounded-large bottom-1 w-[95%] shadow-small  z-10">
            <p className="font-bold w-full text-lg">Artwork Graphic Design</p>
            <p className="w-full">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum esse
              non, tempore quasi quos, totam officiis cum, in sint vel illum.
              Magnam
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default TrendingCard;
