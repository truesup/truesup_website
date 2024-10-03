// skills
const hardSkillsTop = document.querySelector('.skills-hard-top');
const hardSkillsBtn = document.getElementById('skills-hard-arrow');
const hardSkillsDivider = document.querySelector('.skills-hard-divider');
const hardSkillsList = document.querySelector('.skills-hard-list');

const softSkillsTop = document.querySelector('.skills-soft-top');
const softSkillsBtn = document.getElementById('skills-soft-arrow');
const softSkillsDivider = document.querySelector('.skills-soft-divider');
const softSkillsList = document.querySelector('.skills-soft-list');

function toggleSkills(button, divider, list, height) {
  const isOpen = button.style.transform === 'rotate(90deg)';

  if (!isOpen) {
    if (softSkillsBtn.style.transform === 'rotate(90deg)') {
      softSkillsBtn.style.transform = 'rotate(0deg)';
      softSkillsDivider.style.height = '3px';
      softSkillsDivider.style.paddingBlock = '0px';
      softSkillsList.classList.add('visually-hidden');
    }

    if (hardSkillsBtn.style.transform === 'rotate(90deg)') {
      hardSkillsBtn.style.transform = 'rotate(0deg)';
      hardSkillsDivider.style.height = '3px';
      hardSkillsDivider.style.paddingBlock = '0px';
      hardSkillsList.classList.add('visually-hidden');
    }
  }

  button.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(90deg)';
  divider.style.height = isOpen ? '3px' : height;
  divider.style.paddingBlock = isOpen ? '0px' : '10px';

  list.classList.toggle('visually-hidden', isOpen);
}

hardSkillsTop.addEventListener('click', () =>
  toggleSkills(hardSkillsBtn, hardSkillsDivider, hardSkillsList, '390px')
);
softSkillsTop.addEventListener('click', () =>
  toggleSkills(softSkillsBtn, softSkillsDivider, softSkillsList, '380px')
);

// slider
const slides = document.querySelectorAll('.slides img');
let slideIndex = 0;
let intervalId = null;

initializeSlider();
function initializeSlider() {
  if (slides.length > 0) {
    slides[slideIndex].classList.add('displaySlide');
  }
}

function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach((slide) => {
    slide.classList.remove('displaySlide');
  });
  slides[slideIndex].classList.add('displaySlide');
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

// modal window
const modal = document.getElementById('modal');
const modalText = document.getElementById('modal-text');
const modalGif = document.getElementById('modal-gif');
const modalUrl = document.getElementById('modal-url');

function openModal(content, gifUrl, githubUrl) {
  modal.style.display = 'block';
  modalText.innerText = content;
  modalGif.src = gifUrl;
  modalUrl.href = githubUrl;
}

function closeModal() {
  modal.style.display = 'none';
}

// color change
const root = document.documentElement;

root.style.setProperty('--color-substrate', '#213140');
root.style.setProperty('--color-main', '#73a2bf');
root.style.setProperty('--color-accent', '#f9f9ff');

const btnBlue = document.querySelector('.color-settings-blue');
const btnLight = document.querySelector('.color-settings-light');
const btnDark = document.querySelector('.color-settings-dark');

function changeColorScheme(substrate, main, accent) {
  root.style.setProperty('--color-substrate', substrate);
  root.style.setProperty('--color-main', main);
  root.style.setProperty('--color-accent', accent);
}

btnBlue.addEventListener('click', () => {
  changeColorScheme('#213140', '#73a2bf', '#f9f9ff');
});
btnLight.addEventListener('click', () => {
  changeColorScheme('#fffafa', '#e8e8e8', '#e2e8e7');
});
btnDark.addEventListener('click', () => {
  changeColorScheme('#1a1e26', '#6e7371', '#a1a69c');
});
