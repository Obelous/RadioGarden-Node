const axios = require("axios");

/**
@param {String} query The search query
@returns {Array} Returns search results
*/
async function search(query) {
  try {
    const req = (await axios.get(`https://radio.garden/api/search?q=${query}`)).data;
    return (req.hits.hits).filter(station => station._source.type == "channel");
  } catch (error) {
    console.error(error);
  }
}

/**
@param {String} id - The id of the radio station
@returns {Object} Returns Details about the Radio Station
*/
async function getStation(id) {
  try {
    const req = (await axios.get(`https://radio.garden/api/ara/content/channel/${id}`)).data;
    return req.data;
  } catch (error) {
    console.error(error);
  }
}

/**
@returns {Array} Returns places
*/
async function getPlaces() {
  try {
    const req = (await axios.get(`http://radio.garden/api/ara/content/places`)).data;
    return req.data.list;
  } catch (error) {
    console.error(error);
  }
}

/**
@returns {Object} Returns Geographical information about Requester
*/
async function getGeo() {
  try {
    const req = (await axios.get(`http://radio.garden/api/geo`)).data;
    return req;
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  getStation, 
  getPlaces,
  getGeo,
  search
};