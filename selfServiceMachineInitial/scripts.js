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
function activate(nbr)
{
  switch (nbr)
  {
    case 1:
      if (!checkBigMacIsActive) {
        document.getElementById('quantity-area-1').style.visibility = 'visible'
        checkBigMacIsActive = true
        moreBigMac()
        }
      break
    case 2:
      if (!checkMcChickenIsActive) {
        document.getElementById('quantity-area-2').style.visibility = 'visible'
        checkMcChickenIsActive = true
        moreMcChicken()
        }
      break
    case 3:
      if (!checkDoubleCheeseBurgerIsActive) {
        document.getElementById('quantity-area-3').style.visibility = 'visible'
        checkDoubleCheeseBurgerIsActive = true
        moreDoubleCheeseBurger()
        }
      break
    case 4:
      if (!checkFriesIsActive) {
        document.getElementById('quantity-area-4').style.visibility = 'visible'
        checkFriesIsActive = true
        moreFries()
        }
      break
    case 5:
      if (!checkMcNuggetsIsActive) {
        document.getElementById('quantity-area-5').style.visibility = 'visible'
        checkMcNuggetsIsActive = true
        moreMcNuggets()
        }
      break
    case 6:
      if (!checkSaladIsActive) {
        document.getElementById('quantity-area-6').style.visibility = 'visible'
        checkSaladIsActive = true
        moreSalad()
        }
      break
    case 7:
      if (!checkCokeIsActive) {
        document.getElementById('quantity-area-7').style.visibility = 'visible'
        checkCokeIsActive = true
        moreCoke()
        }
      break
    case 8:
      if (!checkIceTeaIsActive) {
        document.getElementById('quantity-area-8').style.visibility = 'visible'
        checkIceTeaIsActive = true
        moreIceTea()
        }
      break
    case 9:
      if (!checkWaterIsActive) {
        document.getElementById('quantity-area-9').style.visibility = 'visible'
        checkWaterIsActive = true
        moreWater()
        }
      break
  }
}

//desactivate all the products
function desactivate(nbr)
{
  document.getElementById('quantity-area-' + nbr).style.visibility = 'hidden'

  switch (nbr) {
    case '1':
      setTimeout(checkBigMacIsActive = false,10000)
      break
    case 2:
      checkMcChickenIsActive = false
      break;
    case 3:
      checkDoubleCheeseBurgerIsActive = false
      break;
    case 4:
      checkFriesIsActive = false
      break;
    case 5:
      checkMcNuggetsIsActive = false
      break;
    case 6:
      checkSaladIsActive = false
      break;
    case 7:
      checkCokeIsActive = false
      break;
    case 8:
      checkIceTeaIsActive = false
      break;
    case 9:
      checkWaterIsActive = false
      break;
  }
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
    setTimeout(desactivate('1'),1)
  }
  displayTotalValue()
  }
}

function lessMcChicken()
{
  if (mcChickenNumber > 0) {
  document.getElementById('McChickenNumber').innerText = --mcChickenNumber
  totalSum -= mcChickenPrice
  if (mcChickenNumber == 0) {document.getElementById('McChicken').style.borderColor = 'black'; setTimeout(desactivate('2'),1)}
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
  if (doubleCheeseBurgerNumber == 0) {document.getElementById('DoubleCheeseBurger').style.borderColor = 'black'; setTimeout(desactivate('3'),1)}
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
  if (friesNumber == 0) {document.getElementById('Fries').style.borderColor = 'black'; setTimeout(desactivate('4'),1)}
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
  if (mcNuggetsNumber == 0) {document.getElementById('McNuggets').style.borderColor = 'black'; setTimeout(desactivate('5'),1)}
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
  if (saladNumber == 0) {document.getElementById('Salad').style.borderColor = 'black'; setTimeout(desactivate('6'),1)}
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
  if (cokeNumber == 0) {document.getElementById('Coke').style.borderColor = 'black'; setTimeout(desactivate('7'),1)}
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
  if (iceTeaNumber == 0) {document.getElementById('IceTea').style.borderColor = 'black'; setTimeout(desactivate('8'),1)}
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
  if (waterNumber == 0) {document.getElementById('Water').style.borderColor = 'black'; setTimeout(desactivate('9'),1)}
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