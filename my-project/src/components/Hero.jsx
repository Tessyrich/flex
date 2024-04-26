import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
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
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext(); // Move to the next slide
      }
    }, 5000); // Change the interval as needed

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Adjust the number of slides shown
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="py-6 px-6 w-full h-auto">
      <div className="flex justify-between">
        <p className="text-xl font-bold">Featured Models</p>
        <div className="flex gap-2">
          <div onClick={() => sliderRef.current.slickPrev()}>
            <Leftarrow />
          </div>
          <div onClick={() => sliderRef.current.slickNext()}>
            <Rightarrow />
          </div>
        </div>
      </div>
      <Slider
        ref={sliderRef}
        {...sliderSettings}
        className=" flex-nowrap  w-full  flex lg:max-w-[77vw] "
      >
        {[...Array(4)].map((_, index) => (
          <div key={index} className=" carousel-item w-full lg:max-w-[40vw]">
            <div className="flex lg:flex-row flex-col w-full  lg:h-[15rem] xl:h-[22rem]">
              {" "}
              {/* Add this div */}
              <Card
                isFooterBlurred
                radius="lg"
                className="border-none rounded-r-none w-full  lg:w-[18rem] h-full"
              >
                <img
                  alt="head set"
                  className="object-cover w-full h-auto lg:h-[15rem] xl:h-[22rem]"
                  src={HeadsetImg}
                />
                <CardFooter className="flex justify-between overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100% - 8px)] shadow-small ml-1 z-10">
                  <div className="flex gap-2 w-full">
                    <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                    <Checkbox defaultSelected className="" />
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
              <Card className="rounded-l-none w-full xl:w-[30rem] lg:px-6 px-2 py-2 overflow-y-hidden">
                <CardHeader className="flex flex-col gap-3 w-full justify-center items-start">
                  <h1 className="text-xs lg:text-xl font-bold xl:text-2xl w-full">
                    Ilustration Gaming Head set
                  </h1>
                  <h3 className="xl:text-xl w-full lg:w-full ">
                    A detailed illustration gaming head set and mouse, magic,
                    sticker design.
                  </h3>
                </CardHeader>
                <Divider />
                <CardBody className="xl:text-xl text-xs w-full  flex flex-col lg:gap-5 xl:gap-1">
                  <div className="flex justify-between w-full  ">
                    <div className="flex flex-col w-full ">
                      <p className="w-full ">Trainig Resolution</p>
                      <p className="font-bold lg:hidden xl:block">1024x1024</p>
                    </div>
                    <div className="flex flex-col w-full">
                      <p className="w-full text-end">Base Model</p>
                      <p className="font-bold w-full lg:hidden xl:block text-end">
                        Stable Difusion
                      </p>
                    </div>
                  </div>
                  <div className="flex ">
                    <div className="flex flex-col w-full ">
                      <p className="">Category</p>
                      <p className="font-bold ">General</p>
                    </div>
                    <div className="flex flex-col w-full text-end">
                      <p>Strength</p>
                      <p className="font-bold">Medium</p>
                    </div>
                  </div>
                </CardBody>
                <CardFooter>
                  <Button
                    radius="full"
                    className="bg-gradient-to-tr from-[#A966DE] to-[#4C6EFF] text-white text-lg lg:text-xl shadow-lg flex lg:w-3/4 w-full"
                  >
                    Generate with this model
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        ))}
      </Slider>
      <TrendingCard />
    </div>
  );
};

export default Hero;
