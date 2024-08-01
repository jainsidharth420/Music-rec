// next.config.mjs
import puppeteer from 'puppeteer';

export default {
  webpack(config, { isServer }) {
    // Handle Puppeteer in server-side code
    if (isServer) {
      config.externals = [...config.externals, 'puppeteer'];
    }

    return config;
  },
};
