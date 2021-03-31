import { questionsList } from './questions';
import { Question } from '../Question';

export const Quiz = (element) => {
  const state = {
    section: null,
    question: null,
  };

  let button;
  let questions;

  const init = () => {
    showSection('welcome');
    questions = createQuestions();

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

  const createQuestions = () => questionsList.map((questionItem) => {
    const { question, options, correctOption } = questionItem;
    return Question(question, options, correctOption);
  });

  const queryButton = () => element.querySelector('button');

  const goNext = () => {
    if (state.section === 'welcome') {
      showSection('questions');
      changeButtonText('Dalej');
      showNextQuestion();
    } else if (state.section === 'questions') {
      if (state.question < questions.length - 1) {
        showNextQuestion();
      } else {
        showSection('result');
        hideButton();
      }
    }
  };

  const showNextQuestion = () => {
    state.question = state.question === null ? 0 : state.question + 1;

    const section = element.querySelector('#questions');
    const question = questions[state.question];

    section.innerHTML = question.render();
  };

  const changeButtonText = (text) => {
    button.textContent = text;
  };

  const hideButton = () => {
    button.classList.add('d-none');
  };

  return { init };
};
