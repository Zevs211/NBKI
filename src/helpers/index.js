export const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}
export const getRandomFloat = (min, max) => {
  let num = Math.random() * (max - min) + min;
  return +num.toFixed(2);
}