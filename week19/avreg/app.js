const mavote = [35, 7, 24, 40, 61, 23];
const mgamot = [35, 61, 68, 92, 79, 77, 48, 85, 50, 45, 90, 100];
const greeds = [ 35, 7, 24, 40, 61, 23, 35, 61, 68, 92, 79, 77, 48, 85, 50, 45, 90, 100 ];

const initialValue = 0;
const sumWithInitial = mgamot.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial / mgamot.length);
