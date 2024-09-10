const datos = document.getElementById("inputText")
const boton = document.getElementById("buttonText")
const input = localStorage.getItem("input");


boton.addEventListener('click', function enviarDato(){

    const datosNuevos = datos.value.trim();

    if(datosNuevos !== ""){

        const datosConvertidos = String(datosNuevos);
        localStorage.setItem("input", datosConvertidos);
        datos.value = "";
        
    }
});

console.log(input);

