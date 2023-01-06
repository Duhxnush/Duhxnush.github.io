
const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()
const port = 9000
const bodyParser =require('body-parser') 
app.use(bodyParser.urlencoded({extended: false}))

app.post('/update', function (req, res) { console.log(req.body);
    var state=req.body.rstate
    var year1=parseInt(req.body.year1)
    var year2=parseInt(req.body.year2)
    var year3=parseInt(req.body.year3)

    var obj = {
        "States":state,
        "year1": year1,
        "year2": year2,
        "year3": year3
     
}

fs.readFile('./forestfires.json', (err, data) => {
    if(!err) {
        var updated = JSON.parse(data)
        updated.push(obj)
        fs.writeFile('./forestfires.json', JSON.stringify(updated, null, 2), (err) => {
            if(!err) {
                console.log("File Write Successful")
            }
            else {
                console.log(err)
            }
        })
    }
})
})


app.use(express.static('public'));

//start server at port 9000
app.listen(port, () => console.log(`Server listening on port ${port}`))
app.use(express.static(path.join(__dirname, '../frontend/')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/View', (req, res) => {
  fs.readFile('./forestfires.json', (err, data) => {
      if(!err) {
          res.write(data)
          res.end()
          return
      }
      res.write("Error reading Employee.json file")
      res.end()
      console.log("Error reading Employee.json file")
  })
})


app.get('/AddForests', (req, res) => {
    fs.readFile('./forestfires.json', (err, data) => {
        if(!err) {
            var updated = JSON.parse(data)
            updated.push(obj)
            fs.writeFile('./forestfires.json', JSON.stringify(updated, null, 2), (err) => {
                if(!err) {
                    console.log("File Write Successful")
                }
                else {
                    console.log(err)
                }
            })
        }
    })
    res.statusCode=302
    res.setHeader('Location','/')
    return res.end()
})