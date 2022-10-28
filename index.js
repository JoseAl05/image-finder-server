const express = require('express');
const apiRouter = require("./routes/router");
const bodyParser = require("body-parser");
const cors = require('cors');


//Initialize Server
const app = express();

//Middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

//Principal Route
app.use('/api', apiRouter);

app.listen(4000, ()=>{
    console.log(`Server listening on port ${4000}`)
})