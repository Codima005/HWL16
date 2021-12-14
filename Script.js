const BlockDiv = document.querySelector(".block");
console.dir(BlockDiv);

// COLOR

let letters = `ABCDEF`;
const NumbersRandom = () => Math.floor(Math.random() * 9);
const LettersRandom = () =>
  letters[Math.floor(Math.random() * (letters.length - 1) + 1)];

const GetRandomColor = () => {
  let numbersPArt = [];

  for (let i = 0; i <= 2; i++) numbersPArt.push(NumbersRandom());

  let lettersPart = [];
  for (let i = 0; i <= 2; i++) lettersPart.push(LettersRandom());

  return `#${lettersPart.join(``)}${numbersPArt.join(``)}`;
};

setInterval(() => (BlockDiv.style.backgroundColor = GetRandomColor()), 500);

// COORDINATES

const TopValue = () =>
  `${Math.floor(Math.random() * (window.innerHeight - 100))}px`;
const LeftValue = () =>
  `${Math.floor(Math.random() * (window.innerWidth - 100))}px`;

setInterval(() => {
  BlockDiv.style.top = TopValue();
  BlockDiv.style.left = LeftValue();
}, 500);



