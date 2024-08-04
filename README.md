# Twitter Backend

## Assignment Overview
This project is a simplified Twitter-like backend system designed to demonstrate skills in Node.js, MongoDB

## How to Run the Application

### Dependencies
- express
- mongoose
- cors
- bcrypt
- jsonwebtoken
- body-parser

### Installation Instructions
1. Clone the repository:
   git clone https://github.com/sravankamineni/tweets-backend-sravan

2. Install dependencies:
    cd tweets-backend-sravan
    npm install

3. Create a .env file in the root directory and add the following:
    PORT = 5001
    CONNECTION_STRING = your_mongodb_connection_string
    JWT_SECRET = your_jwt_secret

4. Start the application:
    node server.js


### API Endpoints

1. User Registration
    
    URL: POST https://tweets-backend-sravan.onrender.com/api/users/register
    Body:
        {
        "username": "string",
        "email":"string
        "password": "string"
        }

2. User Login
    URL: POST https://tweets-backend-sravan.onrender.com/api/users/login
    Body:
        {
        "username": "string",
        "password": "string"
        }

3. Post a Tweet
    URL: POST https://tweets-backend-sravan.onrender.com/api/tweets
    Headers:
    Authorization: Bearer <token>
    Body:
        {
        "text": "string"
        }

4. Fetch User Timeline
    URL: GET https://tweets-backend-sravan.onrender.com/api/users/:user_id/timeline


### Issues and Troubleshooting
1. Ensure MongoDB is running and the connection string in the .env file is correct.
2. Check for errors in the console for troubleshooting.
3. Check the api routes are correct while requesting

### Contact Information
For any queries or assistance, please contact <sravankamineni41100@gmail.com