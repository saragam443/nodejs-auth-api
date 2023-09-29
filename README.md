# Express-Posts-API

## Description

This project is a web application developed using Node.js and Express.js. It provides a RESTful API for managing authentication and authorization.

## Features

- Authentication and role based authorization api with jwt
- Cross-Origin Resource Sharing (CORS) support for allowing or blocking requests from different origins.

## Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/saragam443/express-posts-api.git
   ```

2. Navigate to the project directory:

   ```shell
   cd express-posts-api
   ```

3. Install dependencies:
   ```shell
   npm install
   ```

## Usage

To run the API on your local machine, follow these steps:

1. Start the server:

   ```shell
   npm start
   ```

   This will start the API server using the node server.js command.

   Alternatively, you can use the development mode with automatic server restart on file changes:

   ```shell
   npm run dev
   ```

   This will start the API server using nodemon server.js for a better development experience.

2. The API will now be accessible locally at http://localhost:3008 (or the specified port).

   You can send HTTP requests to the available endpoints using tools like Postman or cURL.

   Note: Make sure to update the port number in server.js if you want to use a different port for running the API locally.

   Feel free to adjust the commands or port number based on your specific requirements.

3. Access the API endpoints using a RESTful approach.
   Example endpoints:

## Technologies Used

1. Node.js
2. Express.js
3. date-fns
4. uuid

## Acknowledgements

This project was developed as part of a learning experience and is for demonstration purposes only.
