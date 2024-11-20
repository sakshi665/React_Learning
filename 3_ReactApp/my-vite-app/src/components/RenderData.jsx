// import React from 'react'

function RenderData() {
       const fruit = ["Apple", "Mango", "leechy"];
    //    const person = {
    //      name: "sagar",
    //      age: 22,
    //    };
  return (
    <>
      <h1>Fruits list:</h1>
      <ul>
        {/* {fruit.map((fruit) => (
          // eslint-disable-next-line react/jsx-key
          <li>{fruit}</li>
        ))} */}

        {fruit.map((fruit) => {
          // eslint-disable-next-line react/jsx-key
          return <li>{fruit}</li>
        })}
        {/* [<li>Apple</li><li>Kiwi</li>] */}
      </ul>
    </>
  );
}

export default RenderData;