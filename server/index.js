import express from 'express'
import dotenv from 'dotenv'
import connection from './database/db.js';
import DefaultData from './default.js'
import cors from 'cors';
import bodyParser from 'body-parser';
import Routes from './routes/route.js'


const app=express();
// const clientBuildPath = process.env.CLIENT_BUILD_PATH || '../../client/build';
dotenv.config();
app.use(cors(
   {
    origin : ["https://flipkart-clone-frontend-five.vercel.app"],
     methods :["POST","GET"],
     credentials:true
   }
));
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',Routes);
// app.use(express.static(path.join(__dirname, 'clientBuildPath')));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
// });

const PORT=8000;
const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;
connection(USERNAME,PASSWORD);
app.listen(PORT,()=>{
  console.log(  "Server is running succesfully on port 8000");
})
DefaultData();

