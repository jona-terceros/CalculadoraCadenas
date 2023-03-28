import calculadora from "./calculadora.js";

describe("Calcular Sumar", () => {
  it("deberia retornar 0 con cadena vacia", () => {
    expect(calculadora("")).toEqual(0);
  });
  it("deberia retornar 1 ", () => {
    expect(calculadora("1")).toEqual(1);
  });
  it("deberia retornar 5 ", () => {
    expect(calculadora("3,2")).toEqual(5);
  });
  it("deberia retornar 10", () => {
    expect(calculadora("3,2,1,4")).toEqual(10);
  });
  it("deberia sumar con el guion como separador", () => {
    expect(calculadora("3-2-6")).toEqual(11);
  });

  it("deberia especificar el separador", () => {
    expect(calculadora("//[;] 6;7;4")).toEqual(17);
  });

});
