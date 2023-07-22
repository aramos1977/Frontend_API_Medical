class CitaAPI{
    async crearCita(){
        const id_cita=parseInt(document.getElementById("id_cita").value);
        const fecha =Date.parse(document.getElementById("fecha").value);
        const pacienteCedula=parseInt(document.getElementById("pacienteCedula").value);
        const medicoTarjetaProfesional=parseInt(document.getElementById("medicoTarjetaProfesional").value);


        
        const datos={
            id_cita:id_cita,
            fecha:fecha,
            pacienteCedula:pacienteCedula,
            medicoTarjetaProfesional:medicoTarjetaProfesional
        };

        await fetch(
            'http://localhost:8080/citas/crear_cita',
            {
                method:"POST",
                body:JSON.stringify(datos),
                headers:{
                    "Content-Type":"application/json" 
                }

            }
        );

        console.log("El registro se guardó correctamente");
    }

    async listarCitas(){

        let citas= await fetch('http://localhost:8080/citas');
        citas= await citas.json();
    
        const miTabla=document.getElementById("tabla_citas");
    
        citas.forEach(
            (cita)=>{
                const fila= miTabla.insertRow();
                fila.insertCell().innerText=cita.id_cita;
                fila.insertCell().innerText=cita.fecha;
                fila.insertCell().innerText=cita.pacienteCedula;
                fila.insertCell().innerText=cita.medicoTarjetaProfesional;
            }
        );
    }
}

export default CitaAPI;