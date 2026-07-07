
import { useState } from "react";
import Navbar from "./components/Navbar";

{/* <Navbar title="DevLensAI"/> */}

function App() {
  // const projectName= "DevLensAI";
  // const version="v1.0";
  // const developer= "Himanshu Nayak";
  // const college= "ABES Engineering College";

  // function sayHello() {
  //   alert("Welcome to DevLensAI")
  // }
  // function aboutDeveloper(){
  //   alert("Developer: Himanshu Nayak")
  // }

  const[count, setcount]=useState(0);
  function increaseCount(){
    setcount(count+1)
  }
  function decreaseCount(){
    setcount(count-1)
  }

  return (
    <>
    <Navbar
    title="DevLensAI"
    // version="v1.0"
    // developer="Himanshu"
    />
    <h1>Welcon to DevLensAI 🚀</h1>
    {/* <h1>WelCome to {projectName}</h1> */}
    {/* <p>version {version}</p>
    <h2>Developer : {developer}</h2>
    <p>College : {college}</p> */}
    {/* <button onClick={sayHello}>
      Click Me
    </button>
    <button onClick={aboutDeveloper}>
      About Developer
    </button> */}
    <h1>Counter: {count}</h1>
    <button onClick={increaseCount}>
      Increase
    </button>
    <button onClick={decreaseCount}>
      Decrease
    </button>
    </>
  );
}

export default App;