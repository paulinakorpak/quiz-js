import { template } from './template';

export const Question = (question, options, correctOption, addPoint) => {
  let radioButtons;

  const render = (element) => {
    element.innerHTML = template(question, options);

    radioButtons = element.querySelectorAll('input');
    Array.from(radioButtons).map((radio) => radio.addEventListener('change', checkAnswer));
  };

  const checkAnswer = (e) => {
    const answer = e.target.value;

    Array.from(radioButtons).map((radioButton) => {
      radioButton.disabled = true;

      if (radioButton.value === correctOption) {
        markAnswer(radioButton, true);

        if (radioButton.value === answer) {
          addPoint();
        }
      } else if (radioButton.value === answer) {
        markAnswer(radioButton, false);
      }
    });
  };

  const markAnswer = (radioButton, isCorrect) => {
    const className = isCorrect ? 'text-info' : 'text-danger';
    radioButton.closest('li').querySelector('label').classList.add(className);
  };

  return { render };
};
