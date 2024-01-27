const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;


let usedUrls = [];


app.use(bodyParser.json());


app.get('/kshitiz', (req, res) => {
  
  const tiktokUrls = [
    'https://www.tiktok.com/@lyricseditvibe3/video/7270731761695378690?is_from_webapp=1&sender_device=pc',
    'https://www.tiktok.com/@lyricseditvibe3/video/7279389430413151490?is_from_webapp=1&sender_device=pc',
    
  ];

  
  const availableUrls = tiktokUrls.filter(url => !usedUrls.includes(url));

  if (availableUrls.length === 0) {
    
    usedUrls = [];
  } else {
   
    const randomUrl = availableUrls[Math.floor(Math.random() * availableUrls.length)];

   
    usedUrls.push(randomUrl);

    
    res.json({ url: randomUrl });
  }
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
