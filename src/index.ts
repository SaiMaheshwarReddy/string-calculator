import { add } from "./add";

const input = document.getElementById("input") as HTMLInputElement;
const btn = document.getElementById("btn") as HTMLButtonElement;
const outputEl = document.getElementById("output") as HTMLHeadingElement;

btn.addEventListener("click", () => {
  console.log("dsd");
  try {
    const output = add(input.value);
    outputEl.style.color = "black";
    outputEl.innerText = "Output: " + String(output);
  } catch (err) {
    if (err instanceof Error) {
      outputEl.style.color = "red";
      outputEl.innerText = "Error: " + String(err.message);
    }
  }
});
