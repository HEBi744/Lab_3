const express = require('express')
const bodyParser = require("body-parser");
const app = express()
const port = 3000

const courses = require('./routes/courses.js');
const results = require('./routes/results.js');
app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/courses/', courses.getAll );

// создаем парсер для данных application/x-www-form-urlencoded
const urlencodedParser = bodyParser.urlencoded({extended: false});
app.post('/results/', urlencodedParser, results.postNew );


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
