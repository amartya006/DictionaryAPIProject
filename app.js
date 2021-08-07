const express = require('express');
const app = express();
const server = require('http').Server(app);
const indexRoutes = require("./routes/routes.js");
app.use(express.static("Assets"));

app.use(indexRoutes);

server.listen(process.env.PORT || 3000, function () {
    console.log("Server Started at Port 3000");
})