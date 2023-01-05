const express = require('express')
const bodyParser =require('body-parser') 
const app =express() 
const port = 3000
app.use(express.static('../library'))
var mysql=require('mysql')
app.engine('pug', require('pug').__express)

app.use(bodyParser.urlencoded({extended: false}))

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "demo",
    connectionLimit: 10
})

app.set('view engine', 'pug')


app.get('/', function (req, res) {

res.sendFile('index.html', { root: __dirname })
});

connection.connect(function(err){ if (err) throw err;
    console.log('Connected..');})

app.post('/submit', function (req, res) { console.log(req.body);
    console.log(req.body);
    var sql="insert into user_details(username,email,phone,age,gender) values('"+req.body.name +"','"+req.body.email +"','"+req.body.phone +"','"+req.body.age +"','"+req.body.gender +"')"
    connection.query(sql, function (err) {
    if (err) throw err
        res.send("success")
    })
})

app.post('/update', function (req, res) { console.log(req.body);
    console.log(req.body);
    var sql="UPDATE user_details SET "+req.body.al_field+" = "+req.body.al_value+ " WHERE username='"+req.body.al_name+"';"
    connection.query(sql, function (err) {
    if (err) throw err
        res.send("success")
    })
})

app.post('/delete', function (req, res) { console.log(req.body);
    console.log(req.body);
    var sql="delete from user_details WHERE username='"+req.body.del_name+"';"
    connection.query(sql, function (err) {
    if (err) throw err
        res.send("success")
    })
})

app.post('/Search', function (req, res) { console.log(req.body);
    console.log(req.body);
    var sql="select * from user_details WHERE username='"+req.body.sea_name+"';"
    connection.query(sql, function (err,result) {
    if (err) throw err
        res.send(result)
    })
})

app.post('/display', function (req, res) { console.log(req.body);
    console.log(req.body);
    var sql="select * from user_details;"
    connection.query(sql, function (err,result1) {
    if (err) throw err
        res.send(result1)
    })
})



app.listen(port, () => console.log('Example app listening on port 3000'))