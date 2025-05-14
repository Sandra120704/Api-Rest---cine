import { pool } from "../db.js";

export const getPeliculas = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM peliculas");
  res.json(rows);
};

export const getPeliculasByid = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM peliculas WHERE id = ?", [req.params.id]);

  if (rows.length <= 0) {
    return res.status(404).json({ message: 'No existe película con ese ID' });
  }

  res.json(rows[0]);
};

export const createPeliculas = async (req, res) => {
  const { titulo, duracionmin, clasificacion, alanzamiento } = req.body;

   if (!titulo || !duracionmin || !clasificacion || !alanzamiento) {
    return res.status(400).json({ message: 'Faltan datos obligatorios' });
  }

  const [result] = await pool.query(
    "INSERT INTO peliculas (titulo, duracionmin, clasificacion, alanzamiento) VALUES (?, ?, ?, ?)",
    [titulo, duracionmin, clasificacion, alanzamiento]
  );

 res.json({
    id: result.insertId,
    titulo,
    duracionmin,
    clasificacion,
    alanzamiento
  });
};

export const updatePeliculas = async (req, res) => {
  const { id } = req.params.id;
  const { titulo, duracionmin, clasificacion, alanzamiento } = req.body;

  const [pelicula] = await pool.query("SELECT * FROM peliculas WHERE id = ?", [id]);

  if (pelicula.length === 0) {
    return res.status(404).json({ message: 'ID no encontrado' });
  }

  const [result] = await pool.query(
    "UPDATE peliculas SET titulo = ?, duracionmin = ?, clasificacion = ?, alanzamiento = ? WHERE id = ?",
    [titulo, duracionmin, clasificacion, alanzamiento, id]
  );

  if (result.affectedRows === 0) {
    return res.status(404).json({ message: 'ID no encontrado' });
  }

  res.json({ message: 'Película actualizada correctamente' });
};

export const deletePeliculas = async (req, res) => {
  const {id} = req.params;

  const [pelicula] = await pool.query("SELECT * FROM peliculas WHERE id = ?", [id]);
  if (pelicula.length === 0) {
    return res.status(404).json({ message: 'ID no encontrado' });
  }

  const [result] = await pool.query("DELETE FROM peliculas WHERE id = ?", [req.params.id]);

  if (result.affectedRows === 0) {
    return res.status(404).json({ message: 'No existe película con ese ID' });
  }

  res.sendStatus(204);
};
