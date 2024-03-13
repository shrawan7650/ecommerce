const express = require('express')
const app = express()
const colors = require('colors')
var cors = require('cors')
require('dotenv').config();
const port = process.env.PORT||4000;
const DB = require('./config/Db');
const morgan = require('morgan');
const router = require('./routes/authRouts');
const categoryRoutes = require('./routes/categoryRoutes')
const productRoutes = require('./routes/productRoutes')
//middleware
app.use(express.json());
app.use(morgan("dev"))  
app.use(cors())

//routes
app.use('/api/v1',router)
app.use('/api/v1',categoryRoutes);
app.use('/api/v1',productRoutes);

app.get('/', (req, res) => res.send('Hello World!'))


app.listen(port, () => console.log(`server listening on port ${port}!`.bgCyan.white))

// call Databse Connection
DB();