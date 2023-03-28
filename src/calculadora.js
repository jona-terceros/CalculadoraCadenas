function calculadora(cadena) {
    if(tamanoCadena(cadena)==0)
    {
      return 0;
    }
    else{
        
        if(tamanoCadena(cadena) > 1){

            if(cadena[0]=="/")
            {
                let cadenas = cadena.split(" ");
                let delimitador = cadenas[0][3];
                let cadenaNumeros = conversion(splitStringByTokens(cadenas[1], [',', '-','*','%', delimitador]));
                return sumar(cadenaNumeros);
            }
            else{
                let cadenaNumeros = conversion(cadena.split(/,|-/));
                return sumar(cadenaNumeros);
            }
           
        }
        else{
            return parseInt(cadena);
        }
     }
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