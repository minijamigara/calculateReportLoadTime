const loginAndNavigate = require('../base/baseTest');
const config = require('../config/config.json');

(async () => {
  // Use the reusable login function from baseTest.js
  const { browser, page } = await loginAndNavigate();

  // Navigate to the report URL
  await page.goto(config.reportUrl);

  // Start measuring time after navigation to the report page
  const startTime = new Date().getTime();

  // Wait for the table to load completely using the selector from the config
  await page.waitForSelector(config.reportTableSelector);

  // End measuring time after the report is fully loaded
  const endTime = new Date().getTime();
  const loadTime = endTime - startTime;

  console.log(`Report load time: ${loadTime} ms`);

  // Close the browser
  await browser.close();
})();
