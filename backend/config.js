const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;
const JWT_SECRET = process.env.JWT_SECRET;

console.log("MONGODB_URI:", MONGODB_URI); // Add this line to debug

module.exports = { MONGODB_URI, JWT_SECRET };
