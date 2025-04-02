/*
    Aqui se encuentran las funciones que tenes que modificar para lograr pasar
    la prueba.
*/
export function validarEmail(email) {
  const tieneArroba = email.includes("@");
  const tienePuntoCom = email.includes(".com");
  const longitudMinima = email.length >= 6;
  return tieneArroba && tienePuntoCom && longitudMinima;
}

export function validarPassword(password) {
  return password.length >= 8;
}
