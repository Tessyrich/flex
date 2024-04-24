import React, { useState } from "react";
import { Slider } from "@nextui-org/react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(50);

  const increaseProgress = () => {
    setProgress((prevProgress) => Math.min(prevProgress + 10, 100));
  };

  const decreaseProgress = () => {
    setProgress((prevProgress) => Math.max(prevProgress - 10, 0));
  };

  const handleSliderChange = (e) => {
    setProgress(parseInt(e.target.value));
  };

  return (
    <div className="w-full max-w-xs mx-auto ">
      <div className="flex items-center gap-2 mb-4  border rounded-3xl w-full">
        <button
          className="px-4 py-2  text-gray-500  rounded-full  border border-gray-100"
          onClick={decreaseProgress}
        >
          -
        </button>
        <Slider
          size="md"
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={handleSliderChange}
          color="secondary"
          disableThumbScale={true}
          aria-label="Temperature"
          defaultValue={0.4}
          className="max-w-md"
        />

        <button
          className="px-4 py-2  text-gray-500  rounded-full ml-2 border border-gray-100"
          onClick={increaseProgress}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ProgressBar;
