import puppeteer from 'puppeteer';

export async function POST(request) {
  try {
    // Parse the request JSON body
    const { songName } = await request.json();
    
    // Check if the song name is provided
    if (!songName) {
      return new Response(JSON.stringify({ error: 'Song name is required' }), { status: 400 });
    }
    
    // Launch Puppeteer and scrape data
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    
    // Navigate to Spotify search with the provided song name
    const searchUrl = `https://open.spotify.com/search/${encodeURIComponent(songName)}`;
    await page.goto(searchUrl, { waitUntil: 'networkidle2' });

    // Wait for track elements to load
    await page.waitForSelector('a[href*="/track/"]', { timeout: 10000 });

    // Extract the first track URL
    const firstTrackUrl = await page.evaluate(() => {
      const link = document.querySelector('a[href*="/track/"]');
      return link ? link.href : null;
    });

    await browser.close();
    
    // Return the first track URL
    return new Response(JSON.stringify({ firstTrackUrl }), { status: 200 });
  } catch (error) {
    console.error('Error scraping data:', error);
    return new Response(JSON.stringify({ error: 'Error scraping data' }), { status: 500 });
  }
}
