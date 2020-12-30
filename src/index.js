const axios = require("axios");

/**
@param {String} id - The id of the radio station
@returns {Object} Returns Details about the Radio Station
*/
async function get(id) {
  try {
    const details = await axios.get(`https://radio.garden/api/ara/content/channel/${id}`);
    return details.data;
  } catch (error) {
    console.error(error);
  }
}

/**
@param {String} query - The id of the radio station
@returns {Array} Returns Details about the Radio Station
*/
async function search(query) {
  try {
    const details = await axios.get(`https://radio.garden/api/search?q=${query}`);
    return (details.data.hits.hits).filter(station => station._source.type == "channel");
  } catch (error) {
    console.error(error);
  }
}


module.exports = { get, search };