import React, { useState } from "react";
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
  Tabs,
  Tab,
} from "@nextui-org/react";
import { PlusIcon } from "./icon/PlusIcon";
import LikedIcon from "./icon/Liked";
import HomeIcon from "./icon/homeIcon";
import TrophyIccon from "./icon/TrophyIccon";
import ProgressBar from "./Progress";
import HeadsetImg from "../assets/HeadsetImg.jpeg";
import HeartIcon from "./icon/HeartIcon";
import CardContent from "./CardContent";
import NewCardContent from "./NewCardContent";

const TrendingCard = () => {
  const [likedIndex, setLikedIndex] = useState(null);

  const handleLike = (index) => {
    if (likedIndex === index) {
      setLikedIndex(null); // If the same card is clicked again, remove liked state
    } else {
      setLikedIndex(index); // Set liked state for the clicked card
    }

    // Reset liked state after 2 seconds
    setTimeout(() => {
      setLikedIndex(null);
    }, 2000);
  };

  return (
    <div>
      {" "}
      <div className="flex w-full flex-col py-6">
        <Tabs
          aria-label="Options"
          radius="full"
          color="bg-gradient-to-tr from-[#f9f2ff] to-[#4C6EFF] text-white shadow-lg flex  font-bold"
        >
          <Tab
            key="Trending"
            title={
              <div className="flex items-center space-x-2">
                <HomeIcon />
                <span>Trending</span>
              </div>
            }
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {CardContent.map((content, index) => (
                <Card
                  isFooterBlurred
                  className="w-fulltransform transition-transform duration-300 hover:scale-105"
                  key={index}
                >
                  <img
                    alt="head set"
                    className="object-cover w-full h-[20rem] xl:h-[25rem]"
                    src={content.image}
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
                      onClick={() => handleLike(index)}
                    >
                      {likedIndex === index ? <LikedIcon /> : <HeartIcon />}
                    </Button>
                  </div>
                  <CardFooter className="flex flex-col left-2 text-white overflow-hidden py-1 px-4 absolute before:rounded-xl rounded-large bottom-1 w-[95%] shadow-small  z-10">
                    <p className="font-bold w-full text-lg">{content.title}</p>
                    <p className="w-full">{content.description}</p>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </Tab>
          <Tab
            key="New"
            title={
              <div className="flex items-center space-x-2">
                <PlusIcon />
                <span>New</span>
              </div>
            }
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {NewCardContent.map((content, index) => (
                <Card
                  isFooterBlurred
                  className="w-fulltransform transition-transform duration-300 hover:scale-105"
                  key={index}
                >
                  <img
                    alt="head set"
                    className="object-cover w-full h-[20rem] xl:h-[25rem]"
                    src={content.image}
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
                      onClick={() => handleLike(index)}
                    >
                      {likedIndex === index ? <LikedIcon /> : <HeartIcon />}
                    </Button>
                  </div>
                  <CardFooter className="flex flex-col left-2 text-white overflow-hidden py-1 px-4 absolute before:rounded-xl rounded-large bottom-1 w-[95%] shadow-small  z-10">
                    <p className="font-bold w-full text-lg">{content.title}</p>
                    <p className="w-full">{content.description}</p>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </Tab>
          <Tab
            key="Top"
            title={
              <div className="flex items-center space-x-2">
                <TrophyIccon />
                <span>New</span>
              </div>
            }
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {CardContent.map((content, index) => (
                <Card
                  isFooterBlurred
                  className="w-fulltransform transition-transform duration-300 hover:scale-105"
                  key={index}
                >
                  <img
                    alt="head set"
                    className="object-cover w-full h-[20rem] xl:h-[25rem]"
                    src={content.image}
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
                      onClick={() => handleLike(index)}
                    >
                      {likedIndex === index ? <LikedIcon /> : <HeartIcon />}
                    </Button>
                  </div>
                  <CardFooter className="flex flex-col left-2 text-white overflow-hidden py-1 px-4 absolute before:rounded-xl rounded-large bottom-1 w-[95%] shadow-small  z-10">
                    <p className="font-bold w-full text-lg">{content.title}</p>
                    <p className="w-full">{content.description}</p>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default TrendingCard;
