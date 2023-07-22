document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores de los campos del formulario
    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('correo').value;
    var celular = document.getElementById('celular').value;
    var asunto = document.getElementById('asunto').value;
    var mensaje = document.getElementById('mensaje').value;

    // Aquí puedes agregar la lógica para enviar el correo, puedes usar una API o un servicio de correo

    // Mostrar el mensaje de éxito
    document.getElementById('success-msg').style.display = 'block';

    // Limpiar los campos del formulario
    document.getElementById('nombre').value = '';
    document.getElementById('correo').value = '';
    document.getElementById('celular').value = '';
    document.getElementById('asunto').value = '';
    document.getElementById('mensaje').value = '';
  });