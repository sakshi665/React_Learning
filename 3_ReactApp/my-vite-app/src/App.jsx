import './App.css'
// import Form from './components/Form';
// import Firstcomponent from './components/Firstcomponent'
// import RenderData from './components/RenderData';
// import Button from './components/Button';
//  import Form from './components/Form';
// import UseState1 from './components/UseState1';
// import Advanceform from './components/Advanceform';
// import  { useState } from "react";
import { BrowserRouter } from 'react-router-dom';
import React_Router_dom from './components/React_Router_dom';

// import Temperature from './components/Temperature';
// import TemperatureDisplay from './components/TemperatureDisplay';
function App() {
    // const [temperature, setTemperature] = useState("");
    // const handleTemperatureChange = (temp) => setTemperature(temp)
  return (
    <>
      {/* <Firstcomponent name="Sakshi"></Firstcomponent>
      <Firstcomponent name="Vaishnavi"></Firstcomponent>
      <Firstcomponent name="sami"></Firstcomponent>
      <RenderData></RenderData>
      <Button></Button> */}
      {/* <Form></Form> */}
      {/* <UseState1></UseState1> */}
      {/* <Advanceform></Advanceform> */}
      {/* <Form></Form> */}
      {/* <Temperature temperature={temperature} handletemperaturechange={handleTemperatureChange}></Temperature>
      <TemperatureDisplay temperature={temperature}></TemperatureDisplay> */}
      <BrowserRouter>
        <React_Router_dom />
      </BrowserRouter>
    </>
  );
}

export default App
