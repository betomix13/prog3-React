import React, { useState } from 'react';
import TodoList from './components/ToDoList.tsx/ToDoList';
import CheckBox from './components/Widgets/Checkbox';
import ButtonGroup from './components/Widgets/ButtonGroup';
import Dropdown from './components/Widgets/DropDown';
import InputDate from './components/Widgets/InputDate';
import InputSlider from './components/Widgets/InputSlider';
import InputText from './components/Widgets/InputText';
import InputTextArea from './components/Widgets/InputTextArea';
import RadioButton from './components/Widgets/RadioButton';
import SwitchButton from './components/Widgets/SwitchButton';
import './App.css';
import AutosComponent from './components/AutoComponent/AutoComponent';

const options = [
  { label: "Option 1", value: "opcion 1" },
  { label: "Option 2", value: "opcion 2" },
  { label: "Option 3", value: "opcion 3" }
];

const App: React.FC = () => {
  // Declaración de estados utilizando el hook useState
  const [native, setNative] = useState("");
  const [custom, setCustom] = useState("");
  const [sliderValue, setSliderValue] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [textareaValue, setTextareaValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [switchState, setSwitchState] = useState(false);

  // Función para manejar el cambio de valor en el input "native"
  const onNativeChange = (value: string) => {
    console.log("onNativeChange: ", value);
    setNative(value);
  };

  // Función para manejar el cambio de valor en el input "custom"
  const onCustomChange = (value: string) => {
    console.log("onCustomChange: ", value);
    setCustom(value);
  };

  // Función para manejar el cambio de valor en el slider
  const handleSliderChange = (value: number) => {
    setSliderValue(value);
  };

  // Función para manejar el cambio de valor en el input "inputValue"
  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  // Función para manejar el cambio de valor en el textarea
  const handleTextareaChange = (value: string) => {
    setTextareaValue(value);
  };

  // Función para manejar el cambio de opción en el radio button
  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
  };

  // Función para manejar el cambio de estado en el switch button
  const handleSwitchChange = (checked: boolean) => {
    setSwitchState(checked);
  };

  return (
    <div className='App'>
      <h1>Tudulis</h1>
      <TodoList />
      <div className="card-container">
        <div className="card">
          <h1>Checkboxes</h1>
          <CheckBox label="hola" />
          <CheckBox label="chau" />
          <CheckBox label="nose" />
        </div>

        <div className="card">
          <h1>Button Groups</h1>
          <ButtonGroup />
        </div>

        <div className="card">
          <h1>Ejemplo Dropdown</h1>
          <Dropdown options={options} />
        </div>

        <div className="card">
          <h1>Ejemplo Input date</h1>
          <InputDate type="date" value={native} onChange={onNativeChange} />
        </div>

        <div className="card">
          <h1>Ejemplo 2 input date</h1>
          <InputDate type="text" value={custom} onChange={onCustomChange} />
        </div>

        <div className="card">
          <h1>Mandale Volumen</h1>
          <InputSlider min={0} max={100} value={sliderValue} onChange={handleSliderChange} />
          <p>Volumen Seleccionado: {sliderValue}</p>
        </div>

        <div className="card">
          <h1>Ejemplo Text Input</h1>
          <InputText value={inputValue} onChange={handleInputChange} />
          <p>Esto es lo que pusiste: {inputValue}</p>
        </div>

        <div className="card">
          <h1>Ejemplo text Area</h1>
          <InputTextArea value={textareaValue} onChange={handleTextareaChange} />
        </div>

        <div className="card">
          <h1>Ejemplo de Radio Button</h1>
          <RadioButton
            options={options}
            selectedOption={selectedOption}
            onChange={handleOptionChange}
          />
          <p>Seleccionaste: {selectedOption}</p>
        </div>

        <div className="card">
          <h1>Ejemplo de Switch button</h1>
          <SwitchButton checked={switchState} onChange={handleSwitchChange} />
          <p>Switch state: {switchState ? "ON" : "OFF"}</p>
        </div>
      </div>
      <div className="App">
      <AutosComponent />
    </div>
    </div>
  );
};

export default App;
