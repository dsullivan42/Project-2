
const fetch = require('node-fetch');
const router = require('express').Router();
const { Movie } = require('../../models');
const userSearch = 'Jaws'
const url = 'https://movie-database-alternative.p.rapidapi.com/?s='+userSearch+'&r=json&page=1';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '930796b621mshe52735eaff3a7a7p1b11abjsn95e68619975b',
    'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
  }
};

async function fetchData() {
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

fetchData();
module.exports = Movie;

