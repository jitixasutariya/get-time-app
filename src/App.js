import { useState } from "react"; // Importing useState hook from React
import logo from "./logo.svg"; // Importing logo (assuming it's used elsewhere in the application)
import "./App.css"; // Importing CSS file for styling

function App() {
  // Defining the state variable 'currentTime' and the function 'setTime' to update it
  const [currentTime, setTime] = useState(
    "Hello Jitixa! When you Click On This Button Get Current Time"
  );

  // Function to update the 'currentTime' state with the current time
  function updateTime() {
    let getTime = new Date().toLocaleTimeString(); // Getting the current time as a formatted string
    setTime(getTime); // Updating the state with the current time
  }

  return (
    <div className="App">
      <div>
        <h2>{currentTime}</h2> {/* Displaying the current time or message */}
        <button className="btn" onClick={updateTime}>
          {" "}
          {/* Button to update the time when clicked */}
          Get Time
        </button>
      </div>
    </div>
  );
}

export default App; // Exporting the App component as the default export
