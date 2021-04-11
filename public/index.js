const btnBilling = document.querySelector('.billing-button')
const slider = document.querySelector('.slider')

console.log(slider)

btnBilling.addEventListener('click', () => {
  const billingText = document.querySelector('.billing-type')
  
  btnBilling.classList.toggle('yearly')

  if ( btnBilling.classList[1] == 'yearly' ) {
    billingText.innerHTML = '/ year'

  } else billingText.innerHTML = '/ month'


  priceCalculator()
})

slider.addEventListener('input', priceCalculator)

function priceCalculator() {
  const priceText = document.querySelector('.price')
  let value = parseFloat(slider.value)

  if ( btnBilling.classList[1] == 'yearly' ) {
    value = value - ((value / 100) * 25)
  }

  return priceText.innerHTML = `$` + value.toFixed(2)
}