const { getTrackInfo, getSimilarTracks } = require('./lastfmService');

const testLastfmService = async () => {
  const artist = 'The Kid LAROI';
  const track = 'NIGHTS LIKE THIS';

  try {
    const trackInfo = await getTrackInfo(artist, track);
    console.log('Track Info:', trackInfo);

    const similarTracksResponse = await getSimilarTracks(artist, track);
    const similarTracks = similarTracksResponse.similartracks.track;

    console.log('Recommended Songs:');
    index = 0
    
    for (let i = 0; i < 20; i++) {
        const track = similarTracks[i];
        console.log(`${i + 1}. ${track.name} by ${track.artist.name}`);
    }
    // similarTracks.forEach((track, index) => {
    //     console.log(index)
    //     if (index == 20) {
    //         return;
    //     }
    //   console.log(`${index + 1}. ${track.name} by ${track.artist.name}`);
    // });
  } catch (error) {
    console.error('Error testing Last.fm service:', error);
  }
};

testLastfmService();
