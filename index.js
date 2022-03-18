console.log('Backend Server Started!!');
const mongoose = require('mongoose');
const mongodb = require('mongodb');
const express  = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();

const testApp = require('./View/testApp');
//-------------------------------dotenv config-------------------------------------------
dotenv.config();
// -----------------------------------------------------------------------------------------
const port = process.env.PORT;


// --------------------------------------body parser config---------------------------------------------
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
// ---------------------------------------------------------------------------------------------------------


// ------------------------------------------------Connection with the Database-----------------------------------------
const databaseUrl = process.env.DATABASE_URL;
mongoose.connect(databaseUrl, ()=>
{
    console.log('Database is Connection Success');
})
// -------------------------------------------------------------------------------------------------------------------------------


// ------------------------------------------------app.use-------------------------------------------------------------
app.use(cors());
app.use('/v1/test', testApp);




// ----------------------------------Listening to the port Server-----------------------------------------
app.listen(port, ()=>
{
    console.log(`Yeeee.. Server Connected on port: ${port} ....`);
})