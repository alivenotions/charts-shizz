const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')

const dataJSON = {
  "Sapphire": 0.10110812727361917,
  "Ruby": 97.38210439682007,
  "Square": 94.52970027923584,
  "WhiteGoldRing": 99.98904466629028,
  "RoundBrilliant": 80.41327595710754,
  "Diamond": 13.671603798866272,
  "Shoulder": 23.574328422546387
}
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(express.static(__dirname + '/public'))

app.get('/upload', (req, res) => {
  
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

app.post('/upload', (req, res) => {
  setTimeout(() => res.status(200).json(dataJSON), 5000)
})

// {
//   dataJSON: {
//   "Sapphire": 0.10110812727361917,
//   "Ruby": 97.38210439682007,
//   "Square": 94.52970027923584,
//   "WhiteGoldRing": 99.98904466629028,
//   "RoundBrilliant": 80.41327595710754,
//   "Diamond": 13.671603798866272,
//   "Shoulder": 23.574328422546387
//   }
// }

app.listen(9099, () => {console.log('server running on 9099')})