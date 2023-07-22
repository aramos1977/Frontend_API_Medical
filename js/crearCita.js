// Importamos la clase CitaAPI desde el archivo CitaAPI.js
import CitaAPI from "./CitaAPI.js";

// Creamos una instancia de la clase CitaAPI
const miCita = new CitaAPI();

// Obtenemos el botón con el id "btnProcesar"
const miBoton = document.getElementById("btnProcesar");

// Agregamos un evento 'click' al botón
miBoton.addEventListener('click', async (event) => {
    event.preventDefault(); // Prevenir el comportamiento por defecto del botón
    miBoton.disabled = true; // Deshabilitar el botón mientras se procesa la cita
    await miCita.crearCita(); // Llamamos al método crearCita() de la instancia miCita
    miBoton.disabled = false; // Habilitar el botón después de procesar la cita
});
