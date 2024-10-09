"use client";

import { DualRangeSlider } from "./ui/slider";
import { useState } from "react";

const DualRangeSliderCustomLabel = () => {
  const [values, setValues] = useState([0, 100]);
  const [isInteracted, setIsInteracted] = useState(false);

  const handleValueChange = (newValues) => {
    setValues(newValues);
    setIsInteracted(true); // Set to true when the slider is interacted with
  };

  return (
    <div className="w-full space-y-5">
      <DualRangeSlider
        value={values}
        onValueChange={handleValueChange}
        min={0}
        max={10000000}
        step={5000}
      />
      <div className="flex flex-row justify-between gap-2">
        <div>
          <input
            id="minValue"
            type="number"
            value={isInteracted ? values[0] : ""}
            readOnly
            placeholder="Min"
            className="w-full shadow-sm rounded p-1"
          />
        </div>
        <div>
          <input
            id="maxValue"
            type="number"
            value={isInteracted ? values[1] : ""}
            readOnly
            placeholder="Max" // Updated placeholder to "Max"
            className="w-full shadow-sm rounded p-1"
          />
        </div>
      </div>
    </div>
  );
};

export default DualRangeSliderCustomLabel;
