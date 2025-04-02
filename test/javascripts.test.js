import { describe, expect, it } from "vitest";
import { validarEmail, validarPassword } from "../src/validation";

describe("Pruebas de validación", () => {
  describe("validarEmail", () => {
    it("Retorna true para un correo con @, .com y longitud adecuada", () => {
      expect(validarEmail("usuario@ejemplo.com")).toBe(true);
    });

    it("Retorna false si falta el @", () => {
      expect(validarEmail("usuarioejemplo.com")).toBe(false);
    });

    it("Retorna false si falta .com", () => {
      expect(validarEmail("usuario@ejemplo.net")).toBe(false);
    });

    it("Retorna false si el correo es muy corto (menos de 6 caracteres)", () => {
      expect(validarEmail("a@b.c")).toBe(false);
    });
  });

  describe("validarPassword", () => {
    it("Retorna true para una contraseña con 8 o más caracteres", () => {
      expect(validarPassword("contraseñaSegura")).toBe(true);
    });

    it("Retorna false para una contraseña con menos de 8 caracteres", () => {
      expect(validarPassword("abc123")).toBe(false);
    });
  });
});
