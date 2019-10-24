const express = require('express');
//for parsing JSON and url-encoded data
const bodyParser = require('body-parser');
const cors = require('cors')

const PORT= 3000;
const api = require('./routes/api');
const app = express();

// for parsing application/json
app.use(bodyParser.json());
app.use(cors());

app.use('/api', api);
app.get('/', function(req, res){
res.send('Hello from the server');
});

app.listen(PORT, function(){
    console.log('Server running on localhost:' + PORT)
})