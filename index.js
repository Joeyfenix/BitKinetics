const express = require('express');
const app = express();
app.use(express.static('public'))


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})
app.get('/contacts', (req, res) => {
  res.sendFile(__dirname+'/contacts.html')
})
let port = process.env.PORT || 3000
app.listen(port, function () {
  console.log('Server started on port 3000')
})
