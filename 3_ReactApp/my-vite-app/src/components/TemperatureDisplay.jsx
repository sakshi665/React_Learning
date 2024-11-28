// import React ,{useState} from 'react'

function TemperatureDisplay({temperature}) {
    const farenheit = (temperature * 9 / 5) + 32;
  return (
    <div>
      <p>Temperature in celcius:{temperature} C</p>
      <p>Temperature in ferenheit:{farenheit}F</p>
    </div>
  );
}

export default TemperatureDisplay