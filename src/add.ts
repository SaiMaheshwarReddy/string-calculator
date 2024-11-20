export function add(str: string): number {
  // get custom delimiter from input string eg output: [//;\n]
  const delimiter = str.match(/\/\/[.?;*\-+=]+\\n/gm);

  // using matchAll to capture the groups eg fo this //;\n33;4 we can capture ;
  const delimiterMatchers = delimiter
    ? [...delimiter[0].matchAll(/\/\/(.*)\\n/gm)]
    : null;

  let delimiterVal = "";
  if (delimiterMatchers) {
    delimiterVal = delimiterMatchers[0][1];
  }
  const inputNumStr = str.slice(delimiter ? delimiter[0].length : 0);

  // default delimiters
  const delimiters = [",", "\\n"];

  // adding custom delimiter to the default delimiters
  if (delimiterVal) {
    delimiters.push(delimiterVal);
  }
  // temp variable to accumulate current digits Eg: //;\n33;4 for this it stores 33
  let currNumber = "";
  let sum = 0;
  let negativeNumbers: string = "";
  for (let i = 0; i < inputNumStr.length; i++) {
    let isDelimiter = false;
    // find delimiter and skip the loop to the end of delimiter
    for (let j = 0; j < delimiters.length; j++) {
      if (delimiters[j] === inputNumStr.slice(i, delimiters[j].length + i)) {
        isDelimiter = true;
        i += delimiters[j].length - 1;
        break;
      }
    }

    // if delimiter was found add currNumber to the sum
    if (isDelimiter && currNumber !== "") {
      const num = Number(currNumber);
      if (num < 0) {
        negativeNumbers += " " + currNumber;
      }
      sum += num;
      currNumber = "";
    } else {
      // if current char is not part of delimiter store it in temp variable currNumber
      if (inputNumStr[i] === "-" || !isNaN(Number(inputNumStr[i]))) {
        currNumber += inputNumStr[i];
      } else {
        throw new Error("Invalid input");
      }
    }
  }
  // after the last delimiter the currentNumber can be added to sum
  if (currNumber !== "") {
    const num = Number(currNumber);
    if (num < 0) {
      negativeNumbers += " " + currNumber;
    }
    sum += num;
  }

  if (negativeNumbers.length > 0) {
    throw new Error(`negative numbers no allowed${negativeNumbers}`);
  }

  return sum;
}
