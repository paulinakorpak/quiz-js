import { questionsList } from './questions';
import { Question } from '../Question';
import { Progress } from '../Progress';

export const Quiz = (element) => {
  const state = {
    section: null,
    question: null,
    points: 0,
  };

  let button;
  let questions;

  const init = () => {
    showSection('welcome');
    questions = createQuestions();

    button = queryButton();
    button.addEventListener('click', goNext);
  };

  const queryButton = () => element.querySelector('button');

  const showSection = (section) => {
    const sections = Array.from(element.querySelectorAll('section'));
    sections.map((element) => element.classList.add('d-none'));

    const currentSection = element.querySelector(`#${section}`);
    currentSection.classList.remove('d-none');

    state.section = section;
  };

  const createQuestions = () => questionsList.map((questionItem) => {
    const { question, options, correctOption } = questionItem;
    return Question(question, options, correctOption, addPoint);
  });

  const addPoint = () => {
    state.points++;
  };

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
        showPoints();
        hideButton();
      }
    }
  };

  const showNextQuestion = () => {
    state.question = state.question === null ? 0 : state.question + 1;

    const section = element.querySelector('#questions');
    const question = questions[state.question];

    question.render(section);
    showProgress();
  };

  const showProgress = () => {
    const progress = ((state.question + 1) / questionsList.length) * 100;
    const section = element.querySelector('#questions');

    const progressElement = Progress(progress).render();
    section.insertAdjacentHTML('afterbegin', progressElement);
  };

  const showPoints = () => {
    const resultElement = element.querySelector('.points');
    resultElement.innerHTML = state.points;
  };

  const changeButtonText = (text) => {
    button.textContent = text;
  };

  const hideButton = () => {
    button.classList.add('d-none');
  };

  return { init };
};
