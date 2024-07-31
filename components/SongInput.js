import React, { useState } from 'react';
import axios from 'axios';
import { ReactTyped } from "react-typed";
import GradientText from './GradientText'; 
import GradientText2 from './GradientText2';
import GradientText3 from './GradientText3';
import GradientText4 from './GradientText4';
import GradientText5 from './GradientText5';
import BasicExample from './loader';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

import { useInView } from 'react-intersection-observer';

const { getTrackInfo, getSimilarTracks } = require('../lib/lastfmService');

const API_KEY = 'a17823c4227abec75162681afd7b2374';
const API_URL = 'https://ws.audioscrobbler.com/2.0/';


const SongInput = () => {
  const [search, setSearch] = useState('');
  const [artist, setArtist] = useState(''); 
  const [songs, setSongs] = useState([]); 
  const [ok, setOk] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjust this value to control when the animation starts
  });

  const fetchRec = async (song, artist) => {
    try {

      const trackInfo = await getTrackInfo(artist, song);
      console.log('Track Info:', trackInfo);
      
      const similarTracksResponse = await getSimilarTracks(artist, song);
      const similarTracks = similarTracksResponse.similartracks.track;
      const twenty = [];
      for (let i = 0; i < 10; i++) {
        twenty.push(similarTracks[i]);
      }
      console.log('Similar Tracks:', twenty);
  
      const songsspotify = await Promise.all(
         twenty.map(async (track) => {
          const response = await axios.post('/api/scrape', { songName: track.name });
          const { firstTrackUrl } = response.data;
          console.log('First Track URL:', firstTrackUrl);
  
          return {
            name: track.name, 
            artist: track.artist.name,
            link: firstTrackUrl // Use the URL fetched from the API
          }
        })
      );

        twenty.forEach((track, index) => {
        console.log(`${index + 1}. ${track.name} by ${track.artist}`);

      });
      return songsspotify;
      
    } catch (error) {
      console.error('Error fetching similar tracks:', error);
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSongs([]); // Empty the song list
      setOk(true);
      const records = await fetchRec(search, artist);
      setSongs(records);
      setSearch('');
      setArtist('');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '100vh',
        width: '100%',
        backgroundColor: "#121212",
        
      }}
    >
      <h1 style={{ fontSize: '3em', marginTop: '20px' }}>
        <GradientText5
      
        text = "MUSIQA"
        />
        </h1>

        <h5 style={{fontSize: '1em', marginTop: '0px' }}>
        <GradientText4
      
        text = "MORE OF WHAT YOU LOVE"
        />
        </h5>
      <div 
        style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '30vh',
        textAlign: 'center', 
        }}
        >
        <ReactTyped 
        strings={["Explore over 1 million songs to find your next tracks based on what you already like."]} 
        typeSpeed={40} 
        style={{ fontSize: '1.2em', maxWidth: '800px', color:'white' }} 
        />
        </div>
      <div style={{ display: 'flex', 
        width: '100%', 
        maxWidth: '1200px', 
        justifyContent: 'space-between', 
        backgroundColor: "#33333380", 
        borderRadius: '20px',
        margin: "50px" }}>
        <form
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '45%',
            borderRadius: '5px',
            padding: '50px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          }}
        >
          <input
            type="text"
            placeholder="Search for a song"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              padding: '10px',
              fontSize: '18px',
              width: '100%',
              borderRadius: '5px',
              border: '2px solid #ccc',
              backgroundColor: 'white',
              color: 'black',
              marginBottom: '10px',
              backgroundColor: 'rgba(0, 0, 0, 0.1)',
              color: 'white', 
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.9)',
            }}
          />
          <input
            type="text"
            placeholder="Artist Name"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            style={{
              padding: '10px',
              fontSize: '18px',
              width: '100%',
              borderRadius: '5px',
              border: '2px solid #ccc',
              backgroundColor: 'white',
              color: 'black',
              marginBottom: '10px',
              backgroundColor: 'rgba(0, 0, 0, 0.1)',
              color: 'white', 

              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          />
          <button
            type="submit"
            style={{
              padding: '10px',
              fontSize: '18px',
              borderRadius: '10px',
              border: 'none',
              backgroundColor: '#333333', // A very dark grey
              color: 'white',
              cursor: 'pointer',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'background-color 0.3s ease',
              width: '100%',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = 'grey')}
            onMouseOut={(e) => (e.target.style.backgroundColor = 'grey')}
          >
            Search

          </button>
        </form>
        <div
        style={{
            width: '45%',
            borderRadius: '20px',
            height: '400px', 
            overflowY: 'auto', 
            padding: '20px',
            
        }}
        >
        {songs.length > 0 ? (
            <div
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '15px', 
            }}
        >
        {songs.map((song, index) => (
            <div
            key={index}
            style={{
                width: 'calc(50% - 15px)', // Adjust width and spacing
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
            }}
            >
          { (
          <iframe
          style={{ borderRadius: '20px' }}
          src={`https://open.spotify.com/embed/track/${song.link.split('/').pop()}`}
          width="100%"
          height="402"
          frameBorder="0"
          allowFullScreen=""
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          ></iframe>      )}
          </div>
        ))}
      </div>
    ) : (
      ok ? (
        <div>
        <p style={{ textAlign: 'center' , fontSize: '3em', fontWeight: 'bold'}}>
          <GradientText3
          text = "Looking For Potential Matches" />
          <BasicExample/>
          </p>
          </div>
      ) : (
        <div>
      <p style={{ 
        textAlign: 'center', 
        fontSize: '3em', 
        fontWeight: 'bold',  
      }}>
        <GradientText2
        text = "Search for a song."
        />
      </p> 
      <p style={{ textAlign: 'center', fontSize: '1.2em', fontweight: 'bold'}}>

      <GradientText
        text="MUSIQA takes the song and splits it into 15 vector attributes and gives you the next 15 nearest songs based on cosine similarity in the music vector space."
      />      
      </p>
        </div>   )

      )}
    </div>
    </div>
    </div>
  );
};

export default SongInput;