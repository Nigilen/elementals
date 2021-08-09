let button = document.querySelector('.button');
let point = document.querySelector('.point');
let posX1 = 0;
let posY1 = 0;

let curMove = function () {
  posX1 = event.x - button.clientTop;
  posY1 = event.y;
  posX2 = posX1 - event.x;
  
  point.style.top = posY1 + 'px';
  point.style.left = posX1 + 'px';
  document.addEventListener('mousedown', pointBlob);
};
  
let pointBlobX = function() {
  point.classList.remove('point-blob');
  
}

let pointBlob = function() {
  point.classList.add('point-blob');
 
  setTimeout(pointBlobX, 300);
}



button.addEventListener('mousemove', curMove);



