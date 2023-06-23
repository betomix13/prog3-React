import React, { ChangeEvent } from "react";

interface InputTextProps {
  value: string;
  onChange: (value: string) => void;
}

const InputText: React.FC<InputTextProps> = ({ value, onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return <input type="text" value={value} onChange={handleChange} />;
};

export default InputText;