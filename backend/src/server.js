const express = require('express');
const path = require('path'); // Necesario para resolver rutas de archivos
const app = express();
const port = 3000;

// Middleware para manejar datos en formato JSON
app.use(express.json());

// Servir archivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, '../../frontend')));

// Ruta para manejar la solicitud de reserva de turnos
app.post('/turnos', (req, res) => {
  const { fecha, hora } = req.body;

  // Aquí deberíamos verificar la disponibilidad del turno y almacenarlo en una base de datos.
  console.log(`Turno solicitado: ${fecha} a las ${hora}`);

  // Por ahora, respondemos con éxito.
  res.status(200).json({ message: 'Turno reservado exitosamente' });
});

// Levantar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
