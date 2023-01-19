const d = document
// esta función edita el parrafo con el id edit-about.

function editP() {
    event.preventDefault();
    d.getElementById('edit-about').style.display = 'block';
    d.getElementById('text-about').innerText
}
// esta funcion muestra como se veria el texto que se quiere ingresar.
function textResult(value) {
    d.getElementById('text-about').innerText = value
}

let textarea = d.getElementById('text-about');
// esta función toma los valores que se ingresan en text-about 
// si se presiona la tecla 'Enter' el input se oculta.
textarea = addEventListener('keyup', (e) => {
    if (e.key == 'Enter') {
        d.getElementById('edit-about').style.display = 'none';
    }
});

