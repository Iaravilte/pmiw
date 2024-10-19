//https://youtu.be/kOYco0z2DAY// //video//





let estado, guion, steps, sonam, tnr, logo;
let imagen = [];

function preload() {
  soundFormats('mp3', 'ogg');
  guion = loadTable("/data/guion.csv", "csv", "header");
  sonam = loadSound('/data/sonam.mp3');
  steps = loadSound('/data/steps.mp3');
  tnr = loadFont('/data/tnrnormal.ttf');
  logo = loadImage("data/logo.png");
  ///////////////////////////////////////////IMAGENES

  for (let i=0; i<10; i++) {
    imagen[i] = loadImage("data/imagen"+i+".png");
  }
}


//////////////////////////////////////////DIALOGOS

function dialogo(posX, posY, _id) {
  push();
  translate(posX, posY);
  fill(255);
  textSize(22);
  text(GetTextCSV(_id, 'Nombre'), 20, 30);
  pop();
}
function GetTextCSV(_id, _columna) {
  let IDColumna = guion.getColumn('ID');

  for (let fila=0; fila < IDColumna.length; fila++) {
    if (IDColumna[fila] === _id) {
      return guion.getColumn(_columna)[fila];
    }
  }
  return "ID no encontrado: " + _id;
}

////////////////////////////////////////botones

function mouseClicked() {

  if (steps.isPlaying()) {
    steps.stop()
  } else {
    steps.play();
  }

  if (mouseX > 160 && mouseX < 160+300 && mouseY > 300 && mouseY < 300+80 && estado=="menu") {
    estado = "nar0";
  } else if (mouseX > 340 && mouseX < 340+250 && mouseY > 420 && mouseY < 420+50 && estado=="nar0") {
    estado = "nar1";
  } else if (mouseX > 340 && mouseX < 340+250 && mouseY > 420 && mouseY < 420+50 && estado=="nar1") {
    estado = "nar2";
  } else if (mouseX > 60 && mouseX < 60+250 && mouseY > 420 && mouseY < 420+50 && estado=="nar1") {
    estado = "creditos";
  } else if (mouseX > 340 && mouseX < 340+250 && mouseY > 420 && mouseY < 420+50 && estado=="nar2") {
    estado = "nar3";
  } else if (mouseX > 60 && mouseX < 60+250 && mouseY > 420 && mouseY < 420+50 && estado=="nar3") {
    estado = "nar4a";
  } else if (mouseX > 60 && mouseX < 60+250 && mouseY > 420 && mouseY < 420+50 && estado=="nar2") {
    estado = "juego";
  } else if (mouseX > 60 && mouseX < 60+250 && mouseY > 420 && mouseY < 420+50 && estado=="nar4a") {
    estado = "nar5a";
  } else if (mouseX > 60 && mouseX < 60+250 && mouseY > 420 && mouseY < 420+50 && estado=="nar5a") {
    estado = "nar6a";
  } else if (mouseX > 340 && mouseX < 340+250 && mouseY > 420 && mouseY < 420+50 && estado=="nar4a") {
    estado = "op2";
  } else if (mouseX > 340 && mouseX < 340+250 && mouseY > 420 && mouseY < 420+50 && estado=="nar3") {
    estado = "op2";
  } else if (mouseX > 340 && mouseX < 340+250 && mouseY > 420 && mouseY < 420+50 && estado=="op2") {
    estado = "nar4b";
  } else if (mouseX > 60 && mouseX < 60+250 && mouseY > 420 && mouseY < 420+50 && estado=="nar4b") {
    estado = "nar5a";
  } else if (mouseX > 60 && mouseX < 60+250 && mouseY > 420 && mouseY < 420+50 && estado=="juego") {
    estado = "fb1";
  } else if (mouseX > 340 && mouseX < 340+250 && mouseY > 420 && mouseY < 420+50 && estado=="juego") {
    estado = "fm1";
  } else if (mouseX > 340 && mouseX < 340+250 && mouseY > 420 && mouseY < 420+50 && estado=="nar5a") {
    estado = "fm2";
  } else if (mouseX > 340 && mouseX < 340+250 && mouseY > 420 && mouseY < 420+50 && estado=="nar6a") {
    estado = "fm2";
  } else if (mouseX > 340 && mouseX < 340+250 && mouseY > 420 && mouseY < 420+50 && estado=="nar4b") {
    estado = "fm2";
  } else if (mouseX > 60 && mouseX < 60+250 && mouseY > 420 && mouseY < 420+50 && estado=="op2") {
    estado = "fb3";
  } else if (mouseX > 60 && mouseX < 60+250 && mouseY > 420 && mouseY < 420+50 && estado=="nar6a") {
    estado = "fb2";
  } else if (mouseX > 160 && mouseX < 160+300 && mouseY > 300 && mouseY < 300+80 && estado=="fb1") {
    estado = "creditos";
  } else if (mouseX > 160 && mouseX < 160+300 && mouseY > 300 && mouseY < 300+80 && estado=="fb2") {
    estado = "creditos";
  } else if (mouseX > 160 && mouseX < 160+300 && mouseY > 300 && mouseY < 300+80 && estado=="fb3") {
    estado = "creditos";
  } else if (mouseX > 160 && mouseX < 160+300 && mouseY > 300 && mouseY < 300+80 && estado=="fm1") {
    estado = "creditos";
  } else if (mouseX > 160 && mouseX < 160+300 && mouseY > 300 && mouseY < 300+80 && estado=="fm2") {
    estado = "creditos";
  } else if (mouseX > 160 && mouseX < 160+300 && mouseY > 300 && mouseY < 300+80 && estado=="creditos") {
    estado = "menu";
  }
}
//////////////////////////////////////////SETUP

