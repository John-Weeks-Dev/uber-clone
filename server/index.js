const express = require('express')
const app = express()
const axios = require('axios')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()
const port = process.env.PORT || 4001

axios.defaults.baseURL = process.env.GOOGLE_MAPS_API_URL

app.use(bodyParser.json())
app.use(cors())

app.get('/api/address/:address', async (req, res) => {
    try {
      if (req.params.address === 'null') return res.status(200).json('');

        let data = await axios.get(
            'place/autocomplete/json' + 
            '?input=' + req.params.address + 
            '&types=address' + 
            '&key=' + process.env.GOOGLE_MAPS_API_KEY
        )

        res.status(200).json(data.data.predictions);
      } catch (err) {
        console.log(err)
      }
})

app.get('/api/distance/:pickup/:destination', async (req, res) => {
    try {
        let data = await axios.get(
            'distancematrix/json' + 
            '?origins=' + req.params.pickup + 
            '&destinations=' + req.params.destination + 
            '&units=imperial' + 
            '&key=' + process.env.GOOGLE_MAPS_API_KEY
        )

        res.status(200).json(data.data);
      } catch (err) {
        console.log(err)
      }
})

// Listen to the server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
