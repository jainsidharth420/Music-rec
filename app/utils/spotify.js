// utils/spotify.js
export const fetchSpotifyProfile = async (token) => {
    const response = await fetch('https://api.spotify.com/v1/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      return response.json();
    }
    throw new Error('Failed to fetch Spotify profile');
  };
  