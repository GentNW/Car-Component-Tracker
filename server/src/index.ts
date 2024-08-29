import express from 'express'
import UserRoutes from './Routes/UserRoutes'
import ComponentRoutes from './Routes/ComponentRoutes'
import CarRoutes from './Routes/CarRoutes'


const app = express();

app.use(express.json())

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
