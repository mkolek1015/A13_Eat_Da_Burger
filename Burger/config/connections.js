// Set up mySQL 
var mysql = require("mysql");

if (process.env.??????) {
  connection = mysql.createConnection(process.env.?????)
} else {
  var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Everly412",
    database: "burgers_db"
  });
};

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;