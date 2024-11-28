// import  { useState } from 'react'

function Temperature({temperature,handletemperaturechange}) {
  return (
    <label>
      Enter Temperature
      <input type="number" placeholder="Enter temperature" value={temperature}
      onChange={(e)=>handletemperaturechange(e.target.value)}
      
      ></input>

    </label>
  );
}

export default Temperature