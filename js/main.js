var labels = [];
var mas = [];





//Данные графикаы

if ( !localStorage.labels && !localStorage.mas ) {
  localStorage.setItem('labels', JSON.stringify([]));
  localStorage.setItem('mas', JSON.stringify([]));

} else {
  mas = JSON.parse(localStorage.getItem('mas'));
  labels = JSON.parse(localStorage.getItem('labels'));
  console.log(mas, typeof(mas));
}





//Запись первого посещения, хранится в localStorage
if ( !localStorage.date ) {
  var today;
  today = new Date();
  var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
  localStorage.setItem('date', JSON.stringify(date));
  document.getElementById('firstDate').innerHTML = `${date}`;
} else {
  date = JSON.parse(localStorage.getItem('date'));
  document.getElementById('firstDate').innerHTML = `${date}`;
}

var fastestCPM = 0;
if ( !localStorage.fastestCPM ) {
  document.getElementById('global-result-cpm').innerHTML = '-';
  localStorage.setItem('fastestCPM', JSON.stringify(0));
} else {
  var globalCPM = document.getElementById('global-result-cpm');
  globalCPM.innerHTML = `${JSON.parse(localStorage.getItem('fastestCPM'))}`;
}

var averageAccuracy = 0;
if ( !localStorage.averageAccuracy ) {
  document.getElementById('global-result-accuracy').innerHTML = '- %';
  localStorage.setItem('averageAccuracy', JSON.stringify(0));
} else {
  var globalAccuracy = document.getElementById('global-result-accuracy');
  globalAccuracy.innerHTML = `${JSON.parse(localStorage.getItem('averageAccuracy'))}`;
}

var textCount = 0;
if ( !localStorage.textCount ) {
  document.getElementById('global-result-count').innerHTML = '-';
  localStorage.setItem('textCount', JSON.stringify(0));

} else {
  var globalCounter = document.getElementById('global-result-count');
  globalCounter.innerHTML = `${JSON.parse(localStorage.getItem('textCount'))}`;
}

var longestText = 0;
if ( !localStorage.longestText ) {
  document.getElementById('longest-text').innerHTML = '-';
  localStorage.setItem('longestText', JSON.stringify(0));
} else {
  document.getElementById('longest-text').innerHTML = `${JSON.parse(localStorage.getItem('longestText'))}`;
}




// MODAL WINDOW

$(function () {

  $('div.select').click( function(event){
    event.preventDefault();
    $('#myOverlay').fadeIn(297, function(){
      $('#myModal') 
      .css('display', 'block')
      .animate({opacity: 1}, 140);
    });
  });

  $('#myModal__close, #myOverlay').click( function(){
  $('#myModal').animate({opacity: 0}, 140, function(){
      $(this).css('display', 'none');
      $('#myOverlay').fadeOut(297);
    });
  });

});

// THEME CONTROLLER

const switchControlTheme = document.getElementById('switch-control-theme');
const switchCircleTheme = document.getElementById('circle-theme');
const switchCircleLanguage = document.getElementById('circle-language');
const theSun = document.getElementById('day');
const theMoon = document.getElementById('night');
const mainBox = document.getElementById('text');
const mainInput = document.getElementById('input');

const keyboardLines = document.querySelectorAll('.line');


let times = 0;
let themeFlag = true;

switchControlTheme.addEventListener('click', () => {
  mainInput.focus();
    if (times%2 === 0 ) {
        switchCircleTheme.style.transform = "translate(22px, 4px)";
        switchCircleLanguage.style.transform = "translate(5px, 4px)";
        document.querySelector('#ru').style.paddingBottom = '1px';
        times++;
        theSun.classList.add('hidden');
        theMoon.classList.remove('hidden');

        document.getElementById('letter_backspace-1').style.backgroundColor  = '#4E4E4E';
        document.getElementById('letter_space-1').style.backgroundColor  = '#4E4E4E';
        document.getElementById('letter_tab-1').style.backgroundColor  = '#4E4E4E';
        document.getElementById('letter_capslock-1').style.backgroundColor  = '#4E4E4E';
        document.getElementById('letter_enter-1').style.backgroundColor  = '#4E4E4E';
        document.getElementById('letter_shift-1-1').style.backgroundColor  = '#4E4E4E';
        document.getElementById('letter_shift-2-1').style.backgroundColor  = '#4E4E4E';
        document.getElementById('letter_alt-1').style.backgroundColor  = '#4E4E4E';

        textBox.style.border = '1px solid #FFFFFF';


        document.getElementById('switch-control-theme').style.backgroundColor = '#4E4E4E';
        document.getElementById('switch-control-theme').style.border = '1px solid #FFFFFF';
        document.getElementById('switch-control-language').style.border = '1px solid #FFFFFF';
        document.getElementById('switch-control-language').style.backgroundColor = '#4E4E4E';
        document.querySelector('*').style.backgroundColor = '#4E4E4E';
        document.querySelector('#name').style.color = 'white';
        document.querySelector('#menu').style.color = '#ffffff';
        document.querySelector('#arrow-change').setAttribute('src','img/arrow-dark.svg');


        document.getElementById('svg-line-1').setAttribute('src','img/line-light-big.svg');
        document.getElementById('svg-line-2').setAttribute('src','img/line-light-big.svg');
        document.getElementById('svg-line-3').setAttribute('src','img/line-light.svg');
        document.getElementById('svg-line-4').setAttribute('src','img/line-light.svg');
        

        mainBox.style.border = '1px solid #FFFFFF';
        mainBox.style.color = '#FFFFFF';

        mainInput.style.color = '#ffffff';

        // keyboard

      document.querySelector('body').style.color = '#ffffff';
      document.querySelector('body').style.backgroundColor = '#4e4e4e';


      for (let i = 0; i < document.querySelectorAll('#text').length; i++) {
        document.querySelectorAll('#text')[i].style.border = '1px solid #FFFFFF';
      }

      console.log(document.querySelectorAll('.footer-text'));
      for (let i = 0; i < document.querySelectorAll('.footer-text').length; i++) {
        document.querySelectorAll('.footer-text')[i].style.color = '#FFFFFF';
      }
      themeFlag = false;
      if ( keyboardHighlighted === true ) {
        for(let i = 0; i < keyboardRu.childNodes.length; i++) {
          for(let j = 0; j < 14; j++) {
            try {
              keyboardRu.children[i].children[j].style.backgroundColor = document.querySelector('body').style.backgroundColor;
            } catch (error) {
              break;
            }
          }
        }
      }
    } else {
      mainInput.focus();
        switchCircleTheme.style.transform = "translate(5px, 5px)";
        times++;
        theMoon.classList.add('hidden');
        theSun.classList.remove('hidden');

        document.getElementById('switch-control-theme').style.backgroundColor = '#FFFFFF';
        document.getElementById('switch-control-theme').style.border = '0px solid #4E4E4E';
        document.getElementById('switch-control-language').style.border = '0px solid #4E4E4E';
        document.getElementById('switch-control-language').style.backgroundColor = '#FFFFFF';
        document.querySelector('*').style.backgroundColor = '#FFFFFF';
        document.querySelector('#name').style.color = '#4E4E4E';
        document.querySelector('#menu').style.color = '#4E4E4E';
        document.querySelector('#arrow-change').setAttribute('src','img/arrow.svg');


        textBox.style.border = '1px solid #4e4e4e';
        document.getElementById('letter_backspace-1').style.backgroundColor  = '#FFFFFF';
        document.getElementById('letter_space-1').style.backgroundColor  = '#FFFFFF';
        document.getElementById('letter_tab-1').style.backgroundColor  = '#FFFFFF';
        document.getElementById('letter_capslock-1').style.backgroundColor  = '#FFFFFF';
        document.getElementById('letter_enter-1').style.backgroundColor  = '#FFFFFF';
        document.getElementById('letter_shift-1-1').style.backgroundColor  = '#FFFFFF';
        document.getElementById('letter_shift-2-1').style.backgroundColor  = '#FFFFFF';
        document.getElementById('letter_alt-1').style.backgroundColor  = '#FFFFFF';

        document.getElementById('svg-line-1').setAttribute('src','img/line.svg');
        document.getElementById('svg-line-2').setAttribute('src','img/line.svg');
        document.getElementById('svg-line-3').setAttribute('src','img/smaller-line.svg');
        document.getElementById('svg-line-4').setAttribute('src','img/smaller-line.svg');
        

        mainBox.style.border = '1px solid #4E4E4E';
        mainBox.style.color = '#4E4E4E';

        mainInput.style.color = '#4E4E4E';

        // keyboard

      document.querySelector('body').style.color = '#4E4E4E';
      document.querySelector('body').style.backgroundColor = '#ffffff';



      for (let i = 0; i < document.querySelectorAll('#text').length; i++) {
        document.querySelectorAll('#text')[i].style.border = '1px solid #4E4E4E';
      }

      console.log(document.querySelectorAll('.footer-text'));
      for (let i = 0; i < document.querySelectorAll('.footer-text').length; i++) {
        document.querySelectorAll('.footer-text')[i].style.color = '#4E4E4E';
      }
      themeFlag = true;

      if ( keyboardHighlighted === true) {
        for(let i = 0; i < keyboardRu.childNodes.length; i++) {
          for(let j = 0; j < 14; j++) {
            try {
              keyboardRu.children[i].children[j].style.backgroundColor = document.querySelector('body').style.backgroundColor;
            } catch (error) {
              break;
            }
          }
        }  
      }
}})




