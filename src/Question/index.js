import { template } from './template';

export const Question = (question, options, correctOption) => {
  const render = () => template(question, options);

  return { render };
};
