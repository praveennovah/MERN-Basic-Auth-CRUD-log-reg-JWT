This is a basic authentication application built using the MERN stack (MongoDB, Express.js, React, and Node.js).
The application includes user registration, login, and protected routes using JWT (JSON Web Tokens). 
The client side uses Material UI for simple form and Axios for HTTP requests.

Client
----------------------------------------------------------------------
React: A JavaScript library for building user interfaces.
Material UI: A popular React UI framework.
Axios: A promise-based HTTP client for making requests to the backend.

Server
----------------------------------------------------------------------
Node.js: A JavaScript runtime built on Chrome's V8 JavaScript engine.
Express.js: A fast, unopinionated, minimalist web framework for Node.js.
MongoDB: A document-oriented NoSQL database.
JWT (JSON Web Tokens): A compact, URL-safe means of representing claims to be transferred between two parties.

Features
----------------------------------------------------------------------
1.User Registration

2.User Login

3.JWT-based Authentication

4.Protected Routes

5.Home Page


Installation
-----------------------------------------------------------------------
Clone the repository:

step-1: git clone https://github.com/your-username/MERN-Basic-Auth-CRUD-log-reg-JWT.git 

step-2: cd MERN-Basic-Auth-CRUD-log-reg-JWt

step-3: Install dependencies for both client and server:

 cd client
 npm install
 
 cd ../server
 npm install

step-4: Create a .env file in the server directory and add the following environment variables:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

step-5: Run the cmd client and server:

server-> npm start

client-> npm run dev



