console.log('Backend Server Started!!');
const mongoose = require('mongoose');
const mongodb = require('mongodb');
const express  = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();

const testApp = require('./View/testApp');
const formData = require('./View/FormData');
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
mongoose.connect(databaseUrl,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }, ()=>
{
    console.log('Database is Connected Successfully');
})
// -------------------------------------------------------------------------------------------------------------------------------


// ------------------------------------------------app.use-------------------------------------------------------------
app.get('/', (req, res)=>
{
    res.send('Hello User...');
})
app.use(cors());
app.use('/v1/test', testApp);
app.use('/v1/messsage', formData);




// ----------------------------------Listening to the port Server-----------------------------------------
app.listen(port, ()=>
{
    console.log(`Yeeee.. Server Connected on port: ${port} ....`);
})