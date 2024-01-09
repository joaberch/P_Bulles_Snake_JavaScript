/*
TODO :
refactor (DRY)
use the "products" table with its property
*/
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

let totalSum = 0

let checkBigMacIsActive = false
let checkMcChickenIsActive = false
let checkDoubleCheeseBurgerIsActive = false
let checkFriesIsActive = false
let checkMcNuggetsIsActive = false
let checkSaladIsActive = false
let checkCokeIsActive = false
let checkIceTeaIsActive = false
let checkWaterIsActive = false


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

/////////////////////////////// Function ///////////////////////////////////////////
//Activate the product
function activate1()
{
  if (!checkBigMacIsActive) {
  document.getElementById('quantity-area-1').style.visibility = 'visible'
  checkBigMacIsActive = true
  moreBigMac()
  }
}

function activate2()
{
  if (!checkMcChickenIsActive) {
  document.getElementById('quantity-area-2').style.visibility = 'visible'
  checkMcChickenIsActive = true
  moreMcChicken()
  }
}

function activate3()
{
  if (!checkDoubleCheeseBurgerIsActive) {
  document.getElementById('quantity-area-3').style.visibility = 'visible'
  checkDoubleCheeseBurgerIsActive = true
  moreDoubleCheeseBurger()
  }
}

function activate4()
{
  if (!checkFriesIsActive) {
  document.getElementById('quantity-area-4').style.visibility = 'visible'
  checkFriesIsActive = true
  moreFries()
  }
}

function activate5()
{
  if (!checkMcNuggetsIsActive) {
  document.getElementById('quantity-area-5').style.visibility = 'visible'
  checkMcNuggetsIsActive = true
  moreMcNuggets()
  }
}

function activate6()
{
  if (!checkSaladIsActive) {
  document.getElementById('quantity-area-6').style.visibility = 'visible'
  checkSaladIsActive = true
  moreSalad()
  }
}

function activate7()
{
  if (!checkCokeIsActive) {
  document.getElementById('quantity-area-7').style.visibility = 'visible'
  checkCokeIsActive = true
  moreCoke()
  }
}

function activate8()
{
  if (!checkIceTeaIsActive) {
  document.getElementById('quantity-area-8').style.visibility = 'visible'
  checkIceTeaIsActive = true
  moreIceTea()
  }
}

function activate9()
{
  if (!checkWaterIsActive) {
  document.getElementById('quantity-area-9').style.visibility = 'visible'
  checkWaterIsActive = true
  moreWater()
  }
}

//desactivate all the products
function desactivate1()
{
  checkBigMacIsActive = false
  document.getElementById('quantity-area-1').style.visibility = 'hidden'
}

function desactivate2()
{
  checkMcChickenIsActive = false
  document.getElementById('quantity-area-2').style.visibility = 'hidden'
}

function desactivate3()
{
  checkDoubleCheeseBurgerIsActive = false
  document.getElementById('quantity-area-3').style.visibility = 'hidden'
}

function desactivate4()
{
  checkFriesIsActive = false
  document.getElementById('quantity-area-4').style.visibility = 'hidden'
}

function desactivate5()
{
  checkMcNuggetsIsActive = false
  document.getElementById('quantity-area-5').style.visibility = 'hidden'
}

function desactivate6()
{
  checkSaladIsActive = false
  document.getElementById('quantity-area-6').style.visibility = 'hidden'
}

function desactivate7()
{
  checkCokeIsActive = false
  document.getElementById('quantity-area-7').style.visibility = 'hidden'
}

function desactivate8()
{
  checkIceTeaIsActive = false
  document.getElementById('quantity-area-8').style.visibility = 'hidden'
}

function desactivate9()
{
  checkWaterIsActive = false
  document.getElementById('quantity-area-9').style.visibility = 'hidden'
}

//All the function about + and - button
function moreBigMac()
{
  document.getElementById('bigMacNumber').innerText = ++bigMacNumber
  totalSum += bigMacPrice
  document.getElementById('bigMac').style.borderColor = 'blue'
  displayTotalValue()
}

function lessBigMac()
{
  if (bigMacNumber > 0){
  document.getElementById('bigMacNumber').innerText = --bigMacNumber
  totalSum -= bigMacPrice
  if (bigMacNumber == 0) {
    document.getElementById('bigMac').style.borderColor = 'black'
    setTimeout(desactivate1,1)
  }
  displayTotalValue()
  }
}

function lessMcChicken()
{
  if (mcChickenNumber > 0) {
  document.getElementById('McChickenNumber').innerText = --mcChickenNumber
  totalSum -= mcChickenPrice
  if (mcChickenNumber == 0) {document.getElementById('McChicken').style.borderColor = 'black'; setTimeout(desactivate2,1)}
  displayTotalValue()
  }
}

