/*
LINK VIDEO: https://www.youtube.com/watch?v=ElYNZDJDmhw&ab_channel=PedroThiago
*/

let tela = 1;
let imgMenu;
let imgCredInst;

function preload() {
    imgMenu = loadImage('galaxy01.jpg');
    imgCredInst = loadImage('galaxy02.jpg');
}

function setup() {
    createCanvas(500, 500);
}

function bordas(borda) {
    noFill();
    stroke(0);
    strokeWeight(2.5);
    rect(-25, borda, 200, 50, 15);
}

function botoes(nome, pos) {
    fill(106, 90, 205);
    rect(-25, pos, 200, 50, 15);

    textSize(30);
    textAlign(CENTER);
    fill(220, 220, 220);
    textFont('Trebuchet MS');
    text(nome, 80, pos + 35);
}

function botaoVoltar() {
    background(imgCredInst);
    fill(106, 90, 205);
    rect(20, 440, 100, 40, 15);

    fill(220, 220, 220);
    noStroke();
    textAlign(CENTER);
    textSize(20);
    text('Início', 70, 466);

    if (
        mouseX > 20 &&
        mouseX < 20 + 100 &&
        mouseY > 440 &&
        mouseY < 440 + 40
      ) {
        noFill();
        stroke(0);
        strokeWeight(2.5);
        rect(20, 440, 100, 40, 15);
        if (mouseIsPressed) {
            tela = 1;
        }
    }
}

function draw() {
    if (tela === 1) {
        background(imgMenu);

        noStroke();

        fill(192, 192, 192);

        textSize(45);
        textAlign(CENTER);
        textFont('Arial');
        text('M  E  N  U', 250, 65);
        textStyle(BOLD);

        //Chamando a função botoes criada antes e passando o texto a ser exibido e a posição Y do botão
        botoes('Jogar', 200);
        botoes('Instruções', 300);
        botoes('Créditos', 400);

        //jogar
        if (
            mouseX > -25 &&
            mouseX < -25 + 200 &&
            mouseY > 200 &&
            mouseY < 200 + 50
        ) {
            bordas(200);
            if (mouseIsPressed) {
                tela = 2;
            }
        }
        //instruções
        else if (
            mouseX > -25 &&
            mouseX < -25 + 200 &&
            mouseY > 300 &&
            mouseY < 300 + 50
        ) {
            bordas(300);
            if (mouseIsPressed) {
                tela = 3;
            }
        }
        //créditos
        else if (
            mouseX > -25 &&
            mouseX < -25 + 200 &&
            mouseY > 400 &&
            mouseY < 400 + 50
        ) {
            bordas(400);
            if (mouseIsPressed) {
                tela = 4;
            }
        }
    } else if (tela === 2) {
        botaoVoltar();
    } else if (tela === 3) {
        botaoVoltar();
    } else if (tela === 4) {
        botaoVoltar();
    }
}