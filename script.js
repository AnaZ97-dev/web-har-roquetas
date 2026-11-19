// Alumna: Ana Zafra Vallejo

function funcion_carga_inicial() {
    // 2.1 Crear párrafo dinámico al cargar
    const contenedor = document.getElementById("mensaje-bienvenida");
    if (contenedor) {
        const parrafo = document.createElement("p");
        const texto = document.createTextNode("Bienvenido al sistema de salud de Roquetas.");
        parrafo.appendChild(texto);
        
        parrafo.style.margin = "20px 100px";
        parrafo.style.textAlign = "center";
        parrafo.style.backgroundColor = "#e0f7fa";
        parrafo.style.padding = "10px";
        parrafo.style.borderRadius = "10px";
        contenedor.appendChild(parrafo);
    }

    // 2.2 Cambiar título de Horario
    const tituloH = document.querySelector("#titulo-horario");
    if (tituloH) {
        tituloH.textContent = "Horario de atención al público";
        tituloH.style.color = "white";
        tituloH.style.backgroundColor = "#005a8d";
    }

    // 2.3 Eliminar elemento de la lista al hacer clic
    const lista = document.getElementById("lista-servicios");
    if (lista) {
        lista.onclick = function() {
            const elementos = lista.querySelectorAll("li");
            if (elementos.length > 0) {
                const ultimo = elementos[elementos.length - 1];
                lista.removeChild(ultimo);
            }
        };
    }
}

window.onload = funcion_carga_inicial;