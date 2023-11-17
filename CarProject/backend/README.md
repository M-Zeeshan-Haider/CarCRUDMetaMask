## Installation

To install the required packages, use the following npm command:

```bash
npm install


After installing the packages, run the following command to start the project:

```bash
node app.js

Make sure to set up your email configuration before running the project. Follow these steps:

Go to the Ethereal website.
Click on "Create Ethereal Account."
Copy the generated username and password provided on the website.
Paste the username and password in the ./utils/transporter.js file:


const transporter = nodemailer.createTransport({
  auth: {
    user: 'your-ethereal-username', here only
    pass: 'your-ethereal-password', here only
  },
});

IN .env set
DB_URL to your own mongo url