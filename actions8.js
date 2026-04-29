let galeria = document.getElementById("paginas");
let anteriorBTN = document.getElementById("anteriorBTN");
let siguienteBTN = document.getElementById("siguienteBTN");

let numeros = [
    "./comic8/1_joss.jpg",
    "./comic8/2_joss.jpg", 
    "./comic8/3_joss.jpg", 
  
];


let i = 0;

function segundaPagina(){
    anteriorBTN.disabled = false;
    i++;
    galeria.src = numeros[i];
    if (i == numeros.length-1){
    siguienteBTN.disabled = true;
}
}
function anteriorPagina(){
    siguienteBTN.disabled = false;
    i--;
    galeria.src = numeros[i];
    if(i == 0){
        anteriorBTN.disabled = true;
        siguienteBTN.disabled = false;
    }
}