// ENABLING AND DISABLING THE BUTTONS

const bucketRu = document.getElementById('bucket-ru');
const bucketRuCross = document.getElementById('cross-1');

const keyboardRuIcon = document.getElementById('keyboard-icon-ru');
const keyboardRuCross = document.getElementById('cross-2');

const handRu = document.getElementById('hand-ru');
const handRuCross = document.getElementById('cross-3');

let crossOne = 0, crossTwo = 0, crossThree = 0;

let keyboardHighlighted = false;

const keyboardRu = document.getElementById('keyboard-ru');

bucketRu.addEventListener('click', () => {
  mainInput.focus();
  if (crossOne % 2 === 0) {
    bucketRuCross.style.display = 'block';
    crossOne++;

    keyboardRu.children[0].children[0].style.backgroundColor = '#C181F3';
    keyboardRu.children[0].children[1].style.backgroundColor = '#C181F3';
    keyboardRu.children[0].children[2].style.backgroundColor = '#8B89DF';
    keyboardRu.children[0].children[3].style.backgroundColor = '#72FF66';
    keyboardRu.children[0].children[4].style.backgroundColor = '#FFB966';
    keyboardRu.children[0].children[5].style.backgroundColor = '#FFB966';
    keyboardRu.children[0].children[6].style.backgroundColor = '#FFDB1E';
    keyboardRu.children[0].children[7].style.backgroundColor = '#FFDB1E';
    keyboardRu.children[0].children[8].style.backgroundColor = '#72FF66';
    keyboardRu.children[0].children[9].style.backgroundColor = '#8B89DF';
    keyboardRu.children[0].children[10].style.backgroundColor = '#C181F3';
    keyboardRu.children[0].children[11].style.backgroundColor = '#C181F3';
    keyboardRu.children[0].children[12].style.backgroundColor = '#C181F3';

    keyboardRu.children[1].children[1].style.backgroundColor = '#C181F3';
    keyboardRu.children[1].children[2].style.backgroundColor = '#8B89DF';
    keyboardRu.children[1].children[3].style.backgroundColor = '#72FF66';
    keyboardRu.children[1].children[4].style.backgroundColor = '#FFB966';
    keyboardRu.children[1].children[5].style.backgroundColor = '#FFB966';
    keyboardRu.children[1].children[6].style.backgroundColor = '#FFDB1E';
    keyboardRu.children[1].children[7].style.backgroundColor = '#FFDB1E';
    keyboardRu.children[1].children[8].style.backgroundColor = '#72FF66';
    keyboardRu.children[1].children[9].style.backgroundColor = '#8B89DF';
    keyboardRu.children[1].children[10].style.backgroundColor = '#C181F3';
    keyboardRu.children[1].children[11].style.backgroundColor = '#C181F3';
    keyboardRu.children[1].children[12].style.backgroundColor = '#C181F3';
    keyboardRu.children[1].children[13].style.backgroundColor = '#C181F3';

    keyboardRu.children[2].children[1].style.backgroundColor = '#C181F3';
    keyboardRu.children[2].children[2].style.backgroundColor = '#8B89DF';
    keyboardRu.children[2].children[3].style.backgroundColor = '#72FF66';
    keyboardRu.children[2].children[4].style.backgroundColor = '#FFB966';
    keyboardRu.children[2].children[5].style.backgroundColor = '#FFB966';
    keyboardRu.children[2].children[6].style.backgroundColor = '#FFDB1E';
    keyboardRu.children[2].children[7].style.backgroundColor = '#FFDB1E';
    keyboardRu.children[2].children[8].style.backgroundColor = '#72FF66';
    keyboardRu.children[2].children[9].style.backgroundColor = '#8B89DF';
    keyboardRu.children[2].children[10].style.backgroundColor = '#C181F3';
    keyboardRu.children[2].children[11].style.backgroundColor = '#C181F3';


    keyboardRu.children[3].children[1].style.backgroundColor = '#C181F3';
    keyboardRu.children[3].children[2].style.backgroundColor = '#8B89DF';
    keyboardRu.children[3].children[3].style.backgroundColor = '#72FF66';
    keyboardRu.children[3].children[4].style.backgroundColor = '#FFB966';
    keyboardRu.children[3].children[5].style.backgroundColor = '#FFB966';
    keyboardRu.children[3].children[6].style.backgroundColor = '#FFDB1E';
    keyboardRu.children[3].children[7].style.backgroundColor = '#FFDB1E';
    keyboardRu.children[3].children[8].style.backgroundColor = '#72FF66';
    keyboardRu.children[3].children[9].style.backgroundColor = '#8B89DF';
    keyboardRu.children[3].children[10].style.backgroundColor = '#C181F3';

    keyboardHighlighted = false;

  } else {
    mainInput.focus();
    bucketRuCross.style.display = 'none';
    crossOne++;


      for(let i = 0; i < keyboardRu.childNodes.length; i++) {
        for(let j = 0; j < 14; j++) {
          try {
            keyboardRu.children[i].children[j].style.backgroundColor = document.querySelector('body').style.backgroundColor;
          } catch (error) {
            break;
          }
        }
    }
    keyboardHighlighted = true;
  }
})