function moreMcChicken()
{
  document.getElementById('McChickenNumber').innerText = ++mcChickenNumber
  totalSum += mcChickenPrice
  document.getElementById('McChicken').style.borderColor = 'blue'
  displayTotalValue()
}

function lessDoubleCheeseBurger()
{
  if (doubleCheeseBurgerNumber > 0) {
  document.getElementById('DoubleCheeseBurgerNumber').innerText = --doubleCheeseBurgerNumber
  totalSum -= doubleCheeseBurgerPrice
  if (doubleCheeseBurgerNumber == 0) {document.getElementById('DoubleCheeseBurger').style.borderColor = 'black'; setTimeout(desactivate3,1)}
  displayTotalValue()
  }
}

function moreDoubleCheeseBurger()
{
  document.getElementById('DoubleCheeseBurgerNumber').innerText = ++doubleCheeseBurgerNumber
  totalSum += doubleCheeseBurgerPrice
  document.getElementById('DoubleCheeseBurger').style.borderColor = 'blue'
  displayTotalValue()
}

function lessFries()
{
  if (friesNumber > 0) {
  document.getElementById('FriesNumber').innerText = --friesNumber
  totalSum -= friesPrice
  if (friesNumber == 0) {document.getElementById('Fries').style.borderColor = 'black'; setTimeout(desactivate4,1)}
  displayTotalValue()
  }
}

function moreFries()
{
  document.getElementById('FriesNumber').innerText = ++friesNumber
  totalSum += friesPrice
  document.getElementById('Fries').style.borderColor = 'blue'
  displayTotalValue()
}

function lessMcNuggets()
{
  if (mcNuggetsNumber > 0) {
  document.getElementById('McNuggetsNumber').innerText = --mcNuggetsNumber
  totalSum -= mcNuggetsPrice
  if (mcNuggetsNumber == 0) {document.getElementById('McNuggets').style.borderColor = 'black'; setTimeout(desactivate5,1)}
  displayTotalValue()
  }
}

function moreMcNuggets()
{
  document.getElementById('McNuggetsNumber').innerText = ++mcNuggetsNumber
  totalSum += mcNuggetsPrice
  document.getElementById('McNuggets').style.borderColor = 'blue'
  displayTotalValue()
}

function lessSalad()
{
  if (saladNumber > 0) {
  document.getElementById('SaladNumber').innerText = --saladNumber
  totalSum -= saladPrice
  if (saladNumber == 0) {document.getElementById('Salad').style.borderColor = 'black'; setTimeout(desactivate6,1)}
  displayTotalValue()
  }
}

function moreSalad()
{
  document.getElementById('SaladNumber').innerText = ++saladNumber
  totalSum += saladPrice
  document.getElementById('Salad').style.borderColor = 'blue'
  displayTotalValue()
}

function lessCoke()
{
  if (cokeNumber > 0) {
  document.getElementById('CokeNumber').innerText = --cokeNumber
  totalSum -= cokePrice
  if (cokeNumber == 0) {document.getElementById('Coke').style.borderColor = 'black'; setTimeout(desactivate7,1)}
  displayTotalValue()
  }
}

function moreCoke()
{
  document.getElementById('CokeNumber').innerText = ++cokeNumber
  totalSum += cokePrice
  document.getElementById('Coke').style.borderColor = 'blue'
  displayTotalValue()
}

function lessIceTea()
{
  if (iceTeaNumber > 0) {
  document.getElementById('IceTeaNumber').innerText = --iceTeaNumber
  totalSum -= iceTeaPrice
  if (iceTeaNumber == 0) {document.getElementById('IceTea').style.borderColor = 'black'; setTimeout(desactivate8,1)}
  displayTotalValue()
  }
}

function moreIceTea()
{
  document.getElementById('IceTeaNumber').innerText = ++iceTeaNumber
  totalSum += iceTeaPrice
  document.getElementById('IceTea').style.borderColor = 'blue'
  displayTotalValue()
}

function lessWater()
{
  if (waterNumber > 0) {
  document.getElementById('WaterNumber').innerText = --waterNumber
  totalSum -= waterPrice
  if (waterNumber == 0) {document.getElementById('Water').style.borderColor = 'black'; setTimeout(desactivate9,1)}
  displayTotalValue()
  }
}

function moreWater()
{
  document.getElementById('WaterNumber').innerText = ++waterNumber
  totalSum += waterPrice
  document.getElementById('Water').style.borderColor = 'blue'
  displayTotalValue()
}

//Display the total value
function displayTotalValue()
{
  document.getElementById('totalSum').innerText = "$ " + Math.abs(totalSum.toFixed(2)) //Math.abs to prevent a "$ -0.00"
}

function displayTotalPrice()
{
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
}

function displayTotalNumber()
{
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
}

/////////////////////////////// Write value /////////////////////////////////////////

displayTotalPrice()

displayTotalNumber()

//Write the total number
displayTotalValue()