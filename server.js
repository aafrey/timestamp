const express = require('express')
const app = express()
const dateParser = require('./date-parser')

app.use(express.static('public'))

app.get('/',(req, res) => res.sendFile(__dirname + '/views/index.html'))

app.get('/:date', (req, res) => {
  let date = dateParser(req)
  res.send(date)
})


const listener = app.listen(process.env.PORT, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});

