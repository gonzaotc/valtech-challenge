function redondearNota(arreglo) {
    return arreglo.map((nota) => {
        let sigMultiplo = (Math.trunc(nota / 5) + 1) * 5;
        return (nota < 38 || sigMultiplo - nota >= 3) ? nota : sigMultiplo;
    })
}