// 1 - Avistaje de pájaros.


// array -> avistajes de cada variable, identificadas por id. 
// que variable tiene mayor frecuencia. 
// si coincide, devolver el id de menor falor. 


function pajarosMigratorios(n, vistos) {   
    let tipos = Math.max(...vistos); // id máximo de pájaro visto. 
    let counter = Array(tipos + 1).fill(0);
    for (let i = 0; i < n; i++) {
        counter[vistos[i]]++;
    }
    return counter.indexOf(Math.max(...counter));
    // devuelvo la primer coincidencia (menor id) que tenga el máx de avistajes.
}

console.log(pajarosMigratorios(11, [1,2,3,4,5,4,3,2,1,3,4]));
