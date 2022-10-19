import "./css/index.css"

const ccNumberDefault = "1234 5678 9012 3456";
const ccNumber = document.querySelector(".cc-number");
const ccLogo = document.querySelector(".cc-logo :nth-child(2)");
const ccInput = document.getElementById("card-number");

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
  if(ccNumber.textContent === ''){
    ccNumber.textContent = ccNumberDefault
  } 
}

const handleCCInputNumber = () => {
  handleCCNumber()

  let brand = ""
  
  ccInput.addEventListener('keyup', () => {
    let ccInputNumber = []
    
    ccNumber.textContent = ccInput.value
    ccInputNumber = [...ccInput.value]

    if(ccInputNumber[0] === '5' ){
      brand = "mastercard"
    } else if(ccInputNumber[0] === '4'){
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

handleCCInputNumber()