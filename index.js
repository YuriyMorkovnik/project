const express = require('express');


const server = express();
server.listen(8080);

server.use(express.static('public'));
