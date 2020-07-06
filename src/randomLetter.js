const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
export const randomLetter = () => {
  return letters.substr(Math.round(Math.random() * letters.length), 1);
};
