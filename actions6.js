let galeria = document.getElementById("paginas");
let anteriorBTN = document.getElementById("anteriorBTN");
let siguienteBTN = document.getElementById("siguienteBTN");

let numeros = [
    "./comic6/David1.jpg",
    "./comic6/David2.jpg", 
    "./comic6/David3.jpg", 
    "./comic6/David4.jpg", 
    "./comic6/David5.jpg",
    "./comic6/David6.jpg", 
    "./comic6/David7.jpg",     
    "./comic6/David8.jpg", 
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