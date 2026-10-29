const { sumar, restar, dividir } = require("../src/calculadora");

test("sumar", () => {
  expect(sumar(2, 3)).toBe(5);
});

test("restar", () => {
  expect(restar(5, 3)).toBe(2);
});

test("dividir", () => {
  expect(dividir(10, 2)).toBe(5);
});

test("dividir por cero lanza error", () => {
  expect(() => dividir(1, 0)).toThrow("No se puede dividir por cero");
});
