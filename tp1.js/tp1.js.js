//video: https://youtu.be/ZOZ-51h1pjo

let img;
let showImage = true; // Variable para mostrar u ocultar la imagen
let circleX, circleY; // Coordenadas del círculo central
let fillColor = 255; // Color de relleno inicial (blanco)
let backgroundColor = 255; // Color de fondo inicial (blanco)acaddcacc
function setup() {
  createCanvas(800, 400); // Tamaño de la ventana
  resetProgram(); // Llama a la función para inicializar variables y cargar la imagen
}

function draw() {
  background(backgroundColor); // Establece el color de fondo
  
  if (showImage) {
    image(img, width / 4, height / 2, 400, 400); // Muestra la imagen en el centro de la mitad izquierda
  }
  
  drawLines(); // Dibuja las líneas en las cuatro esquinas
  fill(fillColor); // Establece el color de relleno
  drawCircles(circleX, circleY); // Dibuja los círculos en las coordenadas especificadas
}

function keyPressed() {
  if (key === 'b' || key === 'B') {
    resetProgram(); // Reinicia el programa si se presiona la tecla 'b'
  }
  
  if (key === 'i' || key === 'I') {
    showImage = !showImage; // Alterna la visibilidad de la imagen si se presiona la tecla 'i'
  }
}

function mousePressed() {
  if (dist(mouseX, mouseY, circleX, circleY) < 80) {
    changeColorAndMoveCircles(); // Cambia el color y mueve el círculo si se hace clic dentro del círculo más pequeño
  }
}

function changeColorAndMoveCircles() {
  // Genera colores aleatorios
  let r = random(255);
  let g = random(255);
  let b = random(255);
  backgroundColor = color(r, g, b); // Establece el color de fondo
  
  // Establece un color más claro para el círculo
  fillColor = color(
    constrain(r + 50, 0, 255),
    constrain(g + 50, 0, 255),
    constrain(b + 50, 0, 255)
  );
  
  // Movimiento aleatorio del círculo
  circleX += random(-10, 10);
  circleY += random(-10, 10);
  
  // Limitar el movimiento dentro de la ventana
  circleX = constrain(circleX, 215, width - 215);
  circleY = constrain(circleY, 215, height - 215);
}

function drawLines() {
  strokeWeight(20); // Grosor de las líneas
  
  // Dibujar líneas horizontales en la parte superior izquierda
  for (let i = 0; i < 5; i++) {
    let y = i * 40 + 20;
    line(600, y, width / 2, y);
  }
  
  // Dibujar líneas verticales en la parte superior derecha
  for (let i = 0; i < 5; i++) {
    let x = width / 2 + i * 40 + 210;
    line(x, 0, x, height / 2);
  }
  
  // Dibujar líneas verticales en la parte inferior izquierda
  for (let i = 0; i < 5; i++) {
    let x = i * 40 + 400;
    line(x, height / 2, x, height);
  }
  
  // Dibujar líneas horizontales en la parte inferior derecha
  for (let i = 0; i < 5; i++) {
    let y = height / 2 + i * 40 + 20;
    line(600, y, width, y);
  }
}

function drawCircles(centerX, centerY) {
  stroke(20); // Color del borde del círculo
  strokeWeight(20); // Grosor del borde
  
  // Dibuja los tres círculos concéntricos
  ellipse(centerX, centerY, 215, 215);
  ellipse(centerX, centerY, 150, 150);
  ellipse(centerX, centerY, 80, 80);
}

function resetProgram() {
  img = loadImage("img.jpeg"); // Carga la imagen
  imageMode(CENTER); // Establece el modo de la imagen en el centro
  fillColor = 255; // Reinicia el color de relleno a blanco
  backgroundColor = 255; // Reinicia el color de fondo a blanco
  circleX = width - 205; // Posición inicial del círculo en el eje X
  circleY = 200; // Posición inicial del círculo en el eje Y
}