keyboardRuIcon.addEventListener('click', () => {
  mainInput.focus();
  if (crossTwo % 2 === 0) {
    keyboardRuCross.style.display = 'none';
    keyboardRu.classList.add('visibility');
    crossTwo++;


  } else {
    keyboardRuCross.style.display = 'block';
    keyboardRu.classList.remove('visibility');
    crossTwo++;

  
  }
})

function disableHelper () {
  for(let i = 0; i < keyboardRu.childNodes.length; i++) {
    for(let j = 0; j < 50; j++) {
      try {
        if ( keyboardRu.children[i].children[j].classList.contains('hand') ) {
          keyboardRu.children[i].children[j].classList.add('hidden')
        }
      } catch (error) {
        break;
      }
    }
  }
}




let handRuAct = false; let tempNext;

handRu.addEventListener('click', () => {
  mainInput.focus();
  if (crossThree % 2 === 0) {
    handRuCross.style.display = 'block';
    crossThree++;
    handRuAct = true;

    for(let i = 0; i < textBox.childNodes.length; i++) {
        try {
          if ( mainInput.value.length >= 1 && textBox.children[mainInput.value.length-1].classList.contains('incorrect') ){
            // nextLetter = textBox.innerText[mainInput.value.length-1];
            disableHelper();
            highlight('backspace');
            console.log('hello');
          
          } else if (!textBox.children[i].classList.contains('correct') && !textBox.children[i].classList.contains('incorrect')) {
            tempNext = textBox.innerText[i];
            disableHelper();
            highlight(tempNext);
            break;
          }
        } catch (error) {
          break;
        }
    }

    

    

  } else {
    mainInput.focus();
    handRuCross.style.display = 'none';
    crossThree++;
    handRuAct = false;
    for(let i = 0; i < 5; i++) {
      for(let j = 0; j < 15; j++) {
        try {
          keyboardRu.children[i].children[j].classList.remove('highlighted');
          disableHelper();
        } catch (error) {
          break;
        }
      }
    }
  }
})


const textBox = document.getElementById('text-box');
textBox.innerText = textBox.innerText.replace(/ё/g, 'е');
textBox.innerText = textBox.innerText.replace(/Ë/g, 'Е');



const progressBar = document.getElementById('input-progress');
//mainInput
let pointer = 0;
// let extraTextBox = textBox;
// const checked = document.getElementById('checked');
// const wrong = document.getElementById('wrong');


tmp = textBox.innerText;
const wordLength = textBox.innerText.length;
textBox.innerText = '';
tmp.split('').forEach(character => {
  const characterSpan = document.createElement('span');
  characterSpan.innerText = character;
  characterSpan.style.whiteSpace = 'break-spaces'; /* Чтобы не потерять пробел в конце строки */

  textBox.appendChild(characterSpan);
  mainInput.value = null;
})







