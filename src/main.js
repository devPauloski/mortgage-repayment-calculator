const form = document.querySelector("form");
const amountInput = document.querySelector(".amount-input");
const termInput = document.querySelector(".term-input");
const interestInput = document.querySelector(".interest-input");
const repaymentMortgage = document.querySelector(".repayment-mortgage");
const interestMortgage = document.querySelector(".interest-mortgage");
const fieldSet = document.querySelector("fieldset");

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  if (amountInput.value.trim() === "") {
    amountInput.classList.add("error-input");
    amountInput.nextElementSibling.classList.add("error-decor");
    amountInput.nextElementSibling.nextElementSibling.style.display = "block";
  } else {
    amountInput.classList.remove("error-input");
    amountInput.nextElementSibling.classList.remove("error-decor");
    amountInput.nextElementSibling.nextElementSibling.style.display = "none";
  }

  if (termInput.value.trim() === "") {
    termInput.classList.add("error-input");
    termInput.nextElementSibling.classList.add("error-decor");
    termInput.nextElementSibling.nextElementSibling.style.display = "block";
  } else {
    termInput.classList.remove("error-input");
    termInput.nextElementSibling.classList.remove("error-decor");
    termInput.nextElementSibling.nextElementSibling.style.display = "none";
  }

  if (interestInput.value.trim() === "") {
    interestInput.classList.add("error-input");
    interestInput.nextElementSibling.classList.add("error-decor");
    interestInput.nextElementSibling.nextElementSibling.style.display = "block";
  } else {
    interestInput.classList.remove("error-input");
    interestInput.nextElementSibling.classList.remove("error-decor");
    interestInput.nextElementSibling.nextElementSibling.style.display = "none";
  }

  if ((interestMortgage.checked === false) && (repaymentMortgage.checked === false)) {
    fieldSet.children[3].style.display = "block";
  } else {
    fieldSet.children[3].style.display = "none";
  }
});