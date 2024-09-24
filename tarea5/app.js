function xHorizontal(){
    let cadena = "";
    for(let i = 0; i <=4; i ++){
        cadena += "X";
    }
    console.log(cadena);
}

xHorizontal();

function xVertical(){
    let cadena = "";
    for(let i = 0; i <=4; i ++){
        cadena += "X\n";
    }
    console.log(cadena);
}

xVertical();

function tablaMultiplicar(){
    for(let i = 0; i <= 10; i++){
        console.log("Tabla del " +i);
        for(let j = 0; j <= 10; j++){
            console.log(i + "X" + j + "=" + i*j);
        }
    }
}

tablaMultiplicar();

function arregloFrutas(){
    let frutas = ["Manzana", "Pera", "Platano", "Piña", "Uva"];
    let contador = "";
    frutas.forEach(fruta => {
        contador ++;
        console.log(contador + ", " + fruta);
    });
}

arregloFrutas();