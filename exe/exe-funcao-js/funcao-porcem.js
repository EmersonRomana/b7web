function calcPct(n1, n2) {
  let pct = (n2 / n1) * 100;
  return pct;
}

let x = 40;
let y = 10;
let pct = calcPct(x, y);
console.log(`${pct}% de ${x} é ${y}`);
