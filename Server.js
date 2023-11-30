require('dotenv').config();
const dbcon = require('./public/DbConnection');
dbcon.connect();

const ExpressApp = require('./App');

const Server = ExpressApp.app.listen(process.env.PORT,process.env.HOSTNAME,function(){ // Listen to client requests in hostname:port
    console.log(`Server Running on ${process.env.HOSTNAME}:${process.env.PORT}...`);
});

//dbcon.disconnect();