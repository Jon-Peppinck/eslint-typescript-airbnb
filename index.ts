/* eslint-disable */

const x = 5;

/* eslint-enable */
const y = 6;

/* eslint-disable no-console */
console.log(7);
/* eslint-enable no-console */

/* eslint-disable-next-line no-console */
console.log(7);

console.log(7); /* eslint-disable-line */

/* eslint-disable-next-line @typescript-eslint/no-unused-vars, no-shadow */
function add(x: number, y: number): number {
  return x + y;
}
