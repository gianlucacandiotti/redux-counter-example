import express from  'express';
import React from  'react';
import Home from  'pages/Home/Home';
import reducer from  'pages/Home/reducer';
import prepComponent from  '../utils/prepComponent';

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  const {
    html,
    preloadedState,
  } = prepComponent(<Home />, reducer);

  res.render('pages/home', {
    html,
    preloadedState,
  });
});

export default {
  basePath: '/',
  router: router,
};
