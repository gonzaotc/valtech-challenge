console.time('cuanto tarda');
const arreglo = Array(1000000);

for (let i = 0; i < arreglo.length; i++) {
    arreglo[i] = i;
}
 
console.timeEnd('cuanto tarda');
