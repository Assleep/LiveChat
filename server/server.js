var app = require("http").createServer();
var io = module.exports.io = require("socket.io")(app);
var db = require("mysql");
var pool = db.createPool({
	connectionLimit: 200,
	host: 'localhost',
	user: 'admin',
	password: '238226',
	database: 'users',
	debug: false
});

const PORT = process.env.PORT || 8080;

io.on("connection", function(socket){
	var id = (socket.id).toString().slice(0, 5);
	console.log("a user connected: " + id);
	pool.query('insert into chat(id) values(?)', id, (error, rows) =>{
		if(error) throw error;
	});
	socket.on('callDriver', (message) => {
		io.emit('sendToDriver', message);
	});
	socket.on('disconnect', () => {
		console.log('a user disconnected: ' + id);
		pool.query('delete chat from chat where chat.id=?', id, (error) => {
			if(error) throw error;
		});
	});
});

app.listen(PORT, () => {
	console.log("Connected to port:" + PORT);
});