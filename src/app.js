import express from 'express';
import peliculasRouter from './routes/peliculas.routes.js';

const app = express();

app.use(express.json());
app.use('/api/', peliculasRouter)


app.use((req, res) => {
  res.status(404).json({ message: 'No existe el endpoint' });
});

export default app;
