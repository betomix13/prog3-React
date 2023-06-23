import React, { ChangeEvent } from "react";

interface SwitchButtonProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const SwitchButton: React.FC<SwitchButtonProps> = ({ checked, onChange }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <label>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        className="switch-input"
      />
      <span className="switch-slider"></span>
    </label>
  );
};

export default SwitchButton;