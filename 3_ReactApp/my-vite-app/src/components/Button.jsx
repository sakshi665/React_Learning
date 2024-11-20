
function Button() {
    const handleClick=()=>{
        console.log("button clicked");
    }
  return (
   <button onClick={handleClick}> click me </button>
  )
}   

export default Button;