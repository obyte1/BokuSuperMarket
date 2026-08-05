const express = require('express');
const app = express();

const dotenv = require('dotenv');

const productRoute = require('./Routes/ProductRoute');
const userRoute = require('./Routes/UserRoute');

dotenv.config(); // Load environment variables from .env file

app.use(express.json()); //middleware to parse JSON request bodies



app.use('/products', productRoute); //use the product route for all requests starting with /products
app.use('/users', userRoute); //use the user route for all requests starting with /users



const connectDB = require('./Config/databaseConfig');
connectDB(); // Connect to MongoDB

app.listen(process.env.PORT, () => {
    console.log('Server is running on port ${process.env.PORT}');
});

