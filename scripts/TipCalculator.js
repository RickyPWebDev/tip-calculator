// I put these 2 variables as global because they need to be accessed for my  resetOutput function.
   let tipOutput = document.getElementById("tip-output");
    let totalOutput = document.getElementById("total-output");



  
function collectUserInput() {
    let billInput = document.getElementById("bill");
    let numberOfPeopleInput = document.getElementById("people");
    let tipInputs = document.querySelectorAll(".tip-input");
    

    let billValue = 0;
    let numberOfPeople = 1;
  
    billInput.addEventListener("input", function () {
      billValue = parseFloat(billInput.value) || 0;
      console.log("Bill amount entered:", billValue);
    });
  
    numberOfPeopleInput.addEventListener("input", function () {
      numberOfPeople = parseInt(numberOfPeopleInput.value) || 1;
      console.log("Number of people:", numberOfPeople);
    });
  
    tipInputs.forEach(input => {
      input.addEventListener("click", function () {
        let tipText = input.value;
        let tipPercent = parseFloat(tipText); 
  
        if (isNaN(tipPercent)) {
          console.log("Custom tip selected");
          
          return;
        }
  
        const tipAmount = (billValue * tipPercent / 100) / numberOfPeople;
        const totalPerPerson = (billValue / numberOfPeople) + tipAmount;
        tipOutput.innerHTML = tipAmount.toFixed(2);
        totalOutput.innerHTML = totalPerPerson.toFixed(2);
        console.log(totalPerPerson);
      });
    });

    
  }

  function resetOutput() {
    let resetButton = document.querySelector(".reset-btn");
    resetButton.addEventListener('click', function(){
        tipOutput.textContent = "0.00";
        totalOutput.textContent = "0.00";
     })
    }


  collectUserInput();

  
 