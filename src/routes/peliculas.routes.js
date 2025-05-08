import {Router} from "express"
import { createPeliculas, deletePeliculas, getPeliculas, getPeliculasByid, updatePeliculas } from "../controllers/peliculas.controller.js"

const router = Router()

//verbos..
//APIREST = verbos 
router.get('/peliculas',  getPeliculas)
router.get('/peliculas/:id', getPeliculasByid)
router.post('/peliculas',  createPeliculas)
router.put('/peliculas',  updatePeliculas)  
router.delete('/peliculas', deletePeliculas)  

export default router