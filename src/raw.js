
let express = require('express');
let app     = express();

app.post('/raw', (req, res) => {

  // output the headers
  console.log(req.headers);

  // capture the encoded form data
  req.on('data', (data) => {
    console.log(data.length);
  });

  // send a response when finished reading
  // the encoded form data
  req.on('end', () => {
    console.log('ok');
    res.send('ok');
  });
});


app.listen(9000);