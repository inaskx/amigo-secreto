<h1>Challenge Amigo Secreto</h1>

Este proyecto consiste en una aplicación sencilla hecha con **HTML, CSS y JavaScript**, cuyo objetivo es **generar una lista de nombres de amigos** y luego **sortear al azar el nombre del amigo secreto**.

Es un ejercicio práctico pensado para **fortalecer la lógica de programación** y trabajar con arrays, validaciones, manipulación del DOM y eventos en JavaScript.

---

## 🚀 Características

- Permite agregar nombres a la lista de amigos.
- Valida que los nombres:
  - No estén vacíos.
  - Contengan solo letras y espacios.
  - No se repitan en la lista.
- Muestra la lista de amigos en la pantalla.
- Sortea al azar un nombre como **amigo secreto**.
- Finaliza el juego después del sorteo:
  - Se bloquea el input y los botones.
  - Se muestra un mensaje con el resultado.

---

## 📂 Estructura del proyecto

```

📁 amigo-secreto
│── index.html      # Estructura principal del proyecto
│── style.css       # Estilos de la aplicación
│── app.js          # Lógica en JavaScript
│── assets/         # Imágenes y recursos

````

---

## 🛠️ Tecnologías utilizadas

- **HTML5** → estructura del proyecto.
- **CSS3** → diseño y estilos.
- **JavaScript** → lógica de programación y manipulación del DOM.

---

## 📜 Código principal (app.js)

```javascript
// Array donde guardaremos los nombres
let amigos = [];
let juegoFinalizado = false;

// Función para agregar amigos
function agregarAmigo() { ... }

// Función para mostrar la lista
function mostrarLista() { ... }

// Función para sortear el amigo secreto
function sortearAmigo() { ... }
````

---

## ▶️ Cómo usarlo

1. Clona este repositorio o descarga los archivos.
2. Abre el archivo **index.html** en tu navegador.
3. Ingresa los nombres de tus amigos en el campo de texto.
4. Haz clic en **"Añadir"** para agregarlos a la lista.
5. Presiona **"Sortear amigo"** para descubrir quién es el amigo secreto 🎉.

---

## 📌 Mejoras posibles

* Permitir reiniciar el juego sin recargar la página.
* Agregar un contador de sorteos realizados.
* Aplicar un diseño más interactivo con animaciones.
* Guardar los nombres en **localStorage** para mantener la lista al recargar.

---

## 📄 Licencia

Este proyecto es de uso libre con fines educativos y prácticos.
¡Úsalo para aprender, mejorar o inspirarte en tus propios proyectos!
