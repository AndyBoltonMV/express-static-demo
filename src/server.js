const express = require("express"); //import express package
//creating a web server from the express method's return value
const app = express();
// const port = 5000;

//adding functionality to our web server, using the use method
//and passing a route that this functionality is available on
//express.static is serving the contents of the ./public folder
app.use("/test", express.static("public"));

//allows app to listen on given port, so it can be queried
app.listen(5001, () => {
  console.log("Listening on port 5001");
});
