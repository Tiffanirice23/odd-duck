'use strict';

let oddArray = [];


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

let bag = new Odd('bag');
let banana = new Odd('banana');
let bathroom = new Odd('bathroom');
let boots = new Odd('boots');
let breakfast = new Odd('breakfast');
let bubblegum = new Odd('bubblegum');
let chair = new Odd('chair');
let cthulhu = new Odd('cthulhu');
let dogDuck = new Odd('dogDuck');
let dragon = new Odd('dragon');
let pen = new Odd('pen');
let petSweep = new Odd('petSweep');
let scissors = new Odd('scissors');
let shark = new Odd('shark');
let sweep = new Odd('sweep', 'png');
let tauntaun = new Odd('tauntaun');
let unicorn = new Odd('unicorn');
let waterCan = new Odd('waterCan');
let wineGlass = new Odd('wineGlass');

oddArray.push(bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, waterCan, wineGlass);

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
  }
}

function viewResults() {
  let ul = document.querySelector('ul');
  for (let i = 0; i < oddArray.length; i++) {
    let li = document.createElement('li');
    li.textContent = `${oddArray[i].name} had ${oddArray[i].views} views, and ${oddArray[i].votes} votes.`;
    ul.appendChild(li);

  }
}

renderOdd();

console.log(oddArray);

const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      },
      {
        label: '# of Views',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
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
});

myContainer.addEventListener('click', handleOddClick);
viewResultsBtn.addEventListener('click', viewResults);
