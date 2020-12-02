const express = require('express');
const cors = require('cors')
const cookieParser = require('cookie-parser');
const config = require('./config');

module.exports = (app) => {
    app.use(cookieParser());

    app.use(cors({
        exposedHeaders: 'Authorization',
        origin:config.development.origin,
        credentials:true,
      }));

    app.use(express.urlencoded({ extended: true }));

    app.use(express.json())
};