import "./css/index.css"

const ccNumberDefault = "1234 5678 9012 3456";
const ccNumber = document.querySelector(".cc-number");
const ccLogo = document.querySelector(".cc-logo :nth-child(2)");
const ccInput = document.getElementById("card-number");

const ccBrands = [
  {
    name: "default",
    imgPath: "../public/cc-default.svg",
    alt: "Cartão de Crédito não informado"
  },
  {
  name: "visa",
  imgPath: "../public/cc-visa.svg",
  alt: "Cartão de Crédito Visa"
  },
  {
  name: "mastercard",
  imgPath: "../public/cc-mastercard.svg",
  alt: "Cartão de Crédito Mastercard"
  },
]

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
  
  if(brand === "visa") {
    ccLogo.innerHTML = `<img src=${ccBrands[1].imgPath}>`
  } else if(brand === "mastercard"){
    ccLogo.innerHTML = `<img src=${ccBrands[2].imgPath}>`
  } else {
    ccLogo.innerHTML = `<img src=${ccBrands[0].imgPath}>`
  }

}

handleCCInputNumber()