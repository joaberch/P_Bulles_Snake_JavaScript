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
        checkBigMacIsActive = true
        more(nbr)
        }
      break
    case 2:
      if (!checkMcChickenIsActive) {
        checkMcChickenIsActive = true
        more(nbr)
        }
      break
    case 3:
      if (!checkDoubleCheeseBurgerIsActive) {
        checkDoubleCheeseBurgerIsActive = true
        more(nbr)
        }
      break
    case 4:
      if (!checkFriesIsActive) {
        checkFriesIsActive = true
        more(nbr)
        }
      break
    case 5:
      if (!checkMcNuggetsIsActive) {
        checkMcNuggetsIsActive = true
        more(nbr)
        }
      break
    case 6:
      if (!checkSaladIsActive) {
        checkSaladIsActive = true
        more(nbr)
        }
      break
    case 7:
      if (!checkCokeIsActive) {
        checkCokeIsActive = true
        more(nbr)
        }
      break
    case 8:
      if (!checkIceTeaIsActive) {
        checkIceTeaIsActive = true
        more(nbr)
        }
      break
    case 9:
      if (!checkWaterIsActive) {
        checkWaterIsActive = true
        more(nbr)
        }
      break
  }
  document.getElementById('quantity-area-' + nbr).style.visibility = 'visible'
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
function more(nbr)
{
  switch (nbr)
  {
    case 1:
      document.getElementById('bigMacNumber').innerText = ++bigMacNumber
      totalSum += bigMacPrice
      document.getElementById('bigMac').style.borderColor = 'blue'
      break
    case 2:
      document.getElementById('McChickenNumber').innerText = ++mcChickenNumber
      totalSum += mcChickenPrice
      document.getElementById('McChicken').style.borderColor = 'blue'
      break
    case 3:
      document.getElementById('DoubleCheeseBurgerNumber').innerText = ++doubleCheeseBurgerNumber
      totalSum += doubleCheeseBurgerPrice
      document.getElementById('DoubleCheeseBurger').style.borderColor = 'blue'
      break
    case 4:
      document.getElementById('FriesNumber').innerText = ++friesNumber
      totalSum += friesPrice
      document.getElementById('Fries').style.borderColor = 'blue'
      break
    case 5:
      document.getElementById('McNuggetsNumber').innerText = ++mcNuggetsNumber
      totalSum += mcNuggetsPrice
      document.getElementById('McNuggets').style.borderColor = 'blue'
      break
    case 6:
      document.getElementById('SaladNumber').innerText = ++saladNumber
      totalSum += saladPrice
      document.getElementById('Salad').style.borderColor = 'blue'
      break
    case 7:
      document.getElementById('CokeNumber').innerText = ++cokeNumber
      totalSum += cokePrice
      document.getElementById('Coke').style.borderColor = 'blue'
      break
    case 8:
      document.getElementById('IceTeaNumber').innerText = ++iceTeaNumber
      totalSum += iceTeaPrice
      document.getElementById('IceTea').style.borderColor = 'blue'
      break
    case 9:
      document.getElementById('WaterNumber').innerText = ++waterNumber
      totalSum += waterPrice
      document.getElementById('Water').style.borderColor = 'blue'
      break
  }
  displayTotalValue()
}

function less(nbr)
{
  switch (nbr)
  {
    case 1:
      if (bigMacNumber > 0){
        document.getElementById('bigMacNumber').innerText = --bigMacNumber
        totalSum -= bigMacPrice
        if (bigMacNumber == 0) {
          document.getElementById('bigMac').style.borderColor = 'black'
          setTimeout(desactivate(1),1)
        }
      }
      break
    case 2:
      if (mcChickenNumber > 0) {
        document.getElementById('McChickenNumber').innerText = --mcChickenNumber
        totalSum -= mcChickenPrice
        if (mcChickenNumber == 0) {document.getElementById('McChicken').style.borderColor = 'black'; setTimeout(desactivate('2'),1)}
      }
      break
    case 3:
      if (doubleCheeseBurgerNumber > 0) {
        document.getElementById('DoubleCheeseBurgerNumber').innerText = --doubleCheeseBurgerNumber
        totalSum -= doubleCheeseBurgerPrice
        if (doubleCheeseBurgerNumber == 0) {document.getElementById('DoubleCheeseBurger').style.borderColor = 'black'; setTimeout(desactivate('3'),1)}
      }
      break
    case 4:
      if (friesNumber > 0) {
        document.getElementById('FriesNumber').innerText = --friesNumber
        totalSum -= friesPrice
        if (friesNumber == 0) {document.getElementById('Fries').style.borderColor = 'black'; setTimeout(desactivate('4'),1)}
      }
      break
    case 5:
      if (mcNuggetsNumber > 0) {
        document.getElementById('McNuggetsNumber').innerText = --mcNuggetsNumber
        totalSum -= mcNuggetsPrice
        if (mcNuggetsNumber == 0) {document.getElementById('McNuggets').style.borderColor = 'black'; setTimeout(desactivate('5'),1)}
      }
      break
    case 6:
      if (saladNumber > 0) {
        document.getElementById('SaladNumber').innerText = --saladNumber
        totalSum -= saladPrice
        if (saladNumber == 0) {document.getElementById('Salad').style.borderColor = 'black'; setTimeout(desactivate('6'),1)}
      }
      break
    case 7:
      if (cokeNumber > 0) {
        document.getElementById('CokeNumber').innerText = --cokeNumber
        totalSum -= cokePrice
        if (cokeNumber == 0) {document.getElementById('Coke').style.borderColor = 'black'; setTimeout(desactivate('7'),1)}
      }
      break
    case 8:
      if (iceTeaNumber > 0) {
        document.getElementById('IceTeaNumber').innerText = --iceTeaNumber
        totalSum -= iceTeaPrice
        if (iceTeaNumber == 0) {document.getElementById('IceTea').style.borderColor = 'black'; setTimeout(desactivate('8'),1)}
      }
      break
    case 9:
      if (waterNumber > 0) {
        document.getElementById('WaterNumber').innerText = --waterNumber
        totalSum -= waterPrice
        if (waterNumber == 0) {document.getElementById('Water').style.borderColor = 'black'; setTimeout(desactivate('9'),1)}
      }
      break
  }
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