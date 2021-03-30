export const Quiz = (element) => {
  const state = {
    section: null,
    question: null,
  };

  let button;

  const init = () => {
    showSection('welcome');

    button = queryButton();
    button.addEventListener('click', goNext);
  };

  const showSection = (section) => {
    const sections = Array.from(element.querySelectorAll('section'));
    sections.map((element) => element.classList.add('d-none'));

    const currentSection = element.querySelector(`#${section}`);
    currentSection.classList.remove('d-none');

    state.section = section;
  };

  const queryButton = () => element.querySelector('button');

  const goNext = () => {
    if (state.section === 'welcome') {
      showSection('questions');
      changeButtonText('Dalej');
    } else if (state.section === 'questions') {
      showSection('result');
      hideButton();
    }
  };

  const changeButtonText = (text) => {
    button.textContent = text;
  };

  const hideButton = () => {
    button.classList.add('d-none');
  };

  return { init };
};
