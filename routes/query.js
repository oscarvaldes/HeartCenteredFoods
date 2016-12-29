var express = require('express'),
    mysql = require('mysql'),
    fs = require('fs'),
    router = express.Router(),
    bodyParser = require('body-parser'),
    path = require('path'),
    moment = require('moment'),
    tableName,
    connection;
    var io = require('socket.io').listen(8080);

router.use(bodyParser.urlencoded({
  extended: true
}));


// Define our db creds
var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Blue$apph1re#2',
  database: 'agdb'
})

// Log any errors connected to the db
db.connect(function(err){
  if (!err) {
  console.log('Database is connected ... ');
  console.log("NODE_ENV : ", process.env.NODE_ENV);
} else {
  console.log('Error connecting database ... ');
}
})

var socketCount = 0

io.sockets.on('connection', function(socket){
    // Socket has connected, increase socket count
    socketCount++
    // Let all sockets know how many are connected
    io.sockets.emit('users connected', socketCount)

    socket.on('disconnect', function() {
        // Decrease the socket count on a disconnect, emit
        socketCount--
        io.sockets.emit('users connected', socketCount)
    })

    socket.on('query',function(sql){
      db.query(sql, function(err, rows, fields) {

      });//query
    })


})//connection



module.exports = router;
