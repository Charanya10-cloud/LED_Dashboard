# LED Dashboard - Cloud Connected IoT Control System

A full-stack IoT application that enables remote control of an ESP32-connected LED through a web dashboard using MQTT over HiveMQ Cloud.

---

##  Overview

This project demonstrates real-world IoT communication using:

- React Frontend
- Node.js Backend
- MQTT Protocol
- HiveMQ Cloud Broker
- ESP32 Microcontroller

Users can control an LED connected to an ESP32 from anywhere through a modern web interface.

---

## System Architecture

```text
React Dashboard
       │
       ▼
Node.js Backend
       │
       ▼
HiveMQ Cloud MQTT Broker
       │
       ▼
ESP32
       │
       ▼
LED
```

---

##  Features

- Remote LED Control
- HiveMQ Cloud Integration
- MQTT Publish/Subscribe Communication
- Secure MQTT over TLS
- Real-Time Device Control
- Responsive React Dashboard
- Cloud Deployment Support
- Accessible from Any Device

---

##  Tech Stack

### Frontend
- React.js
- Axios
- CSS

### Backend
- Node.js
- Express.js
- MQTT.js
- Socket.IO
- dotenv

### IoT
- ESP32
- Arduino IDE
- PubSubClient
- WiFiClientSecure

### Cloud Services
- HiveMQ Cloud
- Render
- Vercel

---

##  Project Structure

```text
LED_Dashboard
│
├── frontend
│   ├── src
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   │
│   └── package.json
│
├── backend
│   ├── server.js
│   ├── package.json
│   └── .env
│
└── README.md
```

---

##  Installation

### Clone Repository

```bash
git clone https://github.com/Charanya10-cloud/LED_Dashboard.git
cd LED_Dashboard
```

---

## Backend Setup

```bash
cd backend
npm install
```

Create `.env`

```env
MQTT_HOST=your-hivemq-cluster
MQTT_PORT=8883
MQTT_USER=your-username
MQTT_PASSWORD=your-password
```

Run backend:

```bash
node server.js
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## ESP32 Configuration

Update the following values:

```cpp
const char* ssid = "YOUR_WIFI_NAME";
const char* password = "YOUR_WIFI_PASSWORD";

const char* mqtt_server =
"YOUR_HIVEMQ_CLUSTER";

const char* mqtt_username =
"YOUR_USERNAME";

const char* mqtt_password =
"YOUR_PASSWORD";
```

Upload the code using Arduino IDE.

---

### API Endpoints

### Turn LED ON

```http
POST /device/on
```

### Turn LED OFF

```http
POST /device/off
```

### Get Device Status

```http
GET /device/status
```

---

##  Deployment

### Backend

Hosted on Render

```text
https://led-dashboard.onrender.com
```

### Frontend

Hosted on Vercel

```text
https://your-vercel-url.vercel.app
```

---

##  Demo

### Dashboard

<img width="1412" height="906" alt="Screenshot 2026-06-16 022450" src="https://github.com/user-attachments/assets/f83b3933-176b-4bcf-865b-554695dd3c3e" />

---

##  Learning Outcomes

This project helped understand:

- MQTT Communication
- Publish/Subscribe Architecture
- Cloud IoT Systems
- ESP32 Networking
- Secure MQTT using TLS
- Frontend-Backend Integration
- Cloud Deployment
- Real-Time Device Control

---

##  Future Improvements

- Live Sensor Monitoring
- Temperature & Humidity Dashboard
- Multiple Device Management
- Device Authentication
- Historical Analytics
- Mobile App Support
- Push Notifications

---

##  Author

**Charanya Sree M C**

Electronics and Communication Engineering

Interests:
- IoT
- Embedded Systems
- Artificial Intelligence
- Full Stack Development
- Machine learning 

---

## ⭐ Support

If you found this project useful, consider giving the repository a star ⭐
