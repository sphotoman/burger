var mysql = require("mysql");
// var connection = mysql.createConnection({
// 	host: "localhost",
// 	user: "root",
// 	password: "1234",
// 	database: "burgers_db"
// });
var connection;

if (process.env.JAWSBD_URL) {
	connection = mysql.createConnection(process.env.JAWSBD_URL);
} else {
	connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '1234',
		database: 'burgers_db'

	});
};

connection.connect()

// connection.connect(function(err){
// 	if (err) {
// 		console.log("error connecting" + err.stack);
// 		return;
// 	}
// 	console.log("connected as id " +  connection.threadId);
// });

module.exports =  connection;