function highlight (param) {
  disableHelper();
  switch (param) {
    // ПЕРВЫЙ РЯД КЛАВИАТУРЫ
    case 'backspace':
      document.getElementById('letter_backspace-1').classList.add('highlighted');
      document.getElementById('little-finger-right-purple-1').classList.remove('hidden');
      break;
    case '1':
      document.getElementById('letter_1').classList.add('highlighted');
      document.getElementById('little-finger-left-purple-1').classList.remove('hidden');
      break;
    case '!':
      document.getElementById('letter_1').classList.add('highlighted');
      document.getElementById('letter_shift-2-1').classList.add('highlighted');
      document.getElementById('little-finger-left-purple-1').classList.remove('hidden');
      document.getElementById('little-finger-right-purple-2').classList.remove('hidden');
      break;
    case '2':
      document.getElementById('letter_2').classList.add('highlighted');
      document.getElementById('ring-finger-left-lilac-1').classList.remove('hidden');
      break;
    case '"':
      document.getElementById('letter_2').classList.add('highlighted');
      document.getElementById('ring-finger-left-lilac-1').classList.remove('hidden');
      document.getElementById('letter_shift-2-1').classList.add('highlighted');
      document.getElementById('little-finger-right-purple-2').classList.remove('hidden');
      break;
    case '3':
      document.getElementById('letter_3').classList.add('highlighted');
      document.getElementById('middle-finger-left-green-1').classList.remove('hidden');
      break;
    case '№':
      document.getElementById('letter_3').classList.add('highlighted');
      document.getElementById('middle-finger-left-green-1').classList.remove('hidden');
      document.getElementById('letter_shift-2-1').classList.add('highlighted');
      document.getElementById('little-finger-right-purple-2').classList.remove('hidden');
      break;
    case '4':
      document.getElementById('letter_4').classList.add('highlighted');
      document.getElementById('index-finger-orange-1').classList.remove('hidden');
      break;
    case ';':
      document.getElementById('letter_4').classList.add('highlighted');
      document.getElementById('index-finger-orange-1').classList.remove('hidden');
      document.getElementById('letter_shift-2-1').classList.add('highlighted');
      document.getElementById('little-finger-right-purple-2').classList.remove('hidden');
      break;
    case '5':
      document.getElementById('letter_5').classList.add('highlighted');
      document.getElementById('index-finger-orange-2').classList.remove('hidden');
      break;
    case '%':
      document.getElementById('letter_5').classList.add('highlighted');
      document.getElementById('index-finger-orange-2').classList.remove('hidden');
      document.getElementById('letter_shift-2-1').classList.add('highlighted');
      document.getElementById('little-finger-right-purple-2').classList.remove('hidden');
      break;
    case '6':
      document.getElementById('letter_6').classList.add('highlighted');
      document.getElementById('index-finger-yellow-1').classList.remove('hidden');
      break;
    case ':':
      document.getElementById('letter_6').classList.add('highlighted');
      document.getElementById('index-finger-yellow-1').classList.remove('hidden');
      document.getElementById('letter_shift-2-1').classList.add('highlighted');
      document.getElementById('little-finger-right-purple-2').classList.remove('hidden');
      break;
    case '7':
      document.getElementById('letter_7').classList.add('highlighted');
      document.getElementById('index-finger-yellow-2').classList.remove('hidden');
      break;
    case '?':
      document.getElementById('letter_7').classList.add('highlighted');
      document.getElementById('index-finger-yellow-2').classList.remove('hidden');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      document.getElementById('little-finger-left-purple-2').classList.remove('hidden');
      break;
    case '8':
      document.getElementById('letter_8').classList.add('highlighted');
      document.getElementById('middle-finger-right-green-1').classList.remove('hidden');
      break;
    case '*':
      document.getElementById('letter_8').classList.add('highlighted');
      document.getElementById('middle-finger-right-green-1').classList.remove('hidden');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      document.getElementById('little-finger-left-purple-2').classList.remove('hidden');
      break;
    case '9':
      document.getElementById('letter_9').classList.add('highlighted');
      document.getElementById('ring-finger-right-lilac-1').classList.remove('hidden');
      break;
    case '(':
      document.getElementById('letter_9').classList.add('highlighted');
      document.getElementById('ring-finger-right-lilac-1').classList.remove('hidden');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      document.getElementById('little-finger-left-purple-2').classList.remove('hidden');
      break;
    case '0':
      document.getElementById('letter_0').classList.add('highlighted');
      document.getElementById('little-finger-right-purple-3').classList.remove('hidden');
      break;
    case ')':
      document.getElementById('letter_0').classList.add('highlighted');
      document.getElementById('little-finger-right-purple-3').classList.remove('hidden');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      document.getElementById('little-finger-left-purple-2').classList.remove('hidden');
      break;
    case '-':
      document.getElementById('letter_minus').classList.add('highlighted');
      document.getElementById('little-finger-right-purple-4').classList.remove('hidden');
      break;
    case '_':
      document.getElementById('letter_minus').classList.add('highlighted');
      document.getElementById('little-finger-right-purple-4').classList.remove('hidden');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      document.getElementById('little-finger-left-purple-2').classList.remove('hidden');
      break;
    case '=':
      document.getElementById('letter_plus').classList.add('highlighted');
      document.getElementById('little-finger-right-purple-5').classList.remove('hidden');
      break;
    case '+':
      document.getElementById('letter_plus').classList.add('highlighted');
      document.getElementById('little-finger-right-purple-5').classList.remove('hidden');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      document.getElementById('little-finger-left-purple-2').classList.remove('hidden');
      break;

      // ВТОРОЙ РЯД КЛАВИАТУРЫ

    case 'й':
      document.getElementById('letter_й').classList.add('highlighted');
      document.getElementById('little-finger-left-purple-3').classList.remove('hidden');
      break;
    case 'Й':
      document.getElementById('letter_й').classList.add('highlighted');
      document.getElementById('little-finger-left-purple-3').classList.remove('hidden');
      document.getElementById('letter_shift-2-1').classList.add('highlighted');
      document.getElementById('little-finger-right-purple-2').classList.remove('hidden');
      break;
    case 'ц':
      document.getElementById('letter_ц').classList.add('highlighted');
      document.getElementById('ring-finger-left-lilac-2').classList.remove('hidden');
      break;
    case 'Ц':
      document.getElementById('letter_ц').classList.add('highlighted');
      document.getElementById('ring-finger-left-lilac-2').classList.remove('hidden');
      document.getElementById('letter_shift-2-1').classList.add('highlighted');
      document.getElementById('little-finger-right-purple-2').classList.remove('hidden');
      break;
    case 'у':
      document.getElementById('letter_у').classList.add('highlighted');
      document.getElementById('middle-finger-left-green-2').classList.remove('hidden');
      break;
    case 'У':
      document.getElementById('letter_у').classList.add('highlighted');
      document.getElementById('middle-finger-left-green-2').classList.remove('hidden');
      document.getElementById('letter_shift-2-1').classList.add('highlighted');
      document.getElementById('little-finger-right-purple-2').classList.remove('hidden');
      break;
    case 'к':
      document.getElementById('letter_к').classList.add('highlighted');
      document.getElementById('index-finger-orange-3').classList.remove('hidden');
      break;
    case 'К':
      document.getElementById('letter_к').classList.add('highlighted');
      document.getElementById('index-finger-orange-3').classList.remove('hidden');
      document.getElementById('letter_shift-2-1').classList.add('highlighted');
      document.getElementById('little-finger-right-purple-2').classList.remove('hidden');
      break;
    case 'е':
      document.getElementById('letter_е').classList.add('highlighted');
      document.getElementById('index-finger-orange-4').classList.remove('hidden');
      break;
    case 'Е':
      document.getElementById('letter_е').classList.add('highlighted');
      document.getElementById('index-finger-orange-4').classList.remove('hidden');
      document.getElementById('letter_shift-2-1').classList.add('highlighted');
      document.getElementById('little-finger-right-purple-2').classList.remove('hidden');
      break;
    case 'н':
      document.getElementById('letter_н').classList.add('highlighted');
      document.getElementById('index-finger-yellow-3').classList.remove('hidden');
      break;
    case 'Н':
      document.getElementById('letter_н').classList.add('highlighted');
      document.getElementById('index-finger-yellow-3').classList.remove('hidden');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      document.getElementById('little-finger-left-purple-2').classList.remove('hidden');
      break;
    case 'г':
      document.getElementById('letter_г').classList.add('highlighted');
      document.getElementById('index-finger-yellow-4').classList.remove('hidden');
      break;
    case 'Г':
      document.getElementById('letter_г').classList.add('highlighted');
      document.getElementById('index-finger-yellow-4').classList.remove('hidden');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      document.getElementById('little-finger-left-purple-2').classList.remove('hidden');
      break;
    case 'ш':
      document.getElementById('letter_ш').classList.add('highlighted');
      document.getElementById('middle-finger-right-green-2').classList.remove('hidden');
      break;
    case 'Ш':
      document.getElementById('letter_ш').classList.add('highlighted');
      document.getElementById('middle-finger-right-green-2').classList.remove('hidden');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      document.getElementById('little-finger-left-purple-2').classList.remove('hidden');
      break;
    case 'щ':
      document.getElementById('letter_щ').classList.add('highlighted');
      document.getElementById('ring-finger-right-lilac-2').classList.remove('hidden');
      break;
    case 'Щ':
      document.getElementById('letter_щ').classList.add('highlighted');
      document.getElementById('ring-finger-right-lilac-2').classList.remove('hidden');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      document.getElementById('little-finger-left-purple-2').classList.remove('hidden');
      break;
    case 'з':
      document.getElementById('letter_з').classList.add('highlighted');
      document.getElementById('little-finger-right-purple-6').classList.remove('hidden');
      break;
    case 'З':
      document.getElementById('letter_з').classList.add('highlighted');
      document.getElementById('little-finger-right-purple-6').classList.remove('hidden');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      document.getElementById('little-finger-left-purple-2').classList.remove('hidden');
      break;
    case 'х':
      document.getElementById('letter_х').classList.add('highlighted');
      document.getElementById('little-finger-right-purple-7').classList.remove('hidden');
      break;
    case 'Х':
      document.getElementById('letter_х').classList.add('highlighted');
      document.getElementById('little-finger-right-purple-7').classList.remove('hidden');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      document.getElementById('little-finger-left-purple-2').classList.remove('hidden');
      break;
    case 'ъ':
      document.getElementById('letter_ъ').classList.add('highlighted');
      document.getElementById('little-finger-right-purple-8').classList.remove('hidden');
      break;
    case 'Ъ':
      document.getElementById('letter_ъ').classList.add('highlighted');
      document.getElementById('little-finger-right-purple-8').classList.remove('hidden');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      document.getElementById('little-finger-left-purple-2').classList.remove('hidden');
      break;
    case '\\':
      document.getElementById('letter_slash').classList.add('highlighted');
      document.getElementById('little-finger-right-purple-9').classList.remove('hidden');
      break;
    case '/':
      document.getElementById('letter_slash').classList.add('highlighted');
      document.getElementById('little-finger-right-purple-9').classList.remove('hidden');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      document.getElementById('little-finger-left-purple-2').classList.remove('hidden');
      break;

      // ТРЕТИЙ РЯД КЛАВИАТУРЫ

    case 'ф':
      document.getElementById('letter_ф').classList.add('highlighted');
      document.getElementById('little-finger-left-purple-4').classList.remove('hidden');
      break;
    case 'Ф':
      document.getElementById('letter_ф').classList.add('highlighted');
      document.getElementById('little-finger-left-purple-4').classList.remove('hidden');
      document.getElementById('letter_shift-2-1').classList.add('highlighted');
      document.getElementById('little-finger-right-purple-2').classList.remove('hidden');
      break;
    case 'ы':
      document.getElementById('letter_ы').classList.add('highlighted');
      document.getElementById('ring-finger-left-lilac-3').classList.remove('hidden');
      break;
    case 'Ы':
      document.getElementById('letter_ы').classList.add('highlighted');
      document.getElementById('ring-finger-left-lilac-3').classList.remove('hidden');
      document.getElementById('letter_shift-2-1').classList.add('highlighted');
      document.getElementById('little-finger-right-purple-2').classList.remove('hidden');
      break;
    case 'в':
      document.getElementById('letter_в').classList.add('highlighted');
      document.getElementById('middle-finger-left-green-3').classList.remove('hidden');
      break;
    case 'В':
      document.getElementById('letter_в').classList.add('highlighted');
      document.getElementById('middle-finger-left-green-3').classList.remove('hidden');
      document.getElementById('letter_shift-2-1').classList.add('highlighted');
      document.getElementById('little-finger-right-purple-2').classList.remove('hidden');
      break;
    case 'а':
      document.getElementById('letter_а').classList.add('highlighted');
      document.getElementById('index-finger-orange-5').classList.remove('hidden');
      break;
    case 'А':
      document.getElementById('letter_а').classList.add('highlighted');
      document.getElementById('index-finger-orange-5').classList.remove('hidden');
      document.getElementById('letter_shift-2-1').classList.add('highlighted');
      document.getElementById('little-finger-right-purple-2').classList.remove('hidden');
      break;
    case 'п':
      document.getElementById('letter_п').classList.add('highlighted');
      document.getElementById('index-finger-orange-6').classList.remove('hidden');
      break;
    case 'П':
      document.getElementById('letter_п').classList.add('highlighted');
      document.getElementById('index-finger-orange-6').classList.remove('hidden');
      document.getElementById('letter_shift-2-1').classList.add('highlighted');
      document.getElementById('little-finger-right-purple-2').classList.remove('hidden');
      break;
    case 'р':
      document.getElementById('letter_р').classList.add('highlighted');
      document.getElementById('index-finger-yellow-5').classList.remove('hidden');
      break;
    case 'Р':
      document.getElementById('letter_р').classList.add('highlighted');
      document.getElementById('index-finger-yellow-5').classList.remove('hidden');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      document.getElementById('little-finger-left-purple-2').classList.remove('hidden');
      break;
    case 'о':
      document.getElementById('letter_о').classList.add('highlighted');
      document.getElementById('index-finger-yellow-6').classList.remove('hidden');
      break;
    case 'О':
      document.getElementById('letter_о').classList.add('highlighted');
      document.getElementById('index-finger-yellow-6').classList.remove('hidden');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      document.getElementById('little-finger-left-purple-2').classList.remove('hidden');
      break;
    case 'л':
      document.getElementById('letter_л').classList.add('highlighted');
      document.getElementById('middle-finger-right-green-3').classList.remove('hidden');
      break;
    case 'Л':
      document.getElementById('letter_л').classList.add('highlighted');
      document.getElementById('middle-finger-right-green-3').classList.remove('hidden');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      document.getElementById('little-finger-left-purple-2').classList.remove('hidden');
      break;
    case 'д':
      document.getElementById('letter_д').classList.add('highlighted');
      document.getElementById('ring-finger-right-lilac-3').classList.remove('hidden');
      break;
    case 'Д':
      document.getElementById('letter_д').classList.add('highlighted');
      document.getElementById('ring-finger-right-lilac-3').classList.remove('hidden');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      document.getElementById('little-finger-left-purple-2').classList.remove('hidden');
      break;
    case 'ж':
      document.getElementById('letter_ж').classList.add('highlighted');
      document.getElementById('little-finger-right-purple-10').classList.remove('hidden');
      break;
    case 'Ж':
      document.getElementById('letter_ж').classList.add('highlighted');
      document.getElementById('little-finger-right-purple-10').classList.remove('hidden');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      document.getElementById('little-finger-left-purple-2').classList.remove('hidden');
      break;
    case 'э':
      document.getElementById('letter_э').classList.add('highlighted');
      document.getElementById('little-finger-right-purple-11').classList.remove('hidden');
      break;
    case 'Э':
      document.getElementById('letter_э').classList.add('highlighted');
      document.getElementById('little-finger-right-purple-11').classList.remove('hidden');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      document.getElementById('little-finger-left-purple-2').classList.remove('hidden');
      break;

      // ЧЕТВЕРТЫЙ РЯД КЛАВИАТУРЫ

    case 'я':
      document.getElementById('letter_я').classList.add('highlighted');
      document.getElementById('little-finger-left-purple-5').classList.remove('hidden');
      break;
    case 'Я':
      document.getElementById('letter_я').classList.add('highlighted');
      document.getElementById('little-finger-left-purple-5').classList.remove('hidden');
      document.getElementById('letter_shift-2-1').classList.add('highlighted');
      document.getElementById('little-finger-right-purple-2').classList.remove('hidden');
      break;
    case 'ч':
      document.getElementById('letter_ч').classList.add('highlighted');
      document.getElementById('ring-finger-left-lilac-4').classList.remove('hidden');
      break;
    case 'Ч':
      document.getElementById('letter_ч').classList.add('highlighted');
      document.getElementById('ring-finger-left-lilac-4').classList.remove('hidden');
      document.getElementById('letter_shift-2-1').classList.add('highlighted');
      document.getElementById('little-finger-right-purple-2').classList.remove('hidden');
      break;
    case 'с':
      document.getElementById('letter_с').classList.add('highlighted');
      document.getElementById('middle-finger-left-green-4').classList.remove('hidden');
      break;
    case 'С':
      document.getElementById('letter_с').classList.add('highlighted');
      document.getElementById('middle-finger-left-green-4').classList.remove('hidden');
      document.getElementById('letter_shift-2-1').classList.add('highlighted');
      document.getElementById('little-finger-right-purple-2').classList.remove('hidden');
      break;
    case 'м':
      document.getElementById('letter_м').classList.add('highlighted');
      document.getElementById('index-finger-orange-7').classList.remove('hidden');
      break;
    case 'М':
      document.getElementById('letter_м').classList.add('highlighted');
      document.getElementById('index-finger-orange-7').classList.remove('hidden');
      document.getElementById('letter_shift-2-1').classList.add('highlighted');
      document.getElementById('little-finger-right-purple-2').classList.remove('hidden');
      break;
    case 'и':
      document.getElementById('letter_и').classList.add('highlighted');
      document.getElementById('index-finger-orange-8').classList.remove('hidden');
      break;
    case 'И':
      document.getElementById('letter_и').classList.add('highlighted');
      document.getElementById('index-finger-orange-8').classList.remove('hidden');
      document.getElementById('letter_shift-2-1').classList.add('highlighted');
      document.getElementById('little-finger-right-purple-2').classList.remove('hidden');
      break;
    case 'т':
      document.getElementById('letter_т').classList.add('highlighted');
      document.getElementById('index-finger-yellow-7').classList.remove('hidden');
      break;
    case 'Т':
      document.getElementById('letter_т').classList.add('highlighted');
      document.getElementById('index-finger-yellow-7').classList.remove('hidden');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      document.getElementById('little-finger-left-purple-2').classList.remove('hidden');
      break;
    case 'ь':
      document.getElementById('letter_ь').classList.add('highlighted');
      document.getElementById('index-finger-yellow-8').classList.remove('hidden');
      break;
    case 'Ь':
      document.getElementById('letter_ь').classList.add('highlighted');
      document.getElementById('index-finger-yellow-8').classList.remove('hidden');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      document.getElementById('little-finger-left-purple-2').classList.remove('hidden');
      break;
    case 'б':
      document.getElementById('letter_б').classList.add('highlighted');
      document.getElementById('middle-finger-right-green-4').classList.remove('hidden');
      break;
    case 'Б':
      document.getElementById('letter_б').classList.add('highlighted');
      document.getElementById('middle-finger-right-green-4').classList.remove('hidden');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      document.getElementById('little-finger-left-purple-2').classList.remove('hidden');
      break;
    case 'ю':
      document.getElementById('letter_ю').classList.add('highlighted');
      document.getElementById('ring-finger-right-lilac-4').classList.remove('hidden');
      break;
    case 'Ю':
      document.getElementById('letter_ю').classList.add('highlighted');
      document.getElementById('ring-finger-right-lilac-4').classList.remove('hidden');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      document.getElementById('little-finger-left-purple-2').classList.remove('hidden');
      break;
    case '.':
      document.getElementById('letter_dot').classList.add('highlighted');
      document.getElementById('little-finger-right-purple-12').classList.remove('hidden');
      break;
    case ',':
      document.getElementById('letter_dot').classList.add('highlighted');
      document.getElementById('little-finger-right-purple-12').classList.remove('hidden');
      document.getElementById('letter_shift-1-1').classList.add('highlighted');
      document.getElementById('little-finger-left-purple-2').classList.remove('hidden');
      break;

      // ПРОБЕЛ
    case ' ':
    document.getElementById('letter_space-1').classList.add('highlighted');
    document.getElementById('big-finger-right-gray').classList.remove('hidden');
    break;


    default:
      break;
  }


 





} 

