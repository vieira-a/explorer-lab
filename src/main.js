import IMask from "imask";
import "./css/index.css"

const maskCCNumber = {
  mask: '0000 0000 0000 0000'
}

// const maskCCExpiration = {
//   mask: '00/00'
// }

// const maskCCCVV = {
//   mask: '0000'
// }

const ccLogo = document.querySelector(".cc-logo :nth-child(2)");
const ccNumberDefault = "1234 5678 9012 3456";
const ccNumberText = document.querySelector(".cc-number");
const ccNumberInput = document.getElementById("card-number");

const ccHolderDefault = "DIGITE O SEU NOME";
const ccHolderText = document.querySelector(".cc-holder .value");
const ccHolderInput = document.getElementById("card-holder");

const ccExpirationDefault = "00/00";
const ccExpirationText = document.querySelector(".cc-expiration .value");
const ccExpirationInput = document.getElementById("expiration-date");

const cvcDefault = "000";
const cvcText = document.querySelector(".cc-security .value");
const cvcInput = document.getElementById("security-code");

const visaRegEx = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
const mastercardRegEx = /^(?:5[1-5][0-9]{14})$/;

const handleCCInputNumber = () => {
  const ccNumberInputMasked = IMask(ccNumberInput, maskCCNumber)
  ccNumberInput.addEventListener('keyup', () => {
    ccNumberText.textContent = ccNumberInputMasked.value
    setCCNumber();
  })
}

const getCCInputNumber = () => {
  ccNumberInput.addEventListener('change', () => {
  ccValidate()
  })
}

const ccValidate = () => {

  handleCCInputNumber()
  
  const ccNumberInputValue = document.getElementById("card-number").value;
  const isVisa = visaRegEx.test(ccNumberInputValue.replace(/\s/g, '')) === true;

  const isMastercard = mastercardRegEx.test(ccNumberInputValue.replace(/\s/g, '')) === true;
  let brand = "default"
  
  if(isVisa){
    brand = "visa"
    console.log(`Cartão Visa | Tipo de dado: ${typeof(ccNumberInputValue)}`)
  } else if(isMastercard) {
    brand = "mastercard"
    console.log(`Cartão Mastercard | Tipo de dado: ${typeof(ccNumberInputValue)}`)
  } else {
    console.log(`Cartão Desconhecido | Tipo de dado: ${typeof(ccNumberInputValue)}`)
  }
  handleCCBrand(brand)
}

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

const setCVC = () => {
  if(cvcText.textContent === '') {
    cvcText.textContent = cvcDefault
  }
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
    //const ccExpirationMasked = IMask(ccExpirationInput, maskCCExpiration)
    ccExpirationText.textContent = ccExpirationInput.value
    setCCExpiration()
  })
}

const handleCCInputCVC = () => {
  cvcInput.addEventListener('keyup', () => {
    //const cvcInputMasked = IMask(cvcInput, maskCCCVV)
    cvcText.textContent = cvcInput
    setCVC()
  })
}
ccValidate()
setCCNumber();
setCCHolder();
setCCExpiration();
setCVC();
getCCInputNumber();
handleCCInputHolder();
handleCCInputExpiration();
handleCCInputCVC();