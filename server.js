
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/dist/smd'));

app.get('/*', function(req,res) {

  res.sendFile(path.join(__dirname+'/dist/index.html'));
});
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 7776,()=>{
  console.log('server running on port 7776')
});
