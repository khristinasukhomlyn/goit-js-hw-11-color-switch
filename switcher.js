const colors = [
'#FFFFFF',
'#2196F3',
'#4CAF50',
'#FF9800',
'#009688',
'#795548',
];

const refs = {
  bodyRef: document.body,
  buttonStartRef: document.querySelector('button[data-action = start]'),
  buttonStopRef: document.querySelector('button[data-action = stop]'),
};

refs.buttonStartRef.addEventListener('click', onButtonStart);
refs.buttonStopRef.addEventListener('click', onButtonStop);

let colorPlant = null;


function onButtonStart() {
  colorPlant = setInterval(() => {
    console.log("Start");
    refs.bodyRef.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 1000);
  refs.buttonStartRef.disabled = true;
}

function onButtonStop() {
  console.log("Stop");
  clearInterval(colorPlant);
  refs.buttonStartRef.disabled = false;
}

function randomIntegerFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}