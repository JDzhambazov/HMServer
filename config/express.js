const express = require('express');
const cors = require('cors')
const cookieParser = require('cookie-parser')

module.exports = (app) => {
    app.use(cookieParser());

    app.use(cors({
        exposedHeaders: 'Authorization'
      }));

    app.use(express.urlencoded({ extended: true }));

    app.use(express.json())
};