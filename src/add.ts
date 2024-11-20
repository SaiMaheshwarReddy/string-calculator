export function add(numStr: string): number {
  const regex = /(\\n)*[,]*/gm;
  const numStrWithoutDelimiters = numStr.replaceAll(regex, "");
  const numbers = numStrWithoutDelimiters.split("").map(Number);
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return isNaN(sum) ? 0 : sum;
}
