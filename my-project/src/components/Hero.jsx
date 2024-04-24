import React, { useRef } from "react";
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
import Leftarrow from "../components/icon/Leftarrow";
import Rightarrow from "../components/icon/Rightarrow";
import HeadsetImg from "../assets/HeadsetImg.jpeg";
import { PlusIcon } from "./icon/PlusIcon";
import TrendingCard from "./TrendingCard";

const Hero = () => {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 200; // Adjust scroll speed as needed
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 200; // Adjust scroll speed as needed
    }
  };
  return (
    <div className="py-6 px-14 w-full h-auto overflow-x">
      <div className="flex justify-between ">
        <p className="text-xl font-bold">Featured Models</p>
        <div className="flex gap-2">
          <div onClick={scrollLeft}>
            <Leftarrow />{" "}
          </div>
          <div onClick={scrollRight}>
            {" "}
            <Rightarrow />{" "}
          </div>
        </div>
      </div>
      <div
        ref={containerRef}
        className="flex overflow-x-hidden space-x-4 flex-nowrap  w-full lg:max-w-[75vw]"
        style={{ maxWidth: "" }}
      >
        <div className="flex py-6   ">
          <Card
            isFooterBlurred
            radius="lg"
            className="border-none rounded-r-none  w-[18rem] h-full "
          >
            <Image
              alt="head set"
              className="object-cover  w-full h-[20rem] xl:h-[22rem] "
              src={HeadsetImg}
            />
            <CardFooter className="flex justify-between overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <div className="flex gap-2 w-full">
                {" "}
                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                <Checkbox defaultSelected className=""></Checkbox>
              </div>

              <Button
                isIconOnly
                aria-label="Like "
                radius="full"
                className="text-tiny text-white bg-black/20"
              >
                <PlusIcon />
              </Button>
            </CardFooter>
          </Card>
          <Card className=" rounded-l-none w-[25rem] xl:w-[30rem] px-6 py-2">
            <CardHeader className="flex flex-col gap-3 w-full">
              <h1 className="text-xs lg:text-xl font-bold xl:text-2xl w-full ">
                Ilustration Gaming Head set
              </h1>
              <h3 className="xl:text-xl">
                A detailed illustration gaming head set and mouse, magic,
                sticker design.
              </h3>
            </CardHeader>
            <Divider />
            <CardBody className="xl:text-xl lg:text-xs w-full">
              <div className=" flex justify-between w-full">
                <div className="flex flex-col w-full">
                  <p className=" w-full ">Trainig Resolution</p>
                  <p className="font-bold ">1024x1024</p>
                </div>
                <div className="flex flex-col w-full ">
                  {" "}
                  <p className=" ">Base Model</p>
                  <p className="font-bold  w-full ">Stable Difusion v2.1</p>
                </div>
              </div>
              <div className=" flex ">
                <div className="flex flex-col mr-32">
                  <p className="">Category</p>
                  <p className="font-bold">General</p>
                </div>
                <div className="flex flex-col">
                  {" "}
                  <p>Strength</p>
                  <p className="font-bold">Medium</p>
                </div>
              </div>
            </CardBody>

            <CardFooter>
              <Button
                radius="full"
                className="bg-gradient-to-tr from-[#A966DE] to-[#4C6EFF] text-white text-lg lg:text-xl shadow-lg flex w-3/4 "
              >
                Generate with this model
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="flex py-6   ">
          <Card
            isFooterBlurred
            radius="lg"
            className="border-none rounded-r-none  w-[18rem] h-full "
          >
            <Image
              alt="head set"
              className="object-cover  w-full h-[20rem] xl:h-[22rem] "
              src={HeadsetImg}
            />
            <CardFooter className="flex justify-between overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <div className="flex gap-2 w-full">
                {" "}
                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                <Checkbox defaultSelected className=""></Checkbox>
              </div>

              <Button
                isIconOnly
                aria-label="Like "
                radius="full"
                className="text-tiny text-white bg-black/20"
              >
                <PlusIcon />
              </Button>
            </CardFooter>
          </Card>
          <Card className=" rounded-l-none w-[35rem] xl:w-[37rem] px-6 py-2">
            <CardHeader className="flex flex-col gap-3 w-full">
              <h1 className="text-xs font-bold xl:text-2xl w-full ">
                Ilustration Gaming Head set
              </h1>
              <h3 className="xl:text-xl">
                A detailed illustration gaming head set and mouse, magic,
                sticker design.
              </h3>
            </CardHeader>
            <Divider />
            <CardBody className="xl:text-2xl lg:text-sm w-full">
              <div className=" flex justify-between w-full">
                <div className="flex flex-col w-full">
                  <p className=" w-full">Trainig Resolution</p>
                  <p className="font-bold text-md">1024x1024</p>
                </div>
                <div className="flex flex-col w-full ">
                  {" "}
                  <p className="text-md ">Base Model</p>
                  <p className="font-bold  w-full">Stable Difusion v2.1</p>
                </div>
              </div>
              <div className=" flex gap-44">
                <div className="flex flex-col">
                  <p className="text-xm">Category</p>
                  <p className="font-bold">General</p>
                </div>
                <div className="flex flex-col">
                  {" "}
                  <p>Strength</p>
                  <p className="font-bold">Medium</p>
                </div>
              </div>
            </CardBody>

            <CardFooter>
              <Button
                radius="full"
                className="bg-gradient-to-tr from-[#A966DE] to-[#4C6EFF] text-white text-lg lg:text-xl shadow-lg flex w-3/4 "
              >
                Generate with this model
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="flex py-6   ">
          <Card
            isFooterBlurred
            radius="lg"
            className="border-none rounded-r-none  w-[18rem] h-full "
          >
            <Image
              alt="head set"
              className="object-cover  w-full h-[20rem] xl:h-[22rem] "
              src={HeadsetImg}
            />
            <CardFooter className="flex justify-between overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <div className="flex gap-2 w-full">
                {" "}
                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                <Checkbox defaultSelected className=""></Checkbox>
              </div>

              <Button
                isIconOnly
                aria-label="Like "
                radius="full"
                className="text-tiny text-white bg-black/20"
              >
                <PlusIcon />
              </Button>
            </CardFooter>
          </Card>
          <Card className=" rounded-l-none w-[35rem] xl:w-[37rem] px-6 py-2">
            <CardHeader className="flex flex-col gap-3 w-full">
              <h1 className="text-xs font-bold xl:text-2xl w-full ">
                Ilustration Gaming Head set
              </h1>
              <h3 className="xl:text-xl">
                A detailed illustration gaming head set and mouse, magic,
                sticker design.
              </h3>
            </CardHeader>
            <Divider />
            <CardBody className="xl:text-2xl lg:text-sm w-full">
              <div className=" flex justify-between w-full">
                <div className="flex flex-col w-full">
                  <p className=" w-full">Trainig Resolution</p>
                  <p className="font-bold text-md">1024x1024</p>
                </div>
                <div className="flex flex-col w-full ">
                  {" "}
                  <p className="text-md ">Base Model</p>
                  <p className="font-bold  w-full">Stable Difusion v2.1</p>
                </div>
              </div>
              <div className=" flex gap-44">
                <div className="flex flex-col">
                  <p className="text-xm">Category</p>
                  <p className="font-bold">General</p>
                </div>
                <div className="flex flex-col">
                  {" "}
                  <p>Strength</p>
                  <p className="font-bold">Medium</p>
                </div>
              </div>
            </CardBody>

            <CardFooter>
              <Button
                radius="full"
                className="bg-gradient-to-tr from-[#A966DE] to-[#4C6EFF] text-white text-lg lg:text-xl shadow-lg flex w-3/4 "
              >
                Generate with this model
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="flex py-6   ">
          <Card
            isFooterBlurred
            radius="lg"
            className="border-none rounded-r-none  w-[18rem] h-full "
          >
            <Image
              alt="head set"
              className="object-cover  w-full h-[20rem] xl:h-[22rem] "
              src={HeadsetImg}
            />
            <CardFooter className="flex justify-between overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <div className="flex gap-2 w-full">
                {" "}
                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                <Checkbox defaultSelected className=""></Checkbox>
              </div>

              <Button
                isIconOnly
                aria-label="Like "
                radius="full"
                className="text-tiny text-white bg-black/20"
              >
                <PlusIcon />
              </Button>
            </CardFooter>
          </Card>
          <Card className=" rounded-l-none w-[35rem] xl:w-[37rem] px-6 py-2">
            <CardHeader className="flex flex-col gap-3 w-full">
              <h1 className="text-xs font-bold xl:text-2xl w-full ">
                Ilustration Gaming Head set
              </h1>
              <h3 className="xl:text-xl">
                A detailed illustration gaming head set and mouse, magic,
                sticker design.
              </h3>
            </CardHeader>
            <Divider />
            <CardBody className="xl:text-2xl lg:text-xs w-full">
              <div className=" flex justify-between w-full">
                <div className="flex flex-col w-full">
                  <p className=" w-full">Trainig Resolution</p>
                  <p className="font-bold text-md">1024x1024</p>
                </div>
                <div className="flex flex-col w-full ">
                  {" "}
                  <p className=" ">Base Model</p>
                  <p className="font-bold  w-full">Stable Difusion v2.1</p>
                </div>
              </div>
              <div className=" flex gap-44">
                <div className="flex flex-col">
                  <p className="">Category</p>
                  <p className="font-bold">General</p>
                </div>
                <div className="flex flex-col">
                  {" "}
                  <p>Strength</p>
                  <p className="font-bold">Medium</p>
                </div>
              </div>
            </CardBody>

            <CardFooter>
              <Button
                radius="full"
                className="bg-gradient-to-tr from-[#A966DE] to-[#4C6EFF] text-white text-lg lg:text-xl shadow-lg flex w-3/4 "
              >
                Generate with this model
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <TrendingCard />
    </div>
  );
};

export default Hero;
