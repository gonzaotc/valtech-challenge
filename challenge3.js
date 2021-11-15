

//pasaron del juliano al gregoriano en 1918, cuando el dia siguiente al 31 de enero fue el 14 de febrero.
// Entonces, en 1918, el 14 de frebrero era el dia 32 del año en rusia. 

// 31/1/1918 ->  14/1/1998     en 1918 el 14feb era el dia 32 en rusia. 


function viajarEnElTiempo(año, dia) {

    function calcularDia(dia, calendario, año) {
        let contador = [0];
        while (dia > 0) {
            if (calendario[0] == 0) {
                calendario.shift(calendario[0]);
                contador.push(0);
            }
            dia--;
            calendario[0]--;
            contador[(contador.length) - 1]++;
        }
        return `${contador[(contador.length) - 1]}.${contador.length}.${año}`
    }

                   //[en, fe, ma, ab, ma, ju, ju, ag, se, oc, no, di]
    let calendario = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
                   // ---éste es el calendario de un año común.--- //

    
    if (año < 1918) {    // sistema juliano 
        if (año % 4 === 0) {     // si es año bisiesto juliano -> feb + 1
            calendario[1]++;
            console.log('año bisiesto juliano');
        }
    }
    else if (año > 1918) {    // sistema gregoriano
        if ((año % 400 === 0) || ((año % 4 === 0) && (año % 100 !== 0))) {
            calendario[1]++; // si es año bisiesto gregoriano -> feb + 1
            console.log('año bisiesto gregoriano');
        }
    }
    return calcularDia(dia, calendario, año);
}

        // Documentación para la facilitación de la lectura: //
// Mi algoritmo se basa en determinar el calendario exacto del año pasado por 
// parametro e irle restando los días mientras los voy agregando al contador (arreglo).
// Cuando hay un cambio de mes, lo agrego a mi contador e inicio su primer día. 
// Por lo tanto, el valor del último elemento de mi arreglo contador es el día buscado, y su length es el mes.
// Una buena analogía para mi solución sería: cada día que pasa, lo tacho en el almanaque. 
// Mi arreglo contador serían los días tachados y el arreglo calendario serian los días aún sin tachar. 
