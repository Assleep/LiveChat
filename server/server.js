var app = require("http").createServer();
var io = module.exports.io = require("socket.io")(app);

const PORT = process.env.PORT || 8080;

io.on("connection", function(socket){

	console.log("a user connected: " + (socket.id).toString().slice(0,5));

	socket.on('callDriver', (message) => {
		if(!message['person']){	
			io.emit('sendToDriver', message);
			console.log("message from me: " + message['title']);

		}else {
			io.emit('sendToDriver', message);
			console.log("message from your friend" + message['title']);
		}
	});
	socket.on('disconnect', () => {
		console.log('a user disconnected: ' + (socket.id).toString().slice(0,5));
	});
});

app.listen(PORT, () => {
	console.log("Connected to port:" + PORT);
});