document.getElementById('turnoForm').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;
  
    const turno = { fecha, hora };
  
    try {
      const response = await fetch('http://localhost:3000/turnos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(turno),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert('Turno reservado correctamente.');
      } else {
        alert('Error al reservar el turno: ' + data.message);
      }
    } catch (error) {
      console.error('Error al conectar con el servidor:', error);
    }
  });
  