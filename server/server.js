var app = require("http").createServer();
var io = module.exports.io = require("socket.io")(app);

const PORT = process.env.PORT || 8080;

io.on("connection", function(socket){

	console.log("a user connected: " + (socket.id).toString().slice(0,5));

	socket.on('callDriver', (message) => {

		io.emit('sendToDriver', message);
	});
	socket.on('disconnect', () => {

		console.log('a user disconnected: ' + (socket.id).toString().slice(0,5));
	});
});

app.listen(PORT, () => {
	
	console.log("Connected to port:" + PORT);
});