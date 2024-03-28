const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const cors = require("cors"); 

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is running!"); 
});

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });

  socket.on("message", (data) => {
    io.emit("message", data); 
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
