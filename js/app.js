'use strict'

let oddArray = [];

let myContainer = document.querySelector('#imgContainer');

let image1 = document.querySelector('#imgContainer img:first-child');

let image2 = document.querySelector('#imgContainer img:nth-child(2)');

let image3 = document.querySelector('#imgContainer img:nth-child(3)');


function Odd(name, fileExtension = 'jpg') {
  this.name = name;
  this.src = `img/${name}.${fileExtension}`;
}

let bag = new Odd ('bag');
let banana = new Odd ('banana');
let bathroom = new Odd ('bathroom');
let boots = new Odd ('boots');
let breakfast = new Odd ('breakfast');
let bubblegum = new Odd ('bubblegum');
let chair = new Odd ('chair');
let cthulhu = new Odd ('cthulhu');
let dogDuck = new Odd ('dogDuck');
let dragon = new Odd ('dragon');
let pen = new Odd ('pen');
let petSweep = new Odd ('petSweep');
let scissors = new Odd ('scissors');
let shark = new Odd ('shark');
let sweep = new Odd ('sweep');
let tauntaun = new Odd ('tauntaun');
let unicorn = new Odd ('unicorn');
let waterCan = new Odd ('waterCan');
let wineGlass = new Odd ('wineGlass');

oddArray.push(bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, waterCan, wineGlass);

console.log(oddArray);

image1.src = oddArray[5].src;
console.log (image2);
image2.src = oddArray[3].src;
image3.src = oddArray[2].src;
