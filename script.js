// slider 
const SLIDER = document.getElementById('left-cursor');
const SLIDER2 = document.getElementById('right-cursor');
const SLIDE = document.getElementById('slider');

SLIDER.onclick = SLIDER.onclick = function(){
    SLIDE.classList[1] === 'opacity0' ? SLIDE.classList.remove('opacity0') : SLIDE.classList.add('opacity0');
    
};


//change screens 
const BLACK_BUTTON1 = document.getElementById('black-button');
const BLACK_BUTTON2 = document.getElementById('black-button-2');
const BLACK_SCREEN_1 = document.getElementById('screen-black1');
const BLACK_SCREEN_2 = document.getElementById('screen-black2');

BLACK_BUTTON1.onclick = function(){
    BLACK_SCREEN_1.classList[1] === 'opacity0' ? BLACK_SCREEN_1.classList.remove('opacity0'): BLACK_SCREEN_1.classList.add('opacity0');
}

BLACK_BUTTON2.onclick = function(){
    BLACK_SCREEN_2.classList[1] === 'opacity0' ? BLACK_SCREEN_2.classList.remove('opacity0'): BLACK_SCREEN_2.classList.add('opacity0');
}


// portfolio -  change places
const FILTER_BUTTONS = document.querySelectorAll(".portfolio__nav-el")

for (let filterButton of FILTER_BUTTONS) {
  filterButton.addEventListener("click", shufflePortfolio)
}

function shufflePortfolio(event) {
  if (event.target.classList.contains("portfolio__nav-el_active")) return
  const portfolioPhotos = document.getElementById("works__wrapper")

  let shuffledPortfolioPhotos = document.createElement("div")
  shuffledPortfolioPhotos.className = "works__wrapper"
  shuffledPortfolioPhotos.id = "works__wrapper"

  const portfolio = Array.from(
    portfolioPhotos.querySelectorAll(".portfolio__item")
  )

  for (let i = portfolio.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    const temp = portfolio[j]
    portfolio[j] = portfolio[i]
    portfolio[i] = temp
  }
  for (let item of portfolio) {
    shuffledPortfolioPhotos.append(item)
  }

  portfolioPhotos.replaceWith(shuffledPortfolioPhotos)
}

// portfolio line 

const projectLinks = document.querySelectorAll(".portfolio__item")
for (let link of projectLinks) {
  link.addEventListener("click", portfolioClickHandler)
}

function portfolioClickHandler(event) {
  event.preventDefault()

  const projectLink = event.target.parentNode
  if (projectLink.classList.contains("portfolio__item")) {
    projectLinks.forEach(item => {
      item.classList.remove("portfolio__item_active");
		
    })
    projectLink.classList.add("portfolio__item_active")
	  
  }
}



// navigation
 const MENU = document.getElementById('nav');


MENU.addEventListener('click', (event) => {
	MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
	event.target.classList.add('active');
})	


// form
const FORM = document.getElementById('form');
FORM.addEventListener('submit', (event) => {
  event.preventDefault();
  let formSubject =  document.querySelector('.quote__input-subject');
  let formDetail =  document.querySelector('.quote__input-description');

  let pop_up_subject_area = document.querySelector('.output__message_subject');
  let pop_up_text_area = document.querySelector('.output__message_text');

  if (formSubject.value == '') {
    pop_up_subject_area.innerHTML = 'Без темы';
  } else {
    pop_up_subject_area.innerHTML ='Тема: ' + formSubject.value;
  }

  if (formDetail.value == '') {
    pop_up_text_area.innerHTML = 'Без описания';
  } else {
    pop_up_text_area.innerHTML = 'Описание: ' + formDetail.value;
  }
  document.querySelector('.output__message').style.display = 'block';
}); 

function output__message_ok_btn() {
  document.getElementById('form').reset();
  document.querySelector('.output__message').style.display = 'none';
}













