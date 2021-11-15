function pajarosMigratorios(n, vistos) {   
    let tipos = Math.max(...vistos); // id máximo de pájaro visto. 
    let counter = Array(tipos + 1).fill(0);
    for (let i = 0; i < n; i++) {
        counter[vistos[i]]++;
    }
    return counter.indexOf(Math.max(...counter));
    // devuelvo la primer coincidencia (menor id) que tenga el máx de avistajes.
}

