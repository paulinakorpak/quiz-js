import { template } from './template';

export const Progress = (progress) => {
  const render = () => template(progress);

  return { render };
};
