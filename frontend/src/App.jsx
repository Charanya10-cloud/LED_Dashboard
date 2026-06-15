import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [isOn, setIsOn] = useState(false);

  const turnOn = async () => {
    await axios.post("https://led-dashboard.onrender.com/device/on");
    setIsOn(true);
  };

  const turnOff = async () => {
    await axios.post("https://led-dashboard.onrender.com/device/off");
    setIsOn(false);
  };

  return (
    <div className="app">

      <div className="stars"></div>

      <div className="dashboard">

        <h1>☁ Pixel Paradise IoT ☁</h1>

        <div className="character-card">
          <div className="character">👾</div>

          <div className="speech">
            {isOn
              ? "Yay! Device Activated ✨"
              : "Device Sleeping 🌙"}
          </div>
        </div>

        <div className="led-section">

          <div className={isOn ? "bulb bulb-on" : "bulb"}>
            💡
          </div>

          <h2>
            {isOn ? "LED ON" : "LED OFF"}
          </h2>

        </div>

        <div className="buttons">

          <button className="on-btn" onClick={turnOn}>
            Turn ON ✨
          </button>

          <button className="off-btn" onClick={turnOff}>
            Turn OFF 🌙
          </button>

        </div>

        <div className="status-panel">

          <div className="status">
            📡 MQTT
            <span className="green"></span>
          </div>

          <div className="status">
            🤖 ESP32
            <span className="green"></span>
          </div>

        </div>

      </div>

    </div>
  );
}

export default App;