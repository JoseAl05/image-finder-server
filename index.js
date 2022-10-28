const compression = require('compression');
const express = require('express');
const helmet = require("helmet");
const path = require('path');
const apiRouter = require("./routes/router");
const bodyParser = require("body-parser");
const cors = require('cors');
const PORT = require('./config');



//Initialize Server
const app = express();

// compress responses
app.use(compression());

// Set default HTTP headers by Helmet Package
app.use(helmet());

//Middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "public")));
//Principal Route
app.use('/api', apiRouter);

app.listen(PORT, ()=>{
    console.log(`Server listening on port ${PORT}`)
})