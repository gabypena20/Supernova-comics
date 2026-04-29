let galeria = document.getElementById("paginas");
let anteriorBTN = document.getElementById("anteriorBTN");
let siguienteBTN = document.getElementById("siguienteBTN");

let numeros = [
    "./comic2/Laucomic1.jpg",
    "./comic2/Laucomic2.jpg", 
    "./comic2/Laucomic3.jpg", 
    "./comic2/Laucomic4.jpg",     
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