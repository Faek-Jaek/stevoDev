const express = require('express');
const app = express();
const port = 80;
const AWS = require('aws-sdk');
const s3 = new AWS.S3();

// Function to serve files from the S3 bucket
function serveFileFromS3(bucketName, key, contentType, res) {
  const params = {
    Bucket: bucketName,
    Key: key,
  };

  s3.getObject(params, (err, data) => {
    if (err) {
      console.error(err);
      res.status(404).send('File not found');
      return;
    }

    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data.Body);
  });
}
function uploadUserDataToS3(bucketName, key, userData, res) {
  // Convert the userData object to a JSON string
  const userDataJSON = JSON.stringify(userData);

  // Set the content type to JSON
  const contentType = 'application/json';

  const params = {
    Bucket: bucketName,
    Key: key,
    Body: userDataJSON,
    ContentType: contentType,
  };

  s3.upload(params, (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Failed to upload data to S3');
      return;
    }

    // Provide a successful response to the client
    res.status(200).send('Data uploaded to S3 successfully');
  });
}
// Serve your files from S3 on default req
app.get('', (req, res) => {
  serveFileFromS3('stevo-web-files', 'home/home.html', 'text/html', res);
})
// Serve /home/* files from S3
app.get('/home/*', (req, res) => {
  // Determine the requested file type based on the URL path
  let fileType;
  if (req.url.endsWith('.html')) {
    fileType = 'text/html';
  } else if (req.url.endsWith('.css')) {
    fileType = 'text/css';
  } else if (req.url.endsWith('.js')) {
    fileType = 'application/javascript';
  } else {
    res.status(404).send('File not found');
    return;
  }

  // Serve the file from S3
  const s3Key = req.url.slice(1,req.url.length);
  serveFileFromS3('stevo-web-files', s3Key, fileType, res);
});

// Serve /login/* files from S3
app.get('/login/*', (req, res) => {
  // Determine the requested file type based on the URL path
  let fileType;
  if (req.url.endsWith('.html')) {
    fileType = 'text/html';
  } else if (req.url.endsWith('.css')) {
    fileType = 'text/css';
  } else if (req.url.endsWith('.js')) {
    fileType = 'application/javascript';
  } else {
    res.status(404).send('File not found');
    return;
  }

  // Serve the file from S3
  const s3Key = req.url.slice(1,req.url.length);
  serveFileFromS3('stevo-web-files', s3Key, fileType, res);
});

// Serve /register/* files from S3
app.get('/register/*', (req, res) => {
  // Determine the requested file type based on the URL path
  let fileType;
  if (req.url.includes('.html')) {
    fileType = 'text/html';
  } else if (req.url.includes('.css')) {
    fileType = 'text/css';
  } else if (req.url.includes('.js')) {
    fileType = 'application/javascript';
  } else {
    res.status(404).send('File not found');
    return;
  }
  let s3Key ={};
  if (req.url.includes('?')) {
    s3Key = req.url.slice(1,req.url.indexOf('?'));
  }
  else {
    s3Key = req.url.slice(1,req.url.length);
  }
  // Serve the file from S3
  
  serveFileFromS3('stevo-web-files', s3Key, fileType, res);
});

// Serve /404Page/* files from S3
app.get('/404Page/*', (req, res) => {
  // Determine the requested file type based on the URL path
  let fileType;
  if (req.url.endsWith('.html')) {
    fileType = 'text/html';
  } else if (req.url.endsWith('.css')) {
    fileType = 'text/css';
  } else if (req.url.endsWith('.js')) {
    fileType = 'application/javascript';
  } else {
    res.status(404).send('File not found');
    return;
  }

  // Serve the file from S3
  const s3Key = req.url.slice(1,req.url.length);
  serveFileFromS3('stevo-web-files', s3Key, fileType, res);
});

app.get('/static/icons/*', (req, res) => {
  serveFileFromS3('stevo-web-files', req.url.slice(1,req.url.length), 'image/png', res);
});

app.get('/static/logos/*', (req, res) => {
  serveFileFromS3('stevo-web-files', req.url.slice(1,req.url.length), 'image/png', res);
});

app.get('/static/backgrounds/*', (req, res) => {
  serveFileFromS3('stevo-web-files', req.url.slice(1,req.url.length), 'image/png', res);
});
app.get('*', (req, res) =>{
  serveFileFromS3('stevo-web-files', '404Page/404.html', 'text/html', res);
});





app.use(express.json());

app.post('/user', (req, res) => {
  // Access the parsed JSON data from the request body
  const userData = req.body;
  // Now you can process the userData object as needed
  console.log(userData);
  
  let s3Key = userData.email;
  console.log('s3 key: '+s3Key);
  uploadUserDataToS3('stevo-user-data', s3Key, userData, res)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

