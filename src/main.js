import "./css/index.css"

const ccLogo = document.querySelector(".cc-logo :nth-child(2)");

const ccNumberDefault = "1234 5678 9012 3456";
const ccNumberText = document.querySelector(".cc-number");
const ccNumberInput = document.getElementById("card-number");

const ccHolderDefault = "DIGITE O SEU NOME"
const ccHolderText = document.querySelector(".cc-holder .value")
const ccHolderInput = document.getElementById("card-holder")

const ccExpirationDefault = "00/00";
const ccExpirationText = document.querySelector(".cc-expiration .value")
const ccExpirationInput = document.getElementById("expiration-date")

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

const setCCNumber = () => {
  if(ccNumberText.textContent === ''){
    ccNumberText.textContent = ccNumberDefault
  } 
}

const setCCHolder = () => {
  if(ccHolderText.textContent === '') {
    ccHolderText.textContent = ccHolderDefault
  }
}

const setCCExpiration = () => {
  if(ccExpirationText.textContent === '') {
    ccExpirationText.textContent = ccExpirationDefault
  }
}

const handleCCInputNumber = () => {

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
      setCCNumber()
    }

    handleCCBrand(brand)

  })
}

const handleCCBrand = (brand) => {
  ccLogo.innerHTML = `<img src=${ccBrands[brand].imgPath}>`
}

const handleCCInputHolder = () => {
  ccHolderInput.addEventListener('keyup', () => {
    ccHolderText.textContent = ccHolderInput.value
    setCCHolder();
  })
}

const handleCCInputExpiration = () => {
  ccExpirationInput.addEventListener('keyup', () => {
    ccExpirationText.textContent = ccExpirationInput.value
    setCCExpiration()
  })
}  

setCCNumber();
setCCHolder();
setCCExpiration();
handleCCInputNumber();
handleCCInputHolder();
handleCCInputExpiration();