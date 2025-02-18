const axios = require('axios');
// const puppeteer = require('puppeteer');

const API_KEY = 'a17823c4227abec75162681afd7b2374';
const API_URL = 'https://ws.audioscrobbler.com/2.0/';
const API_KEY_2 = 'AIzaSyClJlTrcAXLqOWh9jrbE__SGKrVmzIRTqA'; // Replace with your actual API key


const findTrackId = async (songName) => {
  return new Promise((resolve, reject) => {
    let trackId = null;

    fs.createReadStream('../public/dataset.csv')
      .pipe(csv())
      .on('data', (row) => {
        if (row.track_name === songName) {
          trackId = row.track_id;
        }
      })
      .on('end', () => {
        resolve(trackId);
      })
      .on('error', (error) => {
        reject(error);
      });
  });
};

const getTrackInfo = async (artist, track) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        method: 'track.getInfo',
        api_key: API_KEY,
        artist,
        track,
        format: 'json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching track info:', error);
    throw error;
  }
};

const getSimilarTracks = async (artist, track) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        method: 'track.getSimilar',
        api_key: API_KEY,
        artist,
        track,
        format: 'json',
      },
    });
   


    return response.data;
  } catch (error) {
    console.error('Error fetching similar tracks:', error);
    throw error;
  }
};

module.exports = {
  getTrackInfo,
  getSimilarTracks,
  findTrackId

}
