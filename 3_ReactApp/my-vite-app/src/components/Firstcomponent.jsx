// import React from 'react'
//props are very imp in react is short for properties.they help us to use data that is passed  to component from thier parent component
//used to share data between component
function Firstcomponent({name}) {
 
  return (
    <>
      <div>Firstcomponent</div>
      <h1>Hello {name} </h1>
    </>
  );
}

export default Firstcomponent

//benefits of props
//custaomization
//reusability :same component can be used multiple times with different configurations
//seperation of concerns :it remains encapsulated and focused on its own functionallyty
//efficiency:DRY --do not repeat yourself
// avoid code duplication
