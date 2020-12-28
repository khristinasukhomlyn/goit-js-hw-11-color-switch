const colors = [
'#FFFFFF',
'#2196F3',
'#4CAF50',
'#FF9800',
'#009688',
'#795548',
];

const refs = {
  bodyRef: document.querySelector('body'),
  buttonStartRef: document.querySelector('button[data-action = start]'),
  buttonStopRef: document.querySelector('button[data-action = stop]'),
};

refs.buttonStartRef.addEventListener('click', onButtonStart);
refs.buttonStopRef.addEventListener('click', onButtonStop);

let colorPlant;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function onButtonStart() {
  colorPlant = setInterval(() => {
    refs.bodyRef.style.backgroundColor = bodyColors[randomIntegerFromInterval(0, 5)];
  }, 1000);
  refs.buttonStartRef.disabled = true;
}

function onButtonStop() {
  clearInterval(colorPlant);
  refs.buttonStartRef.disabled = false;
}

