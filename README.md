# Playwright Report Load Testing

This project uses Playwright for end-to-end testing of report load times in a web application. It includes tests for:
- Measuring the initial report load time.
- Measuring the time to load table data after clicking the "Generate" button.

## Project Structure

- `/config`: Contains configuration files, including URLs, credentials, and selectors.
- `/base`: Contains the base test file for browser launch, login, and close.
- `/tests`: Contains test scripts for measuring report load times.
- `package.json`: npm project metadata.

## Setup

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd <repository-directory>
2. **Install Dependencies**
   npm install
3. **Update config/config.json** <br>
    loginPageUrl: URL of the login page.<br>
    reportUrl: URL of the report page.<br>
    username: Your login username.<br>
    password: Your login password.<br>
    reportTableSelector: CSS selector for the report table element.<br>
Example -<br>
{<br>
  "loginPageUrl": "https://example.com/login",<br>
  "reportUrl": "https://example.com/report",<br>
  "username": "your-username",<br>
  "password": "your-password",<br>
  "reportTableSelector": "#report-table",<br>
  "generateButtonSelector": "#generate"<br>
}
4. **To execute the tests, use the Playwright Test Runner. You can run all the test files in the tests directory**
   node tests/reportLoadTest.js
5. **Test results**
   Test results will be logged to the console. The reportLoad.test.js will log the initial report load time


### Explanation:
- **Project Description**: Briefly describes the purpose of the project.
- **Project Structure**: Outlines the directory structure and its contents.
- **Setup**: Instructions on how to clone the repository and install dependencies.
- **Configuration**: Details on how to configure the project by updating the `config.json` file.
- **Running Tests**: Instructions on how to run the tests using the Playwright Test Runner.
- **Test Results**: Information on where to find test results.
- **Contributing**: Information for contributors.

