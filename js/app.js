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
let resetBtn = document.querySelector('#resetBtn');

let counter = 0;
let getCounter = localStorage.getItem('counter');
if (getCounter) {
  counter = parseInt(getCounter);
}
let maxCounter = 25;
let indexArray = [];

let myChart;


function Odd(name, fileName = '', fileExtension = 'jpg') {
  this.name = name;
  this.fileName = fileName || name;
  this.src = `./img/${this.fileName}.${fileExtension}`;
  this.views = 0;
  this.votes = 0;
}

function createOddArray() {

  let Bag = new Odd('Star Wars Bag', 'bag');
  let Banana = new Odd('Banana Slicer', 'banana');
  let Bathroom = new Odd('Toilet Roll Holder', 'bathroom');
  let Boots = new Odd('Rain Boots', 'boots');
  let Breakfast = new Odd('Breakfast Deluxe', 'breakfast');
  let Bubblegum = new Odd('Meatball Bubblegum','bubblegum');
  let Chair = new Odd('Uncomfortable Chair','chair');
  let Cthulhu = new Odd('Cthulhu Monster','cthulhu');
  let DogDuck = new Odd('Duck Lips for Dog','dogDuck');
  let Dragon = new Odd('Dragon Meat','dragon');
  let Pen = new Odd('Fork Pen','pen');
  let PetSweep = new Odd('Pet Sweep Shoes' , 'petSweep');
  let Scissors = new Odd('Pizza Scissors' , 'scissors');
  let Shark = new Odd('Shark Attack Prank' , 'shark');
  let Sweep = new Odd('Baby Sweep Onesie' , 'sweep', 'png');
  let Tauntaun = new Odd('Tauntaun Blanket' , 'tauntaun');
  let Unicorn = new Odd('Unicorn Meat' , 'unicorn');
  let WaterCan = new Odd('Self-Watering Watering Can' , 'waterCan');
  let WineGlass = new Odd('Unique Wine Glass' , 'wineGlass');

  oddArray.push(Bag, Banana, Bathroom, Boots, Breakfast, Bubblegum, Chair, Cthulhu, DogDuck, Dragon, Pen, PetSweep, Scissors, Shark, Sweep, Tauntaun, Unicorn, WaterCan, WineGlass);
}

function selectRandomOddNumber() {
  let randomNum;
  do {
    randomNum = Math.floor(Math.random() * oddArray.length);
  } while (indexArray.includes(randomNum));
  return randomNum;
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
  if (counter === 0 && myChart) {
    myChart.destroy();
  }
  counter++;
  let clickedOdd = event.target.alt;
  for (let i = 0; i < oddArray.length; i++) {
    if (clickedOdd === oddArray[i].name) {
      oddArray[i].votes++;
    }
  }

  if (counter < maxCounter) {
    renderOdd();
  } else if (counter === maxCounter) {
    renderChart();
  }

  let stringifyOddArray = JSON.stringify(oddArray);
  localStorage.setItem('oddArray', stringifyOddArray);

  let stringifyCounter = counter.toString();
  localStorage.setItem('counter', stringifyCounter);
}

function reset() {
  console.log('reset');
  counter = 0;
  indexArray = [];
  oddArray = [];
  createOddArray();
  localStorage.setItem('oddArray', []);
  myChart.destroy();
}

function viewResults() {
  let ul = document.querySelector('ul');
  ul.innerHTML = '';
  for (let i = 0; i < oddArray.length; i++) {
    let li = document.createElement('li');
    li.textContent = `${oddArray[i].name} had ${oddArray[i].views} views, and ${oddArray[i].votes} votes.`;
    ul.appendChild(li);
  }

}


function renderChart() {
  const ctx = document.getElementById('myChart');
  let oddNames = [];
  let oddVotes = [];
  let oddViews = [];

  for (let i = 0; i < oddArray.length; i++) {
    let name = oddArray[i].name;
    oddNames.push(name);
    oddVotes.push(oddArray[i].votes);
    oddViews.push(oddArray[i].views);
  }

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
            'rgb(25, 42, 81)',
            'rgb(25, 42, 81)',
            'rgb(25, 42, 81)',
            'rgb(25, 42, 81)',
            'rgb(25, 42, 81)',
            'rgb(25, 42, 81)',
            'rgb(25, 42, 81)'
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
  myChart = new Chart(ctx, config);
}

// saveSettings();
// pageLoad();
if (oddArray.length === 0) {
  createOddArray();
}
renderOdd();

resetBtn.addEventListener('click', reset);

viewResultsBtn.addEventListener('click', viewResults);
myContainer.addEventListener('click', handleOddClick);
