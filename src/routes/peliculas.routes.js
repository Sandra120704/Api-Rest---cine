import { Router } from 'express';
import {
  getPeliculas,
  getPeliculasByid,
  createPeliculas,
  updatePeliculas,
  deletePeliculas
} from '../controllers/peliculas.controller.js';

const router = Router();

router.get('/peliculas', getPeliculas)
router.get('/peliculas/:id', getPeliculasByid)
router.post('/peliculas', createPeliculas)
router.put('/peliculas', updatePeliculas)
router.delete('/peliculas', deletePeliculas)

export default router;
