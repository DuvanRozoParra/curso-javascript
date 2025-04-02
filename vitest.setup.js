import { beforeEach } from "vitest";
import fs from "fs";
import path from "path";

// Ruta al archivo HTML (ajusta según tu estructura)
const htmlPath = path.resolve(__dirname, "index.html");
const html = fs.readFileSync(htmlPath, "utf-8");

// Cargar HTML antes de cada prueba
beforeEach(() => {
  document.body.innerHTML = html;
});
