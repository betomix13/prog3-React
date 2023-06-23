import React, { ChangeEvent } from "react";

interface InputTextAreaProps {
  value: string;
  onChange: (value: string) => void;
}

const InputTextArea: React.FC<InputTextAreaProps> = ({ value, onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value);
  };

  return <textarea value={value} onChange={handleChange} />;
};

export default InputTextArea;