function ObtenerElemento
    (a, n) {
    return a[n];
}

const arr = [10, 20, 30, 40, 50];
const index = 2;
const element = ObtenerElemento(arr, index);
console.log(element);