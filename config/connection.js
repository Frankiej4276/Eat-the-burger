var mysql = require("mysql");

var connection;

connection = mysql.createConnection({

    port: 3080,
    host: "localhost",
    user: "root",
    password: "yeet",
    database: "burgers_db"

connection.connect(function(err) {
  if (err) {
    console.log("error");
    return;
  }
  console.log("Connected to MySQL database as id" + connection.threadId);
});
module.exports = connection;