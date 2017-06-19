const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const post = require('../models/post');

const db = "mongodb://alberticograu:920208@ds131512.mlab.com:31512/codeposttest";

// Deals with reprecated mongoose warnings
mongoose.Promise = global.Promise;

mongoose.connect(db, function(err) {
  if (err) {
    console.log('Connetion Error');
  }
});

router.get('/posts', function(req, res) {
  console.log('Requesting Posts');
  post.find({})
      .exec(function(err, posts) {
        if (err) {
          console.log('Error getting Posts');
        } else {
          res.json(posts);
          console.log(posts);
        }
      });
});

module.exports = router;
