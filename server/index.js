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
// Use an exact origin because your frontend sends credentials
const CLIENT_URL = 'https://flipkart-clone-frontend-five.vercel.app';

const corsOptions = {
  origin: CLIENT_URL,              // exact origin (do NOT use '*')
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  credentials: true,               // allow cookies/credentials
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept']
};

// Apply CORS globally
app.use(cors(corsOptions));
// Respond to preflight requests
app.options('*', cors(corsOptions));

// Extra safety: set the headers manually for EVERY response
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', CLIENT_URL);
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE,OPTIONS');
    return res.sendStatus(200);
  }
  next();
});

app.use(bodyParser.json());
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
// app.listen(PORT,()=>{
//   console.log(  "Server is running succesfully on port 8000");
// })
// DefaultData();
// Only call DefaultData() locally if you want to seed DB — be careful in production.
// DefaultData(); // uncomment only for local/dev seeding

// Export app so Vercel (serverless) can call it as a handler.
// Do NOT call app.listen() in Vercel serverless functions.
export default app;

// When running locally (development), run with node-local.js or create a small file to call app.listen()
// Example local runner (not for Vercel):
// if (process.env.NODE_ENV !== 'production') {
//   const PORT = process.env.PORT || 8000;
//   app.listen(PORT, () => console.log(`Server running on ${PORT}`));
// }

