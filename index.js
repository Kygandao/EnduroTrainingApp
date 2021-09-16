const express = require('express');
const app = express();
const serverless = require('serverless-http');
const mongoose = require('mongoose');
const { Schema } = mongoose;
const connection = mongoose.connect('mongodb://localhost:27017/test');

