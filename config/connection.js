// Set up MySQL connection.
var mysql = require("mysql");
require("dotenv").config();


if(process.env.JAWSDB_URL) {
  // Heroku MySQL (JawsDB)
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  // Local MySQL
  connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.MYSQL_PASS,
    database: "cat_db"
  });
}


// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
