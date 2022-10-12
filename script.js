window.onload = function selectBlack() {
  const divBlack = document.getElementById('black');
  divBlack.classList.add('selected');
};

// essa parte seleciona a cor da palheta e exclui a outra que estava selecionada
const colorToCLick = document.getElementsByClassName('color');

function clearSelectedFromColor() {
  const allColorToRemove = document.getElementsByClassName('color');

  for (let index = 0; index < allColorToRemove.length; index += 1) {
    if (allColorToRemove[index].classList.contains('selected') === true) {
      allColorToRemove[index].classList.remove('selected');
    }
  }
}

function selectColor(divEscolhida) {
  clearSelectedFromColor();

  divEscolhida.target.classList.add('selected');
}

function clickVerifyColorsSelect() {
  for (let indexClick = 0; indexClick < colorToCLick.length; indexClick += 1) {
    colorToCLick[indexClick].addEventListener('click', selectColor);
  }
}

clickVerifyColorsSelect();

// essa parte pinta o pixel
const pixelsToPrint = document.getElementsByClassName('pixel');

function printPixel(clickedPixel) {
  const whoIsSelected = document.querySelector('.selected');
  const colorSelected = window.getComputedStyle(whoIsSelected).backgroundColor;
  const pixelToPrint = clickedPixel;
  pixelToPrint.target.style.backgroundColor = colorSelected;
}

function clickVerifyPixelSelect() {
  for (let indexClick = 0; indexClick < pixelsToPrint.length; indexClick += 1) {
    pixelsToPrint[indexClick].addEventListener('click', printPixel);
  }
}
clickVerifyPixelSelect();

// Essa parte limpa tudo
const botao = document.getElementById('clear-board');

function limparBoard() {
  for (let indexLimpeza = 0; indexLimpeza < pixelsToPrint.length; indexLimpeza += 1) {
    pixelsToPrint[indexLimpeza].style.backgroundColor = 'white';
  }
}

botao.addEventListener('click', limparBoard);
