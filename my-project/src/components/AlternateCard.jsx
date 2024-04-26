// AlternateCard.js
import React from "react";
import { Card, CardFooter, Avatar, Checkbox, Button } from "@nextui-org/react";
import HeartIcon from "./icon/HeartIcon";

const AlternateCard = ({ toggleAlternateCard }) => {
  return (
    <Card isFooterBlurred className="w-full">
      {/* Your alternate card content */}
      <CardFooter className="flex justify-between items-center overflow-hidden py-1 mt-5 absolute before:rounded-xl w-full px-4 rounded-large z-10">
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
          onClick={toggleAlternateCard}
        >
          <HeartIcon />
        </Button>
      </CardFooter>
      <CardFooter className="flex flex-col left-2 text-white overflow-hidden py-1 px-4 absolute before:rounded-xl rounded-large bottom-1 w-[95%] shadow-small z-10">
        <p className="font-bold w-full text-lg">Alternate Artwork Design</p>
        <p className="w-full">
          Alternate card content Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Eum esse non, tempore quasi quos, totam officiis
          cum, in sint vel illum. Magnam
        </p>
      </CardFooter>
    </Card>
  );
};

export default AlternateCard;