window.onload = () => {
  mainInput.onpaste = e => e.preventDefault();
}






const controlers = document.getElementById('controlers');
const textType = document.getElementById('select');

let oldInput = mainInput.value;
var mistakes = [];
var countIncorrect = 0;


const localCPM = document.getElementById('local-result-cpm');
const localAccuracy = document.getElementById('local-result-accuracy');
const localTime = document.getElementById('local-result-time');

var startTime, endTime;
let key = false;

function start() {
  startTime = new Date();
};

var check = 0;


let timeFlag = false;
mainInput.addEventListener('input', e => {

  if ( key === false ) {
    start();
    key = true;
  }


  if ( mainInput.value.length === 1 ) {
    controlers.classList.remove('visible');
    controlers.classList.add('invisible');
    textType.classList.remove('visible');
    textType.classList.add('invisible');
  }

  for(let i = 1; i < textBox.childNodes.length ; i++)
  {
    if ( textBox.children[0].classList.contains('incorrect') && mainInput.value.length === 2 ) {
      mainInput.value = oldInput;
      break;
    }
    else if ( textBox.children[i].classList.contains('incorrect') && e.data !== null )
    {
      mainInput.value = oldInput;
      break;
    } else {

    }
  }

  



const arrayQuote = textBox.querySelectorAll('span');
const arrayValue = mainInput.value.split('');
  arrayQuote.forEach((characterSpan, index) => {
    const character = arrayValue[index]
    if (character == null) {
      characterSpan.classList.remove('correct');
      characterSpan.classList.remove('incorrect');


    } else if (character === characterSpan.innerText) {
      characterSpan.classList.remove('incorrect');
      characterSpan.classList.add('correct');


    } else if (character !== characterSpan.innerText) {
      characterSpan.classList.remove('correct');
      characterSpan.classList.add('incorrect');


    }
  })

  if (handRuAct) {
    let nextLetter = textBox.innerText[mainInput.value.length];
    
    // else {
    //   nextLetter = '';
    //   // nextLetter = textBox.innerText[mainInput.value.length]
    // }
  
    for(let i = 0; i < 5; i++) {
      for(let j = 0; j < 15; j++) {
        try {
          keyboardRu.children[i].children[j].classList.remove('highlighted');

        } catch (error) {
          break;
        }
      }
    }
    if ( mainInput.value.length >= 1 && textBox.children[mainInput.value.length-1].classList.contains('incorrect') ){
      // nextLetter = textBox.innerText[mainInput.value.length-1];
      highlight('backspace');
      console.log('hello');
    } else {
      highlight(nextLetter);
    }
    // highlight(nextLetter);
  
  } else {
  
  }
  


  for(let i = textBox.childNodes.length - 1; i >= 0; i--) {
      if (textBox.children[i].classList.contains('correct')) {
        mainInput.style.borderBottom = '1px solid #5ee26b';
        textBox.style.border = '1px solid #5ee26b';
      } else if ( textBox.children[i].classList.contains('incorrect') ) {
        mainInput.style.borderBottom = '1px solid #ff0000';
        textBox.style.border = '1px solid #ff0000';
        mistakes.push(i);
      } else if ( mainInput.value.length == '' ) {
        mainInput.style.borderBottom = '1px solid #a9a9a9';
        textBox.style.border = '1px solid #4e4e4e';
      } else if ( mainInput.value.length == 1 && (textBox.innerText[0] == mainInput.value[0]) ) {
        mainInput.style.borderBottom = '1px solid #5ee26b';
        textBox.style.border = '1px solid #5ee26b';
      } else {

        mainInput.style.borderBottom = '1px solid red';
        textBox.style.border = '1px solid red';
      }
  }


  if ( (new Date() - startTime)/1000 >= 300 ) {
    timeFlag = true;
  }
 

oldInput = mainInput.value;


  progressBar.style.width = `${Math.floor((mainInput.value.length/wordLength)*100)}%`;
  

  if (mainInput.value.length >= wordLength || timeFlag === true) {
    document.getElementById('devider').classList.remove('hidden');
  endTime = new Date();
  var timeDiff = endTime - startTime;
  timeDiff /= 1000;

  // Время, затраченное на печать (в секундах)
  var seconds = (Math.round(timeDiff * 100) / 100).toFixed(2);



    mainInput.setAttribute('readonly', 'readonly');
    controlers.classList.remove('invisible');
    controlers.classList.add('visible');
    textType.classList.remove('invisible');
    textType.classList.add('visible');

    //Переход к результатам
    function toResults() {
      $("html, body").animate({ scrollTop: "628px" });
      document.getElementById('results').classList.remove('hidden');

    }
    setTimeout(toResults, 2000);
    let uniqueMistakes = [...new Set(mistakes)];
    let resultText = document.getElementById('result-text');
    resultText.innerHTML = textBox.innerHTML;


    for(let i = 0; i < textBox.childNodes.length; i++) {
      for(let j = 0; j < uniqueMistakes.length; j++) {
        if ( i == uniqueMistakes[j] ) {
          resultText.children[i].classList.add('incorrect');
        }
      }

      if ( resultText.children[i].classList.contains('incorrect') ) {
        countIncorrect++;
      }
    }



    //Высчитываем ЗВМ
    localCPM.innerHTML = `${Math.trunc((textBox.childNodes.length-countIncorrect)/(seconds/60))}`;
    //Подсчет точности
    localAccuracy.innerHTML = `${Math.round((textBox.childNodes.length-countIncorrect)/textBox.childNodes.length * 100) }%`;
    //Затраченное время
    localTime.innerHTML = `${Math.trunc(seconds/60)}:${((seconds%60).toFixed(0)).toString().padStart(2, "0")}`;

    var tempooo = localCPM.innerText;



    document.getElementById('vk_share_button').innerHTML = VK.Share.button({
      url: 'https://dimitris-kidis.github.io/typo/',
      title: `Моя скорость печати — ${localCPM.innerText} знаков в минуту! Попробуй и ты :)`,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNjLKVWf8SMTqFL89o58tpWhcPQgNffkU1EupdkSHTctkKQsQohOblZXBvkJDQgUaKy4I&usqp=CAU'
    }, {type: 'custom', text: '<img src="https://upload.wikimedia.org/wikipedia/commons/2/21/VK.com-logo.svg" style="width: 43px" />'});




    const telegram = document.getElementById('telegram');
    const pageUrl = location.href;
    const message = `Моя скорость печати — ${localCPM.innerText} знаков в минуту! Попробуй и ты :)`;
    const telegramApi = `https://t.me/share/url?url=${pageUrl}&text=${message}`;

    telegram.addEventListener('click', () => {
      window.open(url = telegramApi, target='blank')
    })




    if ( parseInt(localCPM.innerText) > parseInt(localStorage.getItem('fastestCPM')) ) {
      localStorage.setItem('fastestCPM', JSON.stringify(parseInt(localCPM.innerText)));

    }

    if ( parseInt(textBox.innerText.length) > parseInt(localStorage.getItem('longestText')) ) {
      localStorage.setItem('longestText', JSON.stringify(parseInt(textBox.innerText.length)));

    }



    let tmp2 = parseInt(localStorage.getItem('textCount'));
    localStorage.setItem('textCount', JSON.stringify(tmp2 + 1));




    let wow;
    parseInt(JSON.parse(localStorage.getItem('textCount'))) === 1 ? wow = (parseInt(localAccuracy.innerText) + averageAccuracy )/1 : wow = (parseInt(localAccuracy.innerText) + averageAccuracy )/2;
    localStorage.setItem('averageAccuracy', JSON.stringify(Math.round(wow)));


    resultText.innerHTML += `  —  автор`;


    let now = [];
    let arr = [];
    let temp = [];

    if ( (JSON.parse(localStorage.getItem('labels'))).length > 0 && (JSON.parse(localStorage.getItem('labels'))).length != 7 ) {
      temp = (JSON.parse(localStorage.getItem('labels')));
      temp.push(new Date().getDate()+'-'+(new Date().getMonth()+1)+'-'+new Date().getFullYear());
      now = temp;
    } else if ( (JSON.parse(localStorage.getItem('labels'))).length === 7 ) {
      temp = (JSON.parse(localStorage.getItem('labels')));
      temp.shift();
      temp.push(new Date().getDate()+'-'+(new Date().getMonth()+1)+'-'+new Date().getFullYear());
      now = temp;
    } else {
      now = [new Date().getDate()+'-'+(new Date().getMonth()+1)+'-'+new Date().getFullYear()];
    }
    localStorage.setItem('labels', JSON.stringify(now));

    if ( (JSON.parse(localStorage.getItem('mas'))).length > 0 && (JSON.parse(localStorage.getItem('mas'))).length != 7 ) {
      temp = (JSON.parse(localStorage.getItem('mas')));
      temp.push(parseInt(localCPM.innerText));
      arr = temp;
    } else if ( (JSON.parse(localStorage.getItem('mas'))).length === 7 ) {
      temp = (JSON.parse(localStorage.getItem('mas')));
      temp.shift();
      temp.push(parseInt(localCPM.innerText));
      arr = temp;
    } else {
      arr = [parseInt(localCPM.innerText)];
    }
    localStorage.setItem('mas', JSON.stringify(arr));

    
    // if ( (JSON.parse(localStorage.getItem('labels'))).length > 0 ) {
    //   temp = (JSON.parse(localStorage.getItem('labels')));
    //   temp.push(new Date().getDate()+'-'+(new Date().getMonth()+1)+'-'+new Date().getFullYear());
    //   now = temp;
    // } else if ( (JSON.parse(localStorage.getItem('labels'))).length > 0 === 7 ) {
    //   temp = (JSON.parse(localStorage.getItem('labels')));
    //   temp.shift();
    //   temp.push(new Date().getDate()+'-'+(new Date().getMonth()+1)+'-'+new Date().getFullYear());
    //   now = temp;
    // } else {
    //   now = [new Date().getDate()+'-'+(new Date().getMonth()+1)+'-'+new Date().getFullYear()];
    // }
    // localStorage.setItem('labels', JSON.stringify(now));

    // if ( (JSON.parse(localStorage.getItem('mas'))).length > 0 ) {
    //   temp = (JSON.parse(localStorage.getItem('mas')));
    //   temp.push(parseInt(localCPM.innerText));
    //   arr = temp;
    // } else if ( (JSON.parse(localStorage.getItem('mas'))).length > 0 === 7 ) {
    //   temp = (JSON.parse(localStorage.getItem('mas')));
    //   temp.shift();
    //   temp.push(parseInt(localCPM.innerText));
    //   arr = temp;
    // } else {
    //   arr = [parseInt(localCPM.innerText)];
    // }
    // localStorage.setItem('mas', JSON.stringify(arr));


    // (JSON.parse(localStorage.getItem('labels'))).length >= 1 ? now = (JSON.parse(localStorage.getItem('labels'))).push(new Date().getDate()+'-'+(new Date().getMonth()+1)+'-'+new Date().getFullYear()) : now = [new Date().getDate()+'-'+(new Date().getMonth()+1)+'-'+new Date().getFullYear()];
    // localStorage.setItem('labels', JSON.stringify(now));



    // (JSON.parse(localStorage.getItem('mas'))).length >= 1 ? arr = (JSON.parse(localStorage.getItem('mas'))).push(parseInt(localCPM.innerText)) : arr = [parseInt(localCPM.innerText)];
    // localStorage.setItem('mas', JSON.stringify(arr));


  }



  if ( mainInput.value.length === 0 && themeFlag === false ) {
    textBox.style.border = '1px solid white';
  }  
})

averageAccuracy = parseInt(JSON.parse(localStorage.getItem('averageAccuracy')));

const restart = document.getElementById('restart');

restart.addEventListener('click', () => {
  window.localStorage.clear();
  location.reload();
})




const data = {
  labels: labels,
  datasets: [{
    label: ' ',
    backgroundColor: 'rgb(0, 231, 71)',
    borderColor: 'rgb(0, 231, 71)',
    data: mas,
    tension: 0.2
  }]
};

const config = {
  type: 'line',
  data: data,
  options: {
    plugins:{   
      legend: {
        display: false
              },
           },
  }
};

const myChart = new Chart(
  document.getElementById('myChart'),
  config
);


const labels2 = [JSON.parse(localStorage.getItem('fastestCPM')), JSON.parse(localStorage.getItem('averageAccuracy'))];


const data2 = {
  labels: ['', ''],
  datasets: [{
    label: ' ',
    data: [JSON.parse(localStorage.getItem('fastestCPM')), JSON.parse(localStorage.getItem('averageAccuracy'))],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
};

const config2 = {
  type: 'bar',
  data: data2,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    },
    plugins:{   
      legend: {
        display: false
              }
            }
  },
};

const myChart2 = new Chart(
  document.getElementById('myChart2'),
  config2
);