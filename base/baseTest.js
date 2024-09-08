const { chromium } = require('playwright');
const config = require('../config/config.json');

async function loginAndNavigate() {
  // Launch the browser with SSL error handling disabled
  const browser = await chromium.launch({ headless: false, args: ['--ignore-certificate-errors'] });
  const context = await browser.newContext({
    ignoreHTTPSErrors: true  // Bypass SSL errors
  });
  const page = await context.newPage();

  // Navigate to the login page
  await page.goto(config.loginPageUrl);

  // Perform login using credentials from config
  await page.fill('input[name="txtUsername"]', config.username);
  await page.fill('input[name="txtPassword"]', config.password);
  await page.click('button[type="submit"]');  // Adjust the selector as needed

  // Wait for navigation after login
  await page.waitForNavigation();

  // Return the browser and page objects for further actions
  return { browser, page };
}

module.exports = loginAndNavigate;
