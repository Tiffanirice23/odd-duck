'use strict';

let oddArray = [];

let myContainer = document.querySelector('#imgContainer');

let image1 = document.querySelector('#imgContainer img:first-child');

let image2 = document.querySelector('#imgContainer img:nth-child(2)');

let image3 = document.querySelector('#imgContainer img:nth-child(3)');

let viewResultsBtn = document.querySelector('#resultsDiv button');

let counter = 0;
let maxCounter = 25;


function Odd(name, fileExtension = 'jpg') {
  this.name = name;
  this.src = `img/${name}.${fileExtension}`;
  this.views = 0;
  this.votes = 0;
}

let bag = new Odd('Bag');
let banana = new Odd('Banana');
let bathroom = new Odd('Bathroom');
let boots = new Odd('Boots');
let breakfast = new Odd('Breakfast');
let bubblegum = new Odd('Bubblegum');
let chair = new Odd('Chair');
let cthulhu = new Odd('Cthulhu');
let dogDuck = new Odd('DogDuck');
let dragon = new Odd('Dragon');
let pen = new Odd('Pen');
let petSweep = new Odd('PetSweep');
let scissors = new Odd('Scissors');
let shark = new Odd('Shark');
let sweep = new Odd('Sweep', 'png');
let tauntaun = new Odd('Tauntaun');
let unicorn = new Odd('Unicorn');
let waterCan = new Odd('WaterCan');
let wineGlass = new Odd('WineGlass');

oddArray.push(bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, waterCan, wineGlass);

console.log(oddArray);

function selectRandomOddNumber() {
  return Math.floor(Math.random() * oddArray.length);
}
function renderOdd() {
  let odd1 = selectRandomOddNumber();
  let odd2 = selectRandomOddNumber();
  if (odd2 === odd1) {
    odd2 = selectRandomOddNumber();
  }
  let odd3 = selectRandomOddNumber();
  if (odd3 === odd2 || odd3 === odd1) {
    odd3 = selectRandomOddNumber();
  }

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
    li.textContent = `${oddArray[i].name} had ${oddArray[i].votes}
    votes and was seen ${oddArray[i].views} times.`;
    ul.appendChild(li);
  }
}
renderOdd();

myContainer.addEventListener('click', handleOddClick);
viewResultsBtn.addEventListener('click', viewResults);
