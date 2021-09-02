'use strict'

// Interseccion y union
function InterseccionUnion(caja1, caja2) {
    
    let caja2Set = new Set(caja2);

    if (caja2Set != 0) {
        var intersection = Array.from(new Set(caja1.filter(filtro => caja2Set.has(filtro))));
        var union = Array.from(new Set(caja1.concat(caja2)));
        union.sort(function(a, b){return a-b});

    }else{
        var intersection = "[]";
        var union = Array.from(new Set(caja1.concat(caja2)));
        union.sort(function(a, b){return a-b});

    }
    
    document.write("<h2>Ejercicio 1</h2>");
    document.write(intersection,", ",union);
    
    return (intersection,union);
}

InterseccionUnion([4,3,6,7,8],[4,2,5,9]);



// Buscar nombre en un array
function FindName(names, find) {
    
    let find_name = names.findIndex(name => name == find);

    
    if (find_name != -1) {
        document.write("<hr>");
        document.write("<h2>Ejercicio 2</h2>");
        document.write(find_name);
    }else{
        document.write("<hr>");
        document.write("<h2>Ejercicio 2</h2>");
        document.write(-1);
    }
    
}

FindName(["Jimmy","Layla","Maria","Bob"], ["Bob"]);



// Buscar el numero unico
function NumUnique(listas) {
    
    let numdiferente = Array.from(new Set(listas.filter(unico => listas.indexOf(unico) === listas.lastIndexOf(unico))));
    let ubicanum = listas.findIndex(unico => listas.indexOf(unico) === listas.lastIndexOf(unico));
    
    if (numdiferente >= 0 && ubicanum > -1) {
        document.write("<hr>");
        document.write("<h2>Ejercicio 3</h2>");
        document.write(numdiferente,", ", ubicanum);

    }else{
        document.write("<hr>");
        document.write("<h2>Ejercicio 3</h2>");
        document.write("[]");
    }
    
}


NumUnique([1,1,1,1,1,0,1,1]);


