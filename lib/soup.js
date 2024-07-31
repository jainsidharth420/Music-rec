const puppeteer = require('puppeteer');

async function getFirstTrackUrl(songName) {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    const searchUrl = `https://open.spotify.com/search/${encodeURIComponent(songName)}`;
    await page.goto(searchUrl, { waitUntil: 'networkidle2' });

    // Wait for the track elements to load
    await page.waitForSelector('a[href*="/track/"]', { timeout: 10000 });

    // Extract the first track URL
    const firstTrackUrl = await page.evaluate(() => {
        const link = document.querySelector('a[href*="/track/"]');
        return link ? link.href : null;
    });

    await browser.close();
    return firstTrackUrl;
}

// Example usage
const songName = "Attention Charlie Puth";
getFirstTrackUrl(songName).then(trackUrl => {
    if (trackUrl) {
        console.log('First track URL found:', trackUrl);
    } else {
        console.log('No track URL found.');
    }
}).catch(error => {
    console.error('Error fetching track URL:', error);
});
