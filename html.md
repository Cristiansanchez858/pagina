# Guía Completa de HTML5

## Índice
1. [Introducción a HTML5](#introducción-a-html5)
2. [Estructura Básica](#estructura-básica)
3. [Elementos de Metadatos](#elementos-de-metadatos)
4. [Elementos de Sección](#elementos-de-sección)
5. [Elementos de Contenido de Texto](#elementos-de-contenido-de-texto)
6. [Elementos en Línea](#elementos-en-línea)
7. [Elementos de Formulario](#elementos-de-formulario)
8. [Elementos Multimedia](#elementos-multimedia)
9. [Elementos de Tabla](#elementos-de-tabla)
10. [Elementos Interactivos](#elementos-interactivos)
11. [Atributos Globales](#atributos-globales)

---

## Introducción a HTML5

**HTML5** (HyperText Markup Language 5) es la quinta versión del lenguaje de marcado estándar para crear páginas web. Introduce nuevas etiquetas semánticas, APIs y mejoras en multimedia.

### ¿Qué es un elemento HTML?
Un elemento HTML consiste en una etiqueta de apertura, contenido y una etiqueta de cierre:
```html
<etiqueta>contenido</etiqueta>
```

### Elementos vacíos
Algunos elementos no tienen contenido ni etiqueta de cierre:
```html
<img src="imagen.jpg" alt="descripción">
<br>
<hr>
```

---

## Estructura Básica

### `<!DOCTYPE html>`
Declara que el documento es HTML5. Debe ser la primera línea del documento.
```html
<!DOCTYPE html>
```

### `<html>`
Elemento raíz que contiene todo el documento HTML.
```html
<html lang="es">
  <!-- contenido -->
</html>
```

### `<head>`
Contiene metadatos sobre el documento (no visible en la página).
```html
<head>
  <meta charset="UTF-8">
  <title>Título de la página</title>
</head>
```

### `<body>`
Contiene todo el contenido visible de la página web.
```html
<body>
  <h1>Bienvenido</h1>
  <p>Este es el contenido visible.</p>
</body>
```

---

## Elementos de Metadatos

### `<title>`
Define el título de la página (aparece en la pestaña del navegador).
```html
<title>Mi Sitio Web</title>
```

### `<meta>`
Proporciona metadatos sobre el documento HTML.
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Descripción de la página">
<meta name="keywords" content="HTML, CSS, JavaScript">
<meta name="author" content="Tu Nombre">
```

### `<link>`
Vincula recursos externos como hojas de estilo CSS.
```html
<link rel="stylesheet" href="estilos.css">
<link rel="icon" href="favicon.ico">
```

### `<style>`
Define estilos CSS internos.
```html
<style>
  body {
    background-color: #f0f0f0;
  }
</style>
```

### `<script>`
Incluye o vincula código JavaScript.
```html
<script src="script.js"></script>
<script>
  console.log("Hola mundo");
</script>
```

### `<base>`
Define la URL base para todas las URLs relativas en el documento.
```html
<base href="https://www.ejemplo.com/">
```

---

## Elementos de Sección

### `<header>`
Representa la cabecera de un documento o sección.
```html
<header>
  <h1>Mi Sitio Web</h1>
  <nav><!-- navegación --></nav>
</header>
```

### `<nav>`
Define un conjunto de enlaces de navegación.
```html
<nav>
  <ul>
    <li><a href="#inicio">Inicio</a></li>
    <li><a href="#servicios">Servicios</a></li>
    <li><a href="#contacto">Contacto</a></li>
  </ul>
</nav>
```

### `<main>`
Representa el contenido principal del documento (debe ser único).
```html
<main>
  <article>
    <h2>Artículo principal</h2>
    <p>Contenido del artículo...</p>
  </article>
</main>
```

### `<article>`
Representa contenido independiente y autocontenido.
```html
<article>
  <h2>Título del artículo</h2>
  <p>Contenido del artículo...</p>
  <footer>Publicado el 27 de octubre, 2025</footer>
</article>
```

### `<section>`
Define una sección temática del documento.
```html
<section>
  <h2>Sección de servicios</h2>
  <p>Descripción de los servicios...</p>
</section>
```

### `<aside>`
Contenido tangencialmente relacionado (barras laterales, notas).
```html
<aside>
  <h3>Artículos relacionados</h3>
  <ul>
    <li><a href="#">Artículo 1</a></li>
    <li><a href="#">Artículo 2</a></li>
  </ul>
</aside>
```

### `<footer>`
Pie de página de un documento o sección.
```html
<footer>
  <p>&copy; 2025 Mi Sitio Web. Todos los derechos reservados.</p>
</footer>
```

### `<address>`
Información de contacto.
```html
<address>
  Contacto: <a href="mailto:info@ejemplo.com">info@ejemplo.com</a>
</address>
```

---

## Elementos de Contenido de Texto

### Encabezados (`<h1>` - `<h6>`)
Definen títulos de diferentes niveles (h1 es el más importante).
```html
<h1>Título principal</h1>
<h2>Subtítulo</h2>
<h3>Título de tercer nivel</h3>
<!-- ... hasta h6 -->
```

### `<p>`
Define un párrafo de texto.
```html
<p>Este es un párrafo de texto.</p>
```

### `<div>`
Contenedor genérico de bloque (sin significado semántico).
```html
<div class="contenedor">
  <p>Contenido agrupado</p>
</div>
```

### `<span>`
Contenedor genérico en línea (sin significado semántico).
```html
<p>Este es un <span class="destacado">texto destacado</span>.</p>
```

### Listas

#### `<ul>` - Lista desordenada
```html
<ul>
  <li>Elemento 1</li>
  <li>Elemento 2</li>
  <li>Elemento 3</li>
</ul>
```

#### `<ol>` - Lista ordenada
```html
<ol>
  <li>Primer elemento</li>
  <li>Segundo elemento</li>
  <li>Tercer elemento</li>
</ol>
```

#### `<dl>` - Lista de definiciones
```html
<dl>
  <dt>HTML</dt>
  <dd>Lenguaje de marcado para crear páginas web</dd>
  <dt>CSS</dt>
  <dd>Lenguaje para dar estilo a páginas web</dd>
</dl>
```

### `<pre>`
Texto preformateado (respeta espacios y saltos de línea).
```html
<pre>
  Este texto
    mantiene    los espacios
      y saltos de línea
</pre>
```

### `<blockquote>`
Cita en bloque de otra fuente.
```html
<blockquote cite="https://ejemplo.com">
  <p>Esta es una cita importante.</p>
</blockquote>
```

### `<hr>`
Separador temático (línea horizontal).
```html
<hr>
```

### `<br>`
Salto de línea.
```html
<p>Primera línea<br>Segunda línea</p>
```

---

## Elementos en Línea

### `<a>` - Enlace
Crea hipervínculos.
```html
<a href="https://www.ejemplo.com">Visitar ejemplo</a>
<a href="#seccion">Ir a sección</a>
<a href="mailto:email@ejemplo.com">Enviar email</a>
<a href="tel:+123456789">Llamar</a>
```

### Formato de texto

#### `<strong>` - Texto importante
```html
<strong>Texto importante</strong>
```

#### `<em>` - Énfasis
```html
<em>Texto enfatizado</em>
```

#### `<b>` - Negrita (sin importancia semántica)
```html
<b>Texto en negrita</b>
```

#### `<i>` - Cursiva (sin énfasis semántico)
```html
<i>Texto en cursiva</i>
```

#### `<u>` - Subrayado
```html
<u>Texto subrayado</u>
```

#### `<s>` - Tachado
```html
<s>Texto tachado</s>
```

#### `<mark>` - Texto marcado/resaltado
```html
<mark>Texto resaltado</mark>
```

#### `<small>` - Texto pequeño
```html
<small>Texto en letra pequeña</small>
```

#### `<sub>` - Subíndice
```html
H<sub>2</sub>O
```

#### `<sup>` - Superíndice
```html
E = mc<sup>2</sup>
```

### `<code>`
Fragmento de código.
```html
<p>Usa la función <code>console.log()</code> para imprimir en consola.</p>
```

### `<kbd>`
Entrada de teclado.
```html
<p>Presiona <kbd>Ctrl</kbd> + <kbd>C</kbd> para copiar.</p>
```

### `<samp>`
Salida de muestra de un programa.
```html
<samp>Error 404: Página no encontrada</samp>
```

### `<var>`
Variable matemática o de programación.
```html
<p>La fórmula es <var>x</var> + <var>y</var> = <var>z</var></p>
```

### `<q>`
Cita corta en línea.
```html
<p>Como dijo Einstein: <q>La imaginación es más importante que el conocimiento</q>.</p>
```

### `<abbr>`
Abreviatura o acrónimo.
```html
<abbr title="HyperText Markup Language">HTML</abbr>
```

### `<time>`
Fecha u hora.
```html
<time datetime="2025-10-27">27 de octubre de 2025</time>
```

---

## Elementos de Formulario

### `<form>`
Define un formulario.
```html
<form action="/procesar" method="POST">
  <!-- elementos del formulario -->
</form>
```

### `<input>`
Campo de entrada (múltiples tipos).
```html
<!-- Texto -->
<input type="text" name="nombre" placeholder="Tu nombre">

<!-- Email -->
<input type="email" name="email" required>

<!-- Contraseña -->
<input type="password" name="password">

<!-- Número -->
<input type="number" name="edad" min="0" max="120">

<!-- Fecha -->
<input type="date" name="fecha">

<!-- Checkbox -->
<input type="checkbox" name="aceptar" id="aceptar">
<label for="aceptar">Acepto los términos</label>

<!-- Radio -->
<input type="radio" name="genero" value="m" id="masculino">
<label for="masculino">Masculino</label>
<input type="radio" name="genero" value="f" id="femenino">
<label for="femenino">Femenino</label>

<!-- Archivo -->
<input type="file" name="archivo" accept="image/*">

<!-- Botón de envío -->
<input type="submit" value="Enviar">

<!-- Botón de reinicio -->
<input type="reset" value="Limpiar">

<!-- Color -->
<input type="color" name="color">

<!-- Rango -->
<input type="range" name="volumen" min="0" max="100">
```

### `<textarea>`
Área de texto multilínea.
```html
<textarea name="mensaje" rows="5" cols="40" placeholder="Tu mensaje"></textarea>
```

### `<select>` y `<option>`
Menú desplegable.
```html
<select name="pais">
  <option value="">Selecciona un país</option>
  <option value="mx">México</option>
  <option value="es">España</option>
  <option value="ar">Argentina</option>
</select>
```

### `<button>`
Botón.
```html
<button type="submit">Enviar</button>
<button type="button" onclick="alert('¡Hola!')">Click aquí</button>
```

### `<label>`
Etiqueta para un campo de formulario.
```html
<label for="nombre">Nombre:</label>
<input type="text" id="nombre" name="nombre">
```

### `<fieldset>` y `<legend>`
Agrupa elementos relacionados en un formulario.
```html
<fieldset>
  <legend>Información personal</legend>
  <label for="nombre">Nombre:</label>
  <input type="text" id="nombre" name="nombre">
</fieldset>
```

### `<datalist>`
Lista de opciones predefinidas para un input.
```html
<input list="navegadores" name="navegador">
<datalist id="navegadores">
  <option value="Chrome">
  <option value="Firefox">
  <option value="Safari">
  <option value="Edge">
</datalist>
```

---

## Elementos Multimedia

### `<img>`
Imagen.
```html
<img src="imagen.jpg" alt="Descripción de la imagen" width="300" height="200">
```

### `<figure>` y `<figcaption>`
Contenido multimedia con leyenda.
```html
<figure>
  <img src="grafico.png" alt="Gráfico de ventas">
  <figcaption>Figura 1: Ventas del primer trimestre</figcaption>
</figure>
```

### `<audio>`
Audio embebido.
```html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
  <source src="audio.ogg" type="audio/ogg">
  Tu navegador no soporta el elemento audio.
</audio>
```

### `<video>`
Video embebido.
```html
<video width="640" height="360" controls>
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  Tu navegador no soporta el elemento video.
</video>
```

### `<iframe>`
Marco en línea para embeber contenido externo.
```html
<iframe src="https://www.ejemplo.com" width="600" height="400"></iframe>
```

### `<canvas>`
Área para dibujar gráficos con JavaScript.
```html
<canvas id="miCanvas" width="400" height="300"></canvas>
```

### `<svg>`
Gráficos vectoriales escalables.
```html
<svg width="100" height="100">
  <circle cx="50" cy="50" r="40" fill="blue" />
</svg>
```

---

## Elementos de Tabla

### Estructura básica de tabla
```html
<table>
  <caption>Título de la tabla</caption>
  <thead>
    <tr>
      <th>Encabezado 1</th>
      <th>Encabezado 2</th>
      <th>Encabezado 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Dato 1</td>
      <td>Dato 2</td>
      <td>Dato 3</td>
    </tr>
    <tr>
      <td>Dato 4</td>
      <td>Dato 5</td>
      <td>Dato 6</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="3">Pie de tabla</td>
    </tr>
  </tfoot>
</table>
```

### Elementos de tabla

- **`<table>`**: Define la tabla
- **`<caption>`**: Título de la tabla
- **`<thead>`**: Agrupa las filas de encabezado
- **`<tbody>`**: Agrupa el contenido principal
- **`<tfoot>`**: Agrupa las filas de pie
- **`<tr>`**: Fila de la tabla
- **`<th>`**: Celda de encabezado
- **`<td>`**: Celda de datos
- **`<colgroup>`** y **`<col>`**: Define propiedades de columnas

### Atributos de tabla
```html
<!-- Combinar columnas -->
<td colspan="2">Celda que abarca 2 columnas</td>

<!-- Combinar filas -->
<td rowspan="2">Celda que abarca 2 filas</td>
```

---

## Elementos Interactivos

### `<details>` y `<summary>`
Contenido desplegable.
```html
<details>
  <summary>Haz click para expandir</summary>
  <p>Este contenido está oculto hasta que se hace click en el resumen.</p>
</details>
```

### `<dialog>`
Cuadro de diálogo o ventana modal.
```html
<dialog id="miDialog">
  <p>Este es un diálogo</p>
  <button onclick="document.getElementById('miDialog').close()">Cerrar</button>
</dialog>
<button onclick="document.getElementById('miDialog').showModal()">Abrir diálogo</button>
```

### `<progress>`
Barra de progreso.
```html
<progress value="70" max="100">70%</progress>
```

### `<meter>`
Medidor de valor dentro de un rango.
```html
<meter value="6" min="0" max="10">6 de 10</meter>
```

---

## Atributos Globales

Estos atributos se pueden usar en cualquier elemento HTML:

### `id`
Identificador único del elemento.
```html
<div id="contenedor-principal"></div>
```

### `class`
Clase(s) CSS del elemento.
```html
<p class="texto destacado importante"></p>
```

### `style`
Estilos CSS en línea.
```html
<p style="color: blue; font-size: 16px;">Texto azul</p>
```

### `title`
Texto de ayuda (tooltip).
```html
<abbr title="HyperText Markup Language">HTML</abbr>
```

### `lang`
Idioma del contenido.
```html
<p lang="en">This is in English</p>
```

### `data-*`
Atributos personalizados de datos.
```html
<div data-usuario-id="123" data-rol="admin"></div>
```

### `hidden`
Oculta el elemento.
```html
<p hidden>Este párrafo está oculto</p>
```

### `contenteditable`
Hace el contenido editable.
```html
<div contenteditable="true">Este texto se puede editar</div>
```

### `draggable`
Permite arrastrar el elemento.
```html
<img src="imagen.jpg" draggable="true" alt="Imagen">
```

### `tabindex`
Define el orden de tabulación.
```html
<button tabindex="1">Primero</button>
<button tabindex="2">Segundo</button>
```

---

## Comentarios HTML

Los comentarios no se muestran en el navegador.
```html
<!-- Este es un comentario -->

<!--
  Este es un comentario
  de múltiples líneas
-->
```

---

## Caracteres Especiales (Entidades HTML)

Algunos caracteres necesitan codificación especial:

```html
&lt;    <!-- < (menor que) -->
&gt;    <!-- > (mayor que) -->
&amp;   <!-- & (ampersand) -->
&quot;  <!-- " (comillas dobles) -->
&apos;  <!-- ' (comillas simples) -->
&nbsp;  <!-- espacio sin ruptura -->
&copy;  <!-- © (copyright) -->
&reg;   <!-- ® (marca registrada) -->
&trade; <!-- ™ (trademark) -->
```

---

## Buenas Prácticas

1. **Usa HTML semántico**: Utiliza etiquetas con significado (`<article>`, `<nav>`, etc.) en lugar de solo `<div>`.

2. **Siempre cierra las etiquetas**: Asegúrate de cerrar todas las etiquetas correctamente.

3. **Usa atributos `alt` en imágenes**: Para accesibilidad y SEO.

4. **Valida tu HTML**: Usa el validador de W3C (https://validator.w3.org/).

5. **Indenta correctamente**: Facilita la lectura del código.

6. **Usa minúsculas**: Para nombres de etiquetas y atributos.

7. **Estructura lógica**: Usa solo un `<h1>` por página, mantén jerarquía de encabezados.

8. **Accesibilidad**: Usa `<label>` para formularios, atributos ARIA cuando sea necesario.

9. **Optimiza imágenes**: Usa formatos apropiados y tamaños adecuados.

10. **Separa contenido de presentación**: Usa CSS externo en lugar de estilos en línea.

---

## Ejemplo de Documento HTML5 Completo

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Ejemplo de página HTML5">
  <title>Mi Página Web</title>
  <link rel="stylesheet" href="estilos.css">
</head>
<body>
  <!-- Encabezado -->
  <header>
    <h1>Bienvenido a Mi Sitio</h1>
    <nav>
      <ul>
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#sobre">Sobre mí</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  </header>

  <!-- Contenido principal -->
  <main>
    <article>
      <h2>Artículo Principal</h2>
      <p>Este es el contenido principal de la página.</p>
      <img src="imagen.jpg" alt="Imagen descriptiva">
    </article>

    <section id="sobre">
      <h2>Sobre mí</h2>
      <p>Información sobre el autor del sitio.</p>
    </section>
  </main>

  <!-- Barra lateral -->
  <aside>
    <h3>Artículos relacionados</h3>
    <ul>
      <li><a href="#">Artículo 1</a></li>
      <li><a href="#">Artículo 2</a></li>
    </ul>
  </aside>

  <!-- Pie de página -->
  <footer>
    <p>&copy; 2025 Mi Sitio Web. Todos los derechos reservados.</p>
    <address>
      Contacto: <a href="mailto:info@ejemplo.com">info@ejemplo.com</a>
    </address>
  </footer>

  <script src="script.js"></script>
</body>
</html>
```

---

## Recursos Adicionales

- **MDN Web Docs**: https://developer.mozilla.org/es/docs/Web/HTML
- **W3C HTML Specification**: https://www.w3.org/TR/html52/
- **Can I Use**: https://caniuse.com/ (compatibilidad de navegadores)
- **HTML Validator**: https://validator.w3.org/

---

## Conclusión

Esta guía cubre los elementos fundamentales de HTML5. La práctica constante y la experimentación son claves para dominar el desarrollo web. Recuerda siempre escribir código limpio, semántico y accesible.

¡Feliz codificación! 🚀