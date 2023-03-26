function eliminarElementoArray(a, b) {
    return a.filter(function(elemento) {
    return elemento !== b;
});
}

const arr = [2, 4, 6, 8, 10];
const value = 6;
const filtrarArray = eliminarElementoArray(arr, value);
console.log(filtrarArray);