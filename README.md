# User Authentication and Authorization API

This project implements a user authentication and authorization system using Node.js, Express, bcrypt, and JSON Web Tokens (JWT). The system supports user registration, login, token refresh, and logout functionalities.

## Features

- **User Registration**: Register a new user with a username, password, and role.
- **User Login**: Authenticate a user and issue JWT access and refresh tokens.
- **Token Refresh**: Refresh the access token using a valid refresh token.
- **User Logout**: Invalidate the refresh token and clear the cookies.

## Prerequisites

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/saragamdotdev/nodejs-auth-api
   ```
2. Navigate to the project directory:
   ```bash
   cd nodejs-auth-api
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
   
# Environment Variables

Create a .env file in the root directory and configure the following environment variables:
```bash
ACCESS_TOKEN_SECRET=your_access_token_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret
```

   
