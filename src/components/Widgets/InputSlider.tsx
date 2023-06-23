import React, { ChangeEvent } from "react";

interface InputSliderProps {
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
}

const InputSlider: React.FC<InputSliderProps> = ({ min, max, value, onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    onChange(newValue);
  };

  return (
    <input type="range" min={min} max={max} value={value} onChange={handleChange} />
  );
};

export default InputSlider;
