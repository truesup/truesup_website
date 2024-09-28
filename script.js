const hardSkillsBtn = document.getElementById('skills-hard-arrow');
const hardSkillsDivider = document.querySelector('.skills-hard-divider');
const hardSkillsList = document.querySelector('.skills-hard-list');

const softSkillsBtn = document.getElementById('skills-soft-arrow');
const softSkillsDivider = document.querySelector('.skills-soft-divider');
const softSkillsList = document.querySelector('.skills-soft-list');

// Общая функция для обработки клика на кнопку
function toggleSkills(button, divider, list, height) {
  const isOpen = button.style.transform === 'rotate(90deg)';

  // Закрываем другие секции, если текущая открыта
  if (!isOpen) {
    // Закрываем hard skills, если soft skills открыты
    if (softSkillsBtn.style.transform === 'rotate(90deg)') {
      softSkillsBtn.style.transform = 'rotate(0deg)';
      softSkillsDivider.style.height = '3px';
      softSkillsDivider.style.paddingBlock = '0px';
      softSkillsList.classList.add('visually-hidden');
    }

    // Закрываем soft skills, если hard skills открыты
    if (hardSkillsBtn.style.transform === 'rotate(90deg)') {
      hardSkillsBtn.style.transform = 'rotate(0deg)';
      hardSkillsDivider.style.height = '3px';
      hardSkillsDivider.style.paddingBlock = '0px';
      hardSkillsList.classList.add('visually-hidden');
    }
  }

  // Меняем состояние кнопки и стиль делителя
  button.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(90deg)';
  divider.style.height = isOpen ? '3px' : height;
  divider.style.paddingBlock = isOpen ? '0px' : '10px';

  // Управляем видимостью списка
  list.classList.toggle('visually-hidden', isOpen);
}

// Добавляем обработчики событий
hardSkillsBtn.addEventListener('click', () =>
  toggleSkills(hardSkillsBtn, hardSkillsDivider, hardSkillsList, '390px')
);
softSkillsBtn.addEventListener('click', () =>
  toggleSkills(softSkillsBtn, softSkillsDivider, softSkillsList, '380px')
);
