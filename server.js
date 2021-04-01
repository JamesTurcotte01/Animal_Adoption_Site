const express = require("express");
const app = express();
const cors = require("cors");
const port = 8000;


// This will fire our mongoose.connect statement to initialize our database connection
require("./server/config/mongoose.config");

app.use(cors());

app.use(express.json(), express.urlencoded({ extended: true }));

// This is where we import the animals routes function from our user.routes.js file
const AllMyAuthorRoutes = require("./server/routes/animal.routes");
AllMyAuthorRoutes(app);

const server = app.listen(8000, () =>
    console.log('The server is all fired up on port 8000')
);

const io = require('socket.io')(server, { cors: true });
io.on("connection", socket =>{
    socket.on("onDeleteHandler", data => {
        socket.broadcast.emit("navigate"("/"), data);
    });
    console.log(socket.id);
});
