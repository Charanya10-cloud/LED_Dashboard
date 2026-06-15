require("dotenv").config();

const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const mqtt = require("mqtt");

const app = express();

app.use(cors());
app.use(express.json());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

let currentStatus = "OFF";

const mqttClient = mqtt.connect({
  host: process.env.MQTT_HOST,
  port: Number(process.env.MQTT_PORT),
  protocol: "mqtts",

  username: process.env.MQTT_USER,
  password: process.env.MQTT_PASSWORD
});

mqttClient.on("connect", () => {

  console.log(" Connected to HiveMQ Cloud");

  mqttClient.subscribe("device/status", (err) => {

    if (!err) {
      console.log(" Subscribed to device/status");
    } else {
      console.log(" Subscription Error");
      console.log(err);
    }

  });

});

mqttClient.on("message", (topic, message) => {

  if (topic === "device/status") {

    currentStatus = message.toString();

    io.emit("statusUpdate", currentStatus);

    console.log("Status:", currentStatus);
  }

});

mqttClient.on("error", (err) => {

  console.log(" MQTT Error");

  console.log(err);
});

app.post("/device/on", (req, res) => {

  mqttClient.publish("device/control", "ON");

  console.log("Published: ON");

  res.json({
    success: true
  });

});

app.post("/device/off", (req, res) => {

  mqttClient.publish("device/control", "OFF");

  console.log("Published: OFF");

  res.json({
    success: true
  });

});

app.get("/device/status", (req, res) => {

  res.json({
    status: currentStatus
  });

});

server.listen(5000, () => {

  console.log(" Server running on port 5000");

});