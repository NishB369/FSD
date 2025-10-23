// all imports
const express = require("express");
const socket = require("socket.io");
const http = require("http");
const { Chess } = require("chess.js");
const path = require("path");

// express app
const app = express();

// http server linked to app and io for socket
const server = http.createServer(app);
const io = socket(server);

// Chess class object initialisation
const chess = new Chess();

// Variables Initialisation
let players = {};
let currentPlayer = "w";

// This tells your Express app which template engine to use for rendering dynamic HTML pages.
app.set("view engine", "ejs");
// This serves static files (like CSS, JavaScript, images, fonts) from /public
app.use(express.static(path.join(__dirname, "public")));

// main route - render index.js
app.get("/", (req, res) => {
  res.render("index");
});

// whenever connection is made to server
// no log as no config in frontend part
io.on("connection", (uniqueSocket) => {
  console.log("Connected");

  if (!players.white) {
    players.white = uniqueSocket.id;
    uniqueSocket.emit("playerRole", "w");
  } else if (!players.black) {
    players.black = uniqueSocket.id;
    uniqueSocket.emit("playerRole", "b");
  } else {
    uniqueSocket.emit("spectatorRole");
  }

  uniqueSocket.on("disconnect", () => {
    if (uniqueSocket.id == players.white) {
      delete players.white;
    } else if (uniqueSocket.id == players.black) {
      delete players.black;
    }
  });

  uniqueSocket.on("move", (move) => {
    try {
      if (chess.turn() == "w" && uniqueSocket.id !== players.white) return;
      if (chess.turn() == "b" && uniqueSocket.id !== players.black) return;

      const result = chess.move(move);

      if (result) {
        currentPlayer = chess.turn();
        io.emit("move", move);
        io.emit("boardState", chess.fen());
      } else {
        console.log("Invalid Move: ", move);
        uniqueSocket.emit("invalidMove", move);
      }
    } catch (error) {
      console.error(error);
      uniqueSocket.emit("invalidMove", move);
    }
  });
});

server.listen(3000, () => {
  console.log("Server Running at Port : 3000");
});
