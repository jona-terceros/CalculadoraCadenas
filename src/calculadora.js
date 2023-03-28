function calculadora(cadena) {
    if(tamanoCadena(cadena)==0)
    {
      return 0;
    }
    else{
        
        if(tamanoCadena(cadena) > 1){

            if(cadena[0]=="/")
            {
                return calcularConDelimitador(cadena);
            }
            else{
                return calcularConSeparadores(cadena);
            }
           
        }
        else{
            return parseInt(cadena);
        }
     }
}
function calcularConDelimitador(cadena) {

    const cadenas = cadena.split(" ");
    const delimitador = cadenas[0][3];
    const numerosSeparados = splitStringByTokens(cadenas[1], [",", "-", "*", "%", delimitador]);
    const numerosConvertidos = conversion(numerosSeparados);
    return sumar(numerosConvertidos);
  }
  
  function calcularConSeparadores(cadena) {
    const numerosSeparados = cadena.split(/,|-/);
    const numerosConvertidos = conversion(numerosSeparados);
    return sumar(numerosConvertidos);
   
  }
function sumar(numeros){
    let suma = 0;
    for (let i = 0 ; i < numeros.length; i++){
      suma = suma + numeros[i];
    } 
    return suma;
}
function conversion(cadena){
    let nuevaCadena = [];
    for (let i = 0 ; i < cadena.length; i++){
      nuevaCadena[i] = parseInt(cadena[i]);
    } 
    return nuevaCadena;
}
function splitStringByTokens(str, tokens) {
    var separator = tokens[0];
    for (var i = 1; i < tokens.length; i++) {
      str = str.split(tokens[i]).join(separator  );
    }
    str = str.split(separator);
    return str;
  }
function tamanoCadena(cadena){
    return cadena.length;
}

  export default calculadora;