function setup() {
  createCanvas(640, 480);
  colorMode(HSB, 360, 100, 100);
  textFont(tnr);
  sonam.setVolume(0.1);
  sonam.play();
  estado = "menu";
}

////////////////////////////////////////////DRAW

function draw() {
  background(0);
  print(estado);
  stroke(37, 58, 88);
  strokeWeight(2);
  


  if ( estado == "menu") {
    image(imagen[0],0,0);
    fill(255);
    textSize(55);
    image(logo, 130, 0, 350, 150);
    textSize(40);
    text("El capitulo olvidado", 160, 150);
    fill(352, 78, 40);
    rect(160, 300, 300, 80);
    fill(255);
    text("Comenzar", 220, 355);
  } else if ( estado == "nar0") {

image(imagen[1],0,0);
    fill(352, 78, 40);
    rect(70, height/2, 510, 170);
    rect(340, 420, 250, 50);
    textSize(20);
    fill(255);
    dialogo(75, height/2+10, 'na1');
    dialogo(75, height/2+40, 'na1a');
    dialogo(75, height/2+70, 'na1b');
    dialogo(75, height/2+100, 'na1c');
    text("continuar...", 370, 455);
  } else if ( estado == "nar1") {
    image(imagen[2],0,0);
    fill(352, 78, 40);
    rect(340, 420, 250, 50);
    rect(60, 420, 250, 50);
    rect(70, height/2, 510, 170);
    fill(255);
    textSize(20);
    dialogo(75, height/2+10, 'op1');
    dialogo(75, height/2+40, 'op1a');
    dialogo(75, height/2+70, 'op1b');
    dialogo(75, height/2+100, 'op1c');
    text("continuar...", 370, 455);
    text("arrepentirse", 80, 455);
  } else if ( estado == "nar2") {
    image(imagen[3],0,0);
    fill(352, 78, 40);
    rect(340, 420, 250, 50);
    rect(60, 420, 250, 50);
    rect(70, height/2, 510, 170);
    fill(255);
    textSize(20);
    dialogo(75, height/2+10, 'na2');
    dialogo(75, height/2+40, 'na2a');
    dialogo(75, height/2+70, 'na2b');
    dialogo(75, height/2+100, 'na2c');
    dialogo(75, height/2+130, 'na2d');
    text("Adentrarse", 370, 455);
    text("Pelear", 80, 455);
  } else if ( estado == "nar3") {
    image(imagen[3],0,0);
    fill(352, 78, 40);
    rect(340, 420, 250, 50);
    rect(60, 420, 250, 50);
    rect(70, height/2, 510, 170);
    fill(255);
    textSize(20);
    dialogo(75, height/2+10, 'na3');
    dialogo(75, height/2+40, 'na3a');
    text("Derecha", 370, 455);
    text("Izquierda", 80, 455);
  } else if ( estado == "nar4a") {
    image(imagen[3],0,0);
    fill(352, 78, 40);
    rect(340, 420, 250, 50);
    rect(60, 420, 250, 50);
    rect(70, height/2, 510, 170);
    fill(255);
    textSize(20);
    dialogo(75, height/2+10, 'na3');
    dialogo(75, height/2+40, 'na3a');
    text("Derecha", 370, 455);
    text("Izquierda", 80, 455);
  } else if ( estado == "nar5a") {
    image(imagen[3],0,0);
    fill(352, 78, 40);
    rect(340, 420, 250, 50);
    rect(60, 420, 250, 50);
    rect(70, height/2, 510, 170);
    fill(255);
    textSize(20);
    dialogo(75, height/2+10, 'na3');
    dialogo(75, height/2+40, 'na3a');
    text("Derecha", 370, 455);
    text("Izquierda", 80, 455);
  } else if ( estado == "nar6a") {
    image(imagen[3],0,0);
    fill(352, 78, 40);
    rect(340, 420, 250, 50);
    rect(60, 420, 250, 50);
    rect(70, height/2, 510, 170);
    fill(255);
    textSize(20);
    dialogo(75, height/2+10, 'na3');
    dialogo(75, height/2+40, 'na3a');
    text("Derecha", 370, 455);
    text("Izquierda", 80, 455);
  } else if ( estado == "fb2") {
   image(imagen[9],0,0);
    fill(255);
    textSize(55);
    text("Final bueno 2", 130, 100);
    dialogo(50, 150, 'fb2');
    dialogo(50, 180, 'fb2a');
    dialogo(50, 210, 'fb2b');
    dialogo(50, 240, 'fb2c');
    fill(352, 78, 40);
    rect(160, 300, 300, 80);
    fill(255);
    textSize(40);
    text("Creditos", 240, 355);
  } else if ( estado == "fm2") {
    image(imagen[7],0,0);
    fill(255);
    textSize(55);
    text("Final malo 2", 120, 100);
    dialogo(50, 150, 'fm2');
    dialogo(50, 180, 'fm2a');
    dialogo(50, 210, 'fm2b');
    dialogo(50, 240, 'fm2c');
    fill(352, 78, 40);
    rect(160, 300, 300, 80);
    fill(255);
    textSize(40);
    text("Creditos", 240, 355);
  } else if ( estado == "op2") {
    image(imagen[4],0,0);
    fill(352, 78, 40);
    rect(340, 420, 250, 50);
    rect(60, 420, 250, 50);
    rect(70, height/2, 510, 170);
    fill(255);
    textSize(20);
    dialogo(75, height/2+10, 'op2');
    dialogo(75, height/2+40, 'op2a');
    dialogo(75, height/2+70, 'caz1');
    text("Avanzar en soledad", 370, 455);
    text("Ser acomapañado", 80, 455);
  } else if ( estado == "nar4b") {
    image(imagen[3],0,0);
    fill(352, 78, 40);
    rect(340, 420, 250, 50);
    rect(60, 420, 250, 50);
    rect(70, height/2, 510, 170);
    fill(255);
    textSize(20);
    dialogo(75, height/2+10, 'na3');
    dialogo(75, height/2+40, 'na3a');
    text("Derecha", 370, 455);
    text("Izquierda", 80, 455);
  } else if ( estado == "fb3") {
    image(imagen[8],0,0);
    fill(255);
    textSize(55);
    text("Final bueno 3", 120, 100);
    dialogo(50, 150, 'fb3');
    dialogo(50, 180, 'fb3a');
    dialogo(50, 210, 'fb3b');
    dialogo(50, 240, 'fb3c');
    fill(352, 78, 40);
    rect(160, 300, 300, 80);
    fill(255);
    textSize(40);
    text("Creditos", 240, 355);
  } else if ( estado == "fb1") {
    image(imagen[6],0,0);
    fill(255);
    textSize(55);
    text("Final bueno 1", 120, 100);
    dialogo(50, 150, 'fb1');
    dialogo(50, 180, 'fb1a');
    dialogo(50, 210, 'fb1b');
    dialogo(50, 240, 'fb1c');
    fill(352, 78, 40);
    rect(160, 300, 300, 80);
    fill(255);
    textSize(40);
    text("Creditos", 240, 355);
  } else if ( estado == "fm1") {
    image(imagen[5],0,0);
    fill(255);
    textSize(55);
    text("Final malo 1", 120, 100);
    dialogo(50, 150, 'fm1');
    dialogo(50, 180, 'fm1a');

    fill(352, 78, 40);
    rect(160, 300, 300, 80);
    fill(255);
    textSize(40);
    text("Creditos", 240, 355);
  } else if ( estado == "creditos") {
    fill(255);
    textSize(55);
    text("Gracias por jugar", 110, 100);
    textSize(40);
    text("Alumnos", 210, 150);
    textSize(25);
    text("Franco D'angelo - 88224/2", 80, 200);
    text("Iara Vilte - 94714/4", 80, 230);
    textSize(20);
    text("Creacion  Warren Ellis - Basado en  Castlevania de Konami", 55, 270);
    fill(352, 78, 40);
    rect(160, 300, 300, 80);
    fill(255);
    textSize(40);
    text("Reiniciar", 240, 355);
  }

  ///////////////////////PENDIENTE

  if ( estado == "juego") {
    fill(352, 78, 40);
    rect(340, 420, 250, 50);
    rect(60, 420, 250, 50);
    fill(255);
    textSize(20);
    noStroke();
    text("esta parte esta incompleta, al menos por ahora", 50, 50)
      stroke(37, 58, 88);
    text("perder", 370, 455);
    text("ganar", 80, 455);
  }
}
