const displayInput=
document.getElementById("displayInput");
const displayResult=
document.getElementById("displayResult");
const buttons=
document.querySelectorAll("button");

let input = "";

buttons.forEach(button => {
  button.addEventListener("click", function() {
    const value = button.textContent;
    
    if(value === "C"){
      input = "";
      displayInput.textContent = "";
      displayResult.textContent = "";
    }
    
    else if (value === "=") {
      let expression = input.replace(/×/g,"*").replace(/÷/g,"/");
      try{
        let result = eval(expression);
        displayResult.textContent = result;
      } catch {
        displayResult.textContent = "Error";
      }
    }
    
    else {
      input += value;
      displayInput.textContent = input;
    }
    
    // Handle clear, equals, or add input
  });
});
