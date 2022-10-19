import "./css/index.css"

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
  let brand = ""
  
  ccInput.addEventListener('keyup', () => {
    let ccInputNumber = []
    ccNumber.push(Number(ccInput.value))

    if(ccInputNumber[0] === 5){
      brand = "mastercard"
    } else if(ccInputNumber[0] === 4){
      brand = "visa"
    } else {
      brand = "default"
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

handleCCNumber()