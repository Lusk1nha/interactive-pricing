const btnBilling = document.querySelector('.billing-button')
const slider = document.querySelector('.slider')

btnBilling.addEventListener('click', () => {
  billingType()
  priceCalculator()
})

slider.addEventListener('input', priceCalculator)

function billingType() {
  const billingText = document.querySelector('.billing-type')
  
  btnBilling.classList.toggle('yearly')

  if ( btnBilling.classList[1] == 'yearly' ) {
    return billingText.innerHTML = '/ year'
  }
  
  return billingText.innerHTML = '/ month'

}

function priceCalculator() {
  const priceText = document.querySelector('.price')
  let value = parseFloat(slider.value)

  if ( btnBilling.classList[1] == 'yearly' ) {
    value = value - ((value / 100) * 25)
  }

  return priceText.innerHTML = `$` + value.toFixed(2)
}