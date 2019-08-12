const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


// Setting up a connection with sequelize
const Sequelize = require('sequelize');

const db = new Sequelize('spot-taken', 'postgres', 'kurushima74', {
  host: 'localhost',
  dialect: 'postgres',
});

// Test DB

db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

