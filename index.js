
const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()
const port = 9000

var obj = {
    "name": "Eren Jaeger",
    "email": "tatakae@gmail.com",
    "phone": "9146757639",
    "role": "CEO",
    "performance": 0.99,
    "salary": 100000
}


//start server at port 9000
app.listen(port, () => console.log(`Server listening on port ${port}`))
app.use(express.static(path.join(__dirname, '../frontend/')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/Employee', (req, res) => {
  fs.readFile('./employee.json', (err, data) => {
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

app.get('/AddEmployee', (req, res) => {
    fs.readFile('./employee.json', (err, data) => {
        if(!err) {
            var updated = JSON.parse(data)
            updated.push(obj)
            fs.writeFile('./employee.json', JSON.stringify(updated, null, 2), (err) => {
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