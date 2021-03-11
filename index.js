const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let x, y, relX, relY, objX, objY;
const objWidth = 50;
const objHeight = 50;
let dragging = false;

function init() {
  // canvas中央へ配置
  objX = canvas.width / 2 - objWidth / 2;
  objY = canvas.height / 2 - objHeight / 2;

  draw();
}

function onDown(e) {
  // canvas上の座標を取得
  x = e.clientX - canvas.offsetLeft;
  y = e.clientY - canvas.offsetTop;
  // 座標がオブジェクト上か判定
  if (objX < x && objX + objWidth > x && objY < y && objY + objHeight > y) {
    dragging = true; // ドラッグ開始
    relX = objX - x;
    relY = objY - y;
  }
}

function onMove(e) {
  // canvas上の座標を取得
  x = e.clientX - canvas.offsetLeft;
  y = e.clientY - canvas.offsetTop;

  if (dragging) {
    objX = x + relX;
    objY = y + relY;
    draw();
  }
}

function onUp(e) {
  dragging = false;
  painting = false;
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const chara = new Image();
  chara.src = "piyo.png";
  ctx.drawImage(chara, objX, objY);
}

canvas.addEventListener("mousedown", onDown, false);
canvas.addEventListener("mousemove", onMove, false);
canvas.addEventListener("mouseup", onUp, false);
