/////////////  ВЕРХНІЙ СЛАЙДЕР  //////////////

let left = 0;
let timer;

function autoSlider() {

  timer = setTimeout( () => {

    let line = document.querySelector(".top-slider-line");
    left -= 100;

    if (left < -300){
      left = 0;
    }

    line.style.left = left + '%'; //  я в ccs змінюю параметр left, але без position не буде працювати
    autoSlider();

  },3000)
}

autoSlider();

/////////////  ВЕРХНІЙ СЛАЙДЕР КІНЕЦЬ  //////////////

/////////////  ПІДКРЕСЛЕННЯ  //////////////

let listMenu = document.querySelectorAll('nav.navigation > ul > li > a');

listMenu.forEach((value, ind) => {
  value.addEventListener('click', () => {
    removeLine();
    value.classList.add('onclick-menu-list');
  });
});

function removeLine(){
  listMenu.forEach(value => {
    value.classList.remove('onclick-menu-list');
  })
}

/////////////  ПІДКРЕСЛЕННЯ КІНЕЦЬ  //////////////

//////////////// SLIDER OUR-WORKS/////////

let horisontalSlider = document.getElementById('wrap-horisontal-slider');
let arrowLeft = document.getElementById('arrow-left');
let arrowRight = document.getElementById('arrow-right');
let counter = 0;

////points
let pointsArray = document.querySelectorAll('.buttons-control .points > div.point');
let activePoint = document.querySelector('.buttons-control .active-point');
const indicatorParents = document.querySelector('.buttons-control .points');
////points end

////////////////////small
let smallPolosa = document.querySelector('.wrap-small-pictures');
let topCounter = -33;
///////////small end

//////////////////////////////////points
pointsArray.forEach((indicator, ind) => {  // indicator -то ніби value елемент масива, ind - індекси масива
  indicator.addEventListener('click', () => {
    //ind = ind * -100; // множу на -100 бо 100% то моя ширина, а мінус бо рухатися має в ліво, НАЖАЛЬ погано рацює
    counter = ind * -100; // треба тримати зв'язок з counter  !!!  ТЕПЕР ПРАЦЮЄ
    document.querySelector('.buttons-control .active-point').classList.remove('active-point');
    indicator.classList.add('active-point');
    horisontalSlider.style.left = counter + '%';
  })
});
///////////////////points end

arrowRight.addEventListener('click', () => {
  counter -= 100;

  if (counter < -300) {
    counter = 0;
  }

///////////points
  document.querySelector('.buttons-control .active-point').classList.remove('active-point');
  document.querySelector('.points').children[counter / -100].classList.add('active-point');
////////////////// points end
  smallPictures();

  horisontalSlider.style.left = counter + '%';

});

arrowLeft.addEventListener('click', () => {
  counter += 100;

  if (counter > 0) {
    counter = -300
  }

  ////////////////points
  document.querySelector('.buttons-control .active-point').classList.remove('active-point');
  indicatorParents.children[counter / -100].classList.add('active-point');
////////////////// points end
  smallPictures();

  horisontalSlider.style.left = counter + '%';

});


function smallPictures() {

  if (counter === -300){
    topCounter = 0;
  } else if (counter === 0) {
    topCounter = -33
  }

  smallPolosa.style.top = topCounter + '%' ;
}

//////////////// SLIDER OUR-WORKS END/////////

//////////////// REPORTS/////////

let lineReport = document.getElementById('wrap-report-slider-line');
let arrowLeftReport = document.getElementById('arrow-left-report');
let arrowRightReport = document.getElementById('arrow-right-report');
const indicatorParentsReport = document.querySelector('.arrow-btns-reports div.points-report');
let reportCounter = 0;

/////////////points Report
document.querySelectorAll('.arrow-btns-reports div.point').forEach((indicator, ind) => {
  indicator.addEventListener('click', () => {
    reportCounter = ind * -100;
    setReportCounter();
    indicator.classList.add('active-point-report');
    // lineReport.style.left = reportCounter + '%'

  });
});

/////////////points Report end


arrowRightReport.addEventListener('click', () => {
  reportCounter -= 100;

  if (reportCounter < -300) {
    reportCounter = 0;
  }

  ///////////points
  setReportCounter();
  indicatorParentsReport.children[reportCounter / -100].classList.add('active-point-report');
  ////////////////// points end
});

arrowLeftReport.addEventListener('click', () => {
  reportCounter += 100;

  if (reportCounter > 0) {
    reportCounter = -300;
  }
///////////points
  setReportCounter();
  indicatorParentsReport.children[reportCounter / -100].classList.add('active-point-report');
///////////////// points end
});

function setReportCounter() {
  document.querySelector('.points-report div.active-point-report').classList.remove('active-point-report');
  lineReport.style.left = reportCounter + '%';
}
//////////////// REPORTS END/////////

/////////////////////BUGER//////////////////////////////

let burgerButton = document.querySelector('.burger-menu-button');
let wrapBurger = document.querySelector('.burger-menu');

burgerButton.addEventListener('click', () => {
  wrapBurger.classList.toggle('burger-menu-active');
});

/////////////////////BUGER end//////////////////////////////

