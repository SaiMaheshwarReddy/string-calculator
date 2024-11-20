import { add } from "./add";

const input = document.getElementById("input") as HTMLInputElement;
const btn = document.getElementById("btn") as HTMLButtonElement;
const outputEl = document.getElementById("output") as HTMLHeadingElement;

btn.addEventListener("click", () => {
  console.log("dsd");
  const output = add(input.value);
  outputEl.innerText = String(output);
});
