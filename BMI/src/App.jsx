import { useState } from 'react'
import './App.css'

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiStatus, setBmiStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const calculateBmi = () => {
    const isValidHeight = /^\d+$/.test(height);
    const isValidWeight = /^\d+$/.test(weight);

    if (isValidHeight && isValidWeight) {
      const heightInMeters = height / 100;
      const bmiValues = weight / (heightInMeters * heightInMeters);
      setBmi(bmiValues.toFixed(2));
      
      if (bmiValues < 18.5) {
        setBmiStatus("Underweight");
      } else if (bmiValues >= 18.5 && bmiValues <= 24.9) {
        setBmiStatus("Normal Weight");
      } else if (bmiValues >= 25 && bmiValues <= 29.9) {
        setBmiStatus("Overweight");
      } else {
        setBmiStatus("Obese");
      }
      
      setErrorMessage("");
    } else {
      setBmi(null);
      setBmiStatus("");
      setErrorMessage("Please enter valid numeric values for height and weight");
    }
  };

  const clearAll = () => {
    setHeight("");
    setWeight("");
    setBmi(null);
    setBmiStatus("");
    setErrorMessage("");
  };

  return (
    <div className="bmi-calculator">
      <img src="./src/assets/bmi.jpeg" alt="bmi" />
      <div className="box">
        <div className="data">
          <h1>BMI Calculator</h1>
          {errorMessage && <p className="error">{errorMessage}</p>}
          <div className="input-container">
            <label htmlFor="height">Height (cm)</label>
            <input type="text" id="height" value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>
          <div className="input-container">
            <label htmlFor="weight">Weight (kg)</label>
            <input type="text" id="weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <button onClick={calculateBmi}>Calculate BMI</button>
          <button onClick={clearAll}>Clear</button>
          {bmi !== null && (
            <div className="result">
              <p>Your BMI is: {bmi}</p>
              <p>Status: {bmiStatus}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
