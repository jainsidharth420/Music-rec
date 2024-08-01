import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';
import { NextResponse } from 'next/server';

const datasetPath = path.resolve('./public/dataset.csv');

const findTrackId = (songName, artist) => {
  return new Promise((resolve, reject) => {
    let trackId = null;

    fs.createReadStream(datasetPath)
      .pipe(csv())
      .on('data', (row) => {
        if (row.track_name === songName && row.artists === artist) {
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

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const songName = searchParams.get('songName');
  const artist = searchParams.get('artist'); // Extract artist from searchParams

  if (!songName || !artist) {
    return NextResponse.json({ error: 'Song name is required' }, { status: 400 });
  }

  try {
    const trackId = await findTrackId(songName, artist); // Pass both songName and artist

    if (trackId) {
      return NextResponse.json({ trackId });
    } else {
      return 
    }
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
