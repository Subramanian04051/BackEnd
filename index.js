const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

// defining the Express app
const app = express();
// defining an array to work as the database (temporary solution)
const ads = [{
  Product_Details:[
  {Brand: 'Milkshake',
  Product_Name:"Subru Products",
  Location:"Tirunelveli"},
  {Brand: 'Biscuit',
  Product_Name:"Subbu Products",
  Location:"Madurai"}
],}
];

// adding Helmet to enhance your Rest API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// defining an endpoint to return all ads
const jsondata=JSON.stringify(ads)
const json=JSON.parse(jsondata)
console.log(json[0].Product_Details.length)

for(let i=0;i<json[0].Product_Details.length;i++)
{
  if(json[0].Product_Details[i].Location=="Tirunelveli")
  {
    console.log("Inside for loop")
    variable="tvl"
    app.get(`/${variable}`, (req, res) => {
    res.send(json[0].Product_Details[i]);
  });
}
  else{
    console.log("Inside else condition")
    variable="mdu"
    app.get(`/${variable}`, (req, res) => {
    res.send(json[0].Product_Details[i]);
  })
}

}
/*app.get('/title', (req, res) => {
  res.send(ads);
});*/

// starting the server
app.listen(3001, () => {
  console.log('listening on port 3001');
});