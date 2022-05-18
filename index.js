const express = require('express');
const dotenv = require('dotenv');

dotenv.config({path: './config/config.env'});

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));