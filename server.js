import express from 'express'
import http from 'http'

import logger from 'morgan'
import  mainRouter from './app/routers/router'
import mongoose  from 'mongoose'
import cors from 'cors'

const uri = "mongodb+srv://sirius:sirius@cluster0.llza0.mongodb.net/links?retryWrites=true&w=majority"
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true  },  () => {
	console.log("[MONGODB] connect")
})

// const corsOptions = {
// 	origin: ['*', 'http://localhost:3000'],
// 	optionsSuccessStatus: 200,
// 	credentials: true // some legacy browsers (IE11, various SmartTVs) choke on 204
//   }

const app = express();

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});
 
app.use(logger('dev'));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: true}));
app.use(express.static( 'public'));
app.use(mainRouter);

const server = http.createServer(app);


server.listen(3000, '0.0.0.0',async ()=>{
	console.log("[SERVER] start")
});