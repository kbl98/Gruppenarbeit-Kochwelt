"use strict";

let f = 4;
function calculate() {
  let Z = Number(document.getElementById("input").value);
  let roundNumb = Number.isInteger(Z);
  if (roundNumb == true && Z > 0) {
    for (let i = 1; i < 8; i++) {
      let M1 = Number(document.getElementById("z" + i).innerHTML) / f;
      let MP = Z * M1;
      document.getElementById("z" + i).innerHTML = `${MP}`;
    }
    f = Z;
  } else {
    alert("Geben Sie bitte eine ganze Zahl grösser Null ein!");
    document.getElementById("input").value = f;
  }
  return f;
}
