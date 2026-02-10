// Variables
let editando = false;

// Funciones
function transformarEnEditable(caller) {
    if (editando) {
        alert('Solo se puede editar una linea, cancele o recargue la pagina para poder editar otra');
        return;
    }

    editando = true;

    // Recuperamos la fila mas cercana de donde se ha llamado el editar
    const fila = caller.closest('tr');

    // Ponemos a la fila el id de editando para luego recuperarla
    fila.id = 'editando';

    // Estilizamos la fila
    caller.style.color = 'gray';
    caller.innerText = 'En edicion';

    // Transformamos el texto de la fila en inputs
    const namesInput = ['alimento', 'calorias', 'grasas', 'proteina', 'carbohidratos']
    const celdas = [...fila.children];
    celdas.pop();   // Quitamos el ultimo que es el boton de editar
    celdas.forEach((celda, index) => {
        contenidoNodoAInputText(celda, namesInput[index]);
    });

    // Recuperamos el contenedor donde poner los botones y metemos los botones
    const contenedor = document.getElementById('contenedorForm');

    const accionesHtml =
        `<p>Pulse Aceptar para guardar los cambios o cancelar para anularlos</p>
        <button class="btn" onclick="enviar()">Aceptar</button>
        <button class="btn" onclick="cancelar()">Cancelar</button>`;

    contenedor.innerHTML = accionesHtml;
}

function contenidoNodoAInputText(nodo, name) {
    if (nodo.children.length === 0) {
        // Creamos el input
        const input = document.createElement('input');
        input.type = 'text';
        input.value = nodo.textContent;
        input.name = name;

        // Vaciamos el contenido del nodo
        nodo.textContent = '';

        // Añadimos el input al nodo
        nodo.appendChild(input);
    }
}

// Botones
function enviar() {
    // Contenido de la fila editada
    const filaEditada = document.getElementById('editando');
    const celdasEditadas = [...filaEditada.children];
    celdasEditadas.pop();
    const inputsEditados = celdasEditadas.map((celda) => celda.getElementsByTagName('input')[0]);

    // Formulario oculto
    const form = document.createElement('form');
    form.style.display = 'none';
    form.id = 'envio';
    form.action = 'envio.php';
    form.method = 'get';

    inputsEditados.forEach((inputEditado) => {
        const inputEnvio = document.createElement("input");
        inputEnvio.type = 'hidden';
        inputEnvio.name = inputEditado.name;
        inputEnvio.value = inputEditado.value;
        form.appendChild(inputEnvio);
    });

    document.body.appendChild(form);

    form.submit();
}

function cancelar() {
    window.location.reload();
}