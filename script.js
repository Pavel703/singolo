// slider 
const ELEM = document.getElementById('left-cursor');
const ELEM2 = document.getElementById('right-cursor');
const SLIDER = document.getElementById('slider');

ELEM.onclick = ELEM2.onclick = function(){
    SLIDER.classList[1] === 'opacity0' ? SLIDER.classList.remove('opacity0') : SLIDER.classList.add('opacity0');
    
};


//change screens 
const Iclick1 = document.getElementById('black-button');
const Iclick2 = document.getElementById('black-button-2');
const Screen1 = document.getElementById('screen-black1');
const Screen2 = document.getElementById('screen-black2');

Iclick1.onclick = function(){
    Screen1.classList[1] === 'opacity0' ? Screen1.classList.remove('opacity0'): Screen1.classList.add('opacity0');
}

Iclick2.onclick = function(){
    Screen2.classList[1] === 'opacity0' ? Screen2.classList.remove('opacity0'): Screen2.classList.add('opacity0');
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

  let pop_up_subject_area = document.querySelector('.pop_up_subject');
  let pop_up_text_area = document.querySelector('.pop_up_text');

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
  document.querySelector('.pop_up_msg').style.display = 'block';
}); 

function pop_up_ok_btn() {
  document.getElementById('form').reset();
  document.querySelector('.pop_up_msg').style.display = 'none';
}













