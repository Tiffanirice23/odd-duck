'use strict';

let oddArray = [];
let getOddArray = localStorage.getItem('oddArray');
if (getOddArray) {
  oddArray = JSON.parse(getOddArray);
}

let myContainer = document.querySelector('#imgContainer');

let image1 = document.querySelector('#imgContainer img:first-child');

let image2 = document.querySelector('#imgContainer img:nth-child(2)');

let image3 = document.querySelector('#imgContainer img:nth-child(3)');

let viewResultsBtn = document.querySelector('#resultsDiv button');

let counter = 0;
let maxCounter = 25;
let indexArray = [];


function Odd(name, fileExtension = 'jpg') {
  this.name = name;
  this.src = `./img/${name}.${fileExtension}`;
  this.views = 0;
  this.votes = 0;
}

let Bag = new Odd('bag');
let Banana = new Odd('banana');
let Bathroom = new Odd('bathroom');
let Boots = new Odd('boots');
let Breakfast = new Odd('breakfast');
let Bubblegum = new Odd('bubblegum');
let Chair = new Odd('chair');
let Cthulhu = new Odd('cthulhu');
let DogDuck = new Odd('dogDuck');
let Dragon = new Odd('dragon');
let Pen = new Odd('pen');
let PetSweep = new Odd('petSweep');
let Scissors = new Odd('scissors');
let Shark = new Odd('shark');
let Sweep = new Odd('sweep', 'png');
let Tauntaun = new Odd('tauntaun');
let Unicorn = new Odd('unicorn');
let WaterCan = new Odd('waterCan');
let WineGlass = new Odd('wineGlass');

oddArray.push(Bag, Banana, Bathroom, Boots, Breakfast, Bubblegum, Chair, Cthulhu, DogDuck, Dragon, Pen, PetSweep, Scissors, Shark, Sweep, Tauntaun, Unicorn, WaterCan, WineGlass);

console.log(oddArray);

function selectRandomOddNumber() {
  return Math.floor(Math.random() * oddArray.length);
}

function renderOdd() {

  while (indexArray.length < 8) {
    let randomNum = selectRandomOddNumber();
    if (!indexArray.includes(randomNum)) {
      indexArray.push(randomNum);
    }
  }

  let odd1 = indexArray.shift();
  let odd2 = indexArray.shift();
  let odd3 = indexArray.shift();

  console.log(indexArray);

  image1.src = oddArray[odd1].src;
  image1.alt = oddArray[odd1].name;
  oddArray[odd1].views++;
  image2.src = oddArray[odd2].src;
  image2.alt = oddArray[odd2].name;
  oddArray[odd2].views++;
  image3.src = oddArray[odd3].src;
  image3.alt = oddArray[odd3].name;
  oddArray[odd3].views++;
}

function handleOddClick(event) {
  counter++;
  console.log(event.target.alt);
  let clickedOdd = event.target.alt;
  for (let i = 0; i < oddArray.length; i++) {
    if (clickedOdd === oddArray[i].name) {
      oddArray[i].votes++;
      console.log(oddArray);
    }
  }

  if (counter < maxCounter) {
    renderOdd();
  } else {
    myContainer.removeEventListener('click', handleOddClick);
    renderChart();
  }

  let stringifyOddArray = JSON.stringify(oddArray);
  localStorage.setItem('oddArray', stringifyOddArray);
}

// function saveSettings() {
//   console.log(counter);
//   localStorage.setItem('counter', counter);
//   let stringify = JSON.stringify(counter);
//   console.log(stringify);

//   localStorage.setItem('counter', stringify);
// }

// function pageLoad() {
//   let saveSettings = localStorage.getItem('counter');
//   if (saveSettings) {
//     console.log(saveSettings);
//     counter = JSON.parse(saveSettings);
//     console.log(counter);
//     if (counter.handleOddClick) {
//       let handleOddClick ();

//     }

//     }
//   }

function viewResults() {
  let ul = document.querySelector('ul');
  for (let i = 0; i < oddArray.length; i++) {
    let li = document.createElement('li');
    li.textContent = `${oddArray[i].name} had ${oddArray[i].views} views, and ${oddArray[i].votes} votes.`;
    ul.appendChild(li);

  }
}


function renderChart() {
  console.log(oddArray);

  const ctx = document.getElementById('myChart');

  let oddNames = [];
  let oddVotes = [];
  let oddViews = [];

  for (let i = 0; i < oddArray.length; i++) {
    console.log(oddArray[i]);

    let name = oddArray[i].name;
    oddNames.push(name);
    oddVotes.push(oddArray[i].votes);
    oddViews.push(oddArray[i].views);
  }
  console.log(oddNames);
  console.log(oddVotes);
  console.log(oddViews);

  let config = {
    type: 'bar',
    data: {
      labels: oddNames,
      datasets: [
        {
          label: '# of Votes',
          data: oddVotes,
          borderColor: [
            'rgb(35, 25, 66)',
            'rgb(35, 25, 66)',
            'rgb(35, 25, 66)',
            'rgb(35, 25, 66)',
            'rgb(35, 25, 66)',
            'rgb(35, 25, 66)',
            'rgb(35, 25, 66)'
          ],
          borderWidth: 1,
          backgroundColor: [
            'rgb(190, 149, 196)',
            'rgb(190, 149, 196)',
            'rgb(190, 149, 196)',
            'rgb(190, 149, 196)',
            'rgb(190, 149, 196)',
            'rgb(190, 149, 196)',
            'rgb(190, 149, 196)'
          ],
        },
        {
          label: '# of Views',
          data: oddViews,
          borderColor: [
            'rgb(35, 25, 66)',
            'rgb(35, 25, 66)',
            'rgb(35, 25, 66)',
            'rgb(35, 25, 66)',
            'rgb(35, 25, 66)',
            'rgb(35, 25, 66)',
            'rgb(35, 25, 66)'
          ],
          borderWidth: 1,
          backgroundColor: [
            'rgb(159, 134, 192)',
            'rgb(159, 134, 192)',
            'rgb(159, 134, 192)',
            'rgb(159, 134, 192)',
            'rgb(159, 134, 192)',
            'rgb(159, 134, 192)',
            'rgb(159, 134, 192)'
          ],
        }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };
  // eslint-disable-next-line no-undef
  new Chart(ctx, config);
}

// saveSettings();
// pageLoad();
renderOdd();

myContainer.addEventListener('click', handleOddClick);
viewResultsBtn.addEventListener('click', viewResults);
