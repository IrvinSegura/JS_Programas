function esPalindromo(palabra) {
  var alReves = palabra.split("").reverse().join("");
  if (palabra === alReves) {
    return true;
  } 
  else{
    return false;
  }
}
