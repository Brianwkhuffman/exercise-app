const express = require('express');
const axios = require("axios");
const nutritionRouter = express.Router();
let fcdId;
const foodSearchEndpoint = `https://api.nal.usda.gov/fdc/v1/search?api_key=${process.env.API_KEY}`;
const foodDetailsEndpoint = `https://api.nal.usda.gov/fdc/v1/${fcdId}?api_key=${process.env.API_KEY}`


nutritionRouter.route("/")
  .get((req, res) => {
    return axios({
      // method: 'get',
      // url: foodDetailsEndpoint,
      // headers: { 
      //   "Content-Type": "application/json"
      // }
      method: 'post',
      url: foodSearchEndpoint,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        "generalSearchInput": req.body.data,
        "includeDataTypes": {
          "Survey (FNDDS)": true,
        }
      }
    }).then((response) => {
      return res.json(response.data)
    })
  })
  .post((req, res) => {
    return axios({
      method: 'post',
      url: foodSearchEndpoint,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        "generalSearchInput": req.body.data,
        "includeDataTypes": {
          "Survey (FNDDS)": true,
        }
      }
    }).then((response) => {
      return res.json(response.data);
    })
  });

nutritionRouter.route("/:id")
  .get((req, res) => {
    return axios({
      method: 'get',
      url: `https://api.nal.usda.gov/fdc/v1/${req.params.id}?api_key=${process.env.API_KEY}`,
      headers: {
        "Content-Type": "application/json",
      }
    }).then((response) => {
      return res.json(response.data)
    })
  })

module.exports = nutritionRouter