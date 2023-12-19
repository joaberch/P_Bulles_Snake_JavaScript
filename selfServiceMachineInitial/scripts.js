let products = [
  {
    photo: "img/big-mac.png",
    name: "Big Mac",
    price: 5.99,
    active: false,
    quantity: 1,
  },
  {
    photo: "img/mc-chicken.png",
    name: "Mc Chicken",
    price: 4.99,
    active: false,
    quantity: 1,
  },
  {
    photo: "img/double-cb.png",
    name: "Double Cheese Burger",
    price: 2.99,
    active: false,
    quantity: 1,
  },
  {
    photo: "img/fries.png",
    name: "Fries",
    price: 2.99,
    active: false,
    quantity: 1,
  },
  {
    photo: "img/nuggets.png",
    name: "Mc Nuggets",
    price: 3.49,
    active: false,
    quantity: 1,
  },
  {
    photo: "img/salad.png",
    name: "Salad",
    price: 2.79,
    active: false,
    quantity: 1,
  },
  {
    photo: "img/cola.png",
    name: "Coke",
    price: 1.99,
    active: false,
    quantity: 1,
  },
  {
    photo: "img/lipton.png",
    name: "Ice Tea",
    price: 1.99,
    active: false,
    quantity: 1,
  },
  {
    photo: "img/water.png",
    name: "Water",
    price: 1.49,
    active: false,
    quantity: 1,
  },
];

//////////////////////////////////// Variable ///////////////////////////////////////
let bigMacNumber = 0
let mcChickenNumber = 0
let doubleCheeseBurgerNumber = 0
let friesNumber = 0
let mcNuggetsNumber = 0
let saladNumber = 0
let cokeNumber = 0
let iceTeaNumber = 0
let waterNumber = 0

let totalSum

///////////////////////////////// Const ////////////////////////////////////////////
const bigMacPrice = 5.99
const mcChickenPrice = 4.99
const doubleCheeseBurgerPrice = 2.99
const friesPrice = 2.99
const mcNuggetsPrice = 3.49
const saladPrice = 2.79
const cokePrice = 1.99
const iceTeaPrice = 1.99
const waterPrice = 1.49

/////////////////////////////// Write value /////////////////////////////////////////

//Writing the price of the product
document.getElementById('bigMacPrice').innerText = "$ " + bigMacPrice
document.getElementById('mcChickenPrice').innerText = "$ " + mcChickenPrice
document.getElementById('DoubleCheeseBurgerPrice').innerText = "$ " + doubleCheeseBurgerPrice
document.getElementById('FriesPrice').innerText = "$ " + friesPrice
document.getElementById('McNuggetsPrice').innerText = "$ " + mcNuggetsPrice
document.getElementById('SaladPrice').innerText = "$ " + saladPrice
document.getElementById('CokePrice').innerText = "$ " + cokePrice
document.getElementById('IceTeaPrice').innerText = "$ " + iceTeaPrice
document.getElementById('WaterPrice').innerText = "$ " + waterPrice

//Writing the number of product wanted
document.getElementById('bigMacNumber').innerText = bigMacNumber //TODO : innerText or innerHTML
document.getElementById('McChickenNumber').innerText = mcChickenNumber
document.getElementById('DoubleCheeseBurgerNumber').innerText = doubleCheeseBurgerNumber
document.getElementById('FriesNumber').innerText = friesNumber
document.getElementById('McNuggetsNumber').innerText = mcNuggetsNumber
document.getElementById('SaladNumber').innerText = saladNumber
document.getElementById('CokeNumber').innerText = cokeNumber
document.getElementById('IceTeaNumber').innerText = iceTeaNumber
document.getElementById('WaterNumber').innerText = waterNumber