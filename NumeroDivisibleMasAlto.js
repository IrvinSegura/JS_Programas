function NumeroDivisibleMasAlto(x, y) {
    if (x % y === 0) {
        return x;
    } else {
        return Math.ceil(x / y) * y;
    }
}