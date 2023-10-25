const beeps = process.argv.splice(2);

if (beeps.length === 0) {
  return;
}
//to make array in ascending order
for (let i = 0; i < beeps.length; i++) {
  beeps[i] = Number(beeps[i]);
}

for (let i = 0; i < beeps.length - 1; i++) {
  for (let j = 1 + i; j < beeps.length; j++) {
    if (beeps[i] > beeps[j]) {
      let temp = beeps[i];
      beeps[i] = beeps[j];
      beeps[j] = temp;
    }
  }
}

let beep = [];

for (let i = 0; i < beeps.length; i++) {
  if (!isNaN(beeps[i]) || beeps[i] > 0) {
    beep.push(beeps[i]);
  }
}

//iterate over beeps
let count = 2000;

for (let i = 0; i < beep.length; i++) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, beep[i] * count)
}


console.log(beep)