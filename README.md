# ✅ VALIDACIÓN DE FORMULARIO - REQUISITOS TÉCNICOS

Implementa las funciones de validación para pasar los tests de Vitest.

- **Ejecutar pruebas:**

```bash
npm install
npm run test:start
```

## 🎯 OBJETIVOS DE VALIDACIÓN

### 1. validarEmail(email)

**Criterios de aprobación:**

- Debe contener el carácter `@`
- Debe incluir `.com` al final
- Longitud mínima de 6 caracteres

**Ejemplos válidos:**

```js
"a@b.com"; // Longitud mínima
"user@mail.com"; // Caso típico
```

**Ejemplos inválidos:**

```js
"user.com"; // Falta @
"user@mail"; // Falta .com
"a@b.c"; // Muy corto (5 caracteres)
```

---

### 2. validarPassword(password)

**Criterios de aprobación:**

- Longitud mínima de 8 caracteres

**Ejemplos válidos:**

```js
"12345678"; // Mínimo requerido
"securePass123"; // Caso típico
```

**Ejemplos inválidos:**

```js
""; // Vacío
"1234"; // Muy corto (4 caracteres)
```

---

## 🧪 ESTRATEGIA DE TESTING

Los tests verifican:

**Para emails:**

- [ ] Presencia de @
- [ ] Termina en .com
- [ ] Longitud >= 6

**Para contraseñas:**

- [ ] Longitud >= 8

---

## ✅ CHECKLIST DE IMPLEMENTACIÓN

Antes de testear:

- `validarEmail` retorna `false` si falta @
- `validarEmail` retorna `false` si falta .com
- `validarEmail` retorna `false` con menos de 6 caracteres
- `validarPassword` retorna `false` con menos de 8 caracteres
- Ambas funciones retornan `true` en casos válidos

---

⚠️ **Importante:**

- No modificar los nombres de las funciones
- Mantener el tipo de retorno `boolean`
- Usar comparaciones estrictas (`===`)

¡Con estas validaciones implementadas pasarás todos los tests! 🚀
