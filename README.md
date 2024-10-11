# Real-time Chat App

Welcome to the **Real-time Chat App**! This is a full-stack real-time chat application built using the MERN stack with Zustand for state management and Socket.IO for real-time updates. The app supports user authentication, real-time messaging, and displays the online status of users.

## Technologies Used

![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Express.js](https://img.shields.io/badge/-Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![React](https://img.shields.io/badge/-React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Zustand](https://img.shields.io/badge/-Zustand-orange?style=for-the-badge)
![Socket.IO](https://img.shields.io/badge/-Socket.IO-010101?style=for-the-badge&logo=socket.io)

## Features

- **User Authentication:** Secure login and signup.
- **Real-time Messaging:** Instant message updates powered by Socket.IO.
- **Online User Status:** See which users are online in real-time.
- **Incoming Message Notification Sound:** Get an audio alert whenever a new message arrives in an open chat.

## Screenshots

### Chat (Open State)
[![Chat Open State](https://i.postimg.cc/FKSLgfpN/Screenshot-from-2024-10-11-15-33-32.png)](https://postimg.cc/xk0891B4)

### Chat (Closed State)
[![Chat Closed State](https://i.postimg.cc/5yZkXQNT/Screenshot-from-2024-10-11-15-32-28.png)](https://postimg.cc/p5JB7TjJ)

### Login Page
[![Login Page](https://i.postimg.cc/tJTzt3g7/Screenshot-from-2024-10-11-15-41-03.png)](https://postimg.cc/ygM97Scz)

### Signup Page
[![Signup Page](https://i.postimg.cc/Vk63LhP0/Screenshot-from-2024-10-11-15-41-08.png)](https://postimg.cc/SJBZgDsm)

## Getting Started

### Prerequisites
Ensure that you have the following installed on your machine:
- **Node.js** (v16+)
- **MongoDB** (for the backend database)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/realtime-chat-app.git
    ```

2. Navigate to the project directory:
    ```bash
    cd realtime-chat-app
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Set up the environment variables. Create a `.env` file in the `backend` folder and add the following:
    ```
    MONGODB_URI=your-mongodb-uri
    JWT_SECRET=your-jwt-secret
    ```

### Running the Application

#### Development Mode

To start the app in development mode:

```bash
npm run server
