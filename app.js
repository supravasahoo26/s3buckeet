const express = require('express');
const app = express();
const s3Routes = require('./routes/s3Routes');

// Middleware to parse JSON requests
app.use(express.json());

// Use S3 routes
app.use('/s3', s3Routes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
