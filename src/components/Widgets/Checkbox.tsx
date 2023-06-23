import React, { useState } from "react";

interface CheckBoxProps {
  label: string;
}

const CheckBox: React.FC<CheckBoxProps> = ({label}) => {
  const [isChecked, setisChecked] = useState(false);

  const handleCheckBox = () => {
    setisChecked(!isChecked);
  };

  return (
    <label>
      <input type="checkbox"
       checked={isChecked} 
       onChange={handleCheckBox} />
     {label}
    </label>
  );
};

export default CheckBox;