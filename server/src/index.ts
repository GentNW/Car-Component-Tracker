import express from 'express'
import AuthRoutes from './Routes/AuthRoutes'
import UserRoutes from './Routes/UserRoutes'
import ComponentRoutes from './Routes/ComponentRoutes'
import CarRoutes from './Routes/CarRoutes'
import ErrorHandler from './Middleware/ErrorHandler'
import path from 'path'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { corsOption } from './Config/CorsOptions'
const app = express();

//Adding express json
app.use(express.json())

app.use(cookieParser()) //Using cookie parser
app.use(cors(corsOption)) // Using cors for api access

//Adding routes
app.use('/api',AuthRoutes)
app.use('/api',UserRoutes)
app.use('/api',CarRoutes)
app.use('/api',ComponentRoutes)



const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello, TypeScript with MERN!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

//Catching all (error handling mostly)
app.all('*',(req,res) => {

  //Handling a not found error
  res.status(404)
  if(req.accepts('html')) //Checks HTML file's acceptability
  {
      res.sendFile(path.join(__dirname, 'views', '404.html'))
  } 
  else if(req.accepts('json')) //Checks json file's acceptability
  {
      res.json({ message : "404 Not Found"})
  } 
  else
  {
      res.type('txt').send('404 Not Found')
  }
})

app.use(ErrorHandler)
