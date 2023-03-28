import calculadora from "./calculadora.js";

describe("Calcular Sumar", () => {
  it("deberia retornar 0 con cadena vacia", () => {
    expect(calculadora("")).toEqual(0);
  });
  it("deberia retornar 1 ", () => {
    expect(calculadora("1")).toEqual(1);
  });


});
