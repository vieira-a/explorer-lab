import "./css/index.css"

const ccNumberDefault = "1234 5678 9012 3456";
const ccHolderDefault = "DIGITE O SEU NOME"
const ccNumberText = document.querySelector(".cc-number");
const ccLogo = document.querySelector(".cc-logo :nth-child(2)");
const ccNumberInput = document.getElementById("card-number");
const ccHolderInput = document.getElementById("card-holder")
let ccHolderText = document.querySelector(".cc-holder .value")

const ccBrands = {
  "default": {
    "imgPath": "../public/cc-default.svg",
    "alt": "Cartão de Crédito não informado"
  },
  "visa": {
    "imgPath": "../public/cc-visa.svg",
    "alt": "Cartão de Crédito Visa"
  },
  "mastercard": {
    "imgPath": "../public/cc-mastercard.svg",
    "alt": "Cartão de Crédito Mastercard"
  },
}

const handleCCNumber = () => {
  if(ccNumberText.textContent === ''){
    ccNumberText.textContent = ccNumberDefault
  } 
}

const handleCCHolderText = () => {
  if(ccHolderText.innerHTML === '') {
    ccHolderText.innerHTML = ccHolderDefault
  }
}

const handleCCInputNumber = () => {
  handleCCNumber()

  let brand = ""
  
  ccNumberInput.addEventListener('keyup', () => {
    let ccNumberArray = []
    
    ccNumberText.textContent = ccNumberInput.value
    ccNumberArray = [...ccNumberInput.value]

    if(ccNumberArray[0] === '5' ){
      brand = "mastercard"
    } else if(ccNumberArray[0] === '4'){
      brand = "visa"
    } else {
      brand = "default"
      handleCCNumber()
    }

    handleCCBrand(brand)

  })
}

const handleCCBrand = (brand) => {
  ccLogo.innerHTML = `<img src=${ccBrands[brand].imgPath}>`
}

const handleCCHolder = () => {
  ccHolderInput.addEventListener('keyup', () => {
    ccHolderText.innerHTML = ccHolderInput.value
    handleCCHolderText()
  })
}

handleCCHolder()
handleCCInputNumber()