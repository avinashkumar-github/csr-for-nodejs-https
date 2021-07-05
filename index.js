const https = require("https");
const fs = require("fs");

const headers = {
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem")
};

const callBack = (req, res) => {
  res.writeHead(200);
  res.end("Welcome page!!");
};

const server = https.createServer(headers, callBack);
server.listen(3000);
