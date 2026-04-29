let galeria = document.getElementById("paginas");
let anteriorBTN = document.getElementById("anteriorBTN");
let siguienteBTN = document.getElementById("siguienteBTN");

let numeros = [
    "./comic7/COMIC ELI_1.jpg",
    "./comic7/COMIC ELI_2.jpg",
    "./comic7/COMIC ELI_3.jpg",
    "./comic7/COMIC ELI_4.jpg", 
    "./comic7/COMIC ELI_5.jpg",  
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