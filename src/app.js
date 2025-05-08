import express from 'express';
import peliculasRouter from './routes/peliculas.routes.js'
//import { createPeliculas, getPeliculas, getPeliculasByid, updatePeliculas, deletePeliculas } from './controllers/peliculas.controller.js';

const app = express();

// Middleware to parse JSON
app.use(express.json());
app.use('/api/', peliculasRouter)

app.use((req, res, next) => {
  res.status(404).json({
    message:'No existe el endpoint'
  })
})

export default app