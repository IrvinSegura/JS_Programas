function NumeroParImpar(n) {
    return n % 2 === 0;
}
const num = 10;
if (NumeroParImpar(num)) {
    console.log(`${num} es un número par`);
} else {
    console.log(`${num} es un número impar`);
}