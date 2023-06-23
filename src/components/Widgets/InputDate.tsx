import React, { ChangeEvent } from "react";

interface InputProps {
  type: string;
  value: string;
  onChange: (value: string) => void;
}

const InputDate: React.FC<InputProps> = ({ type, value, onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return <input type={type} value={value} onChange={handleChange} />;
};

export default InputDate;
