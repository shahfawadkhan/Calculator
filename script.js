const buttons = document.querySelectorAll(".numbers");
const display = document.querySelector(".display");
let currentInput = "";

for (let btn of buttons){
  btn.addEventListener("click", () => {
    const buttonText = btn.innerHTML;

    if (buttonText === 'C') {
      currentInput = "";
    } else if (buttonText === '=') {
      
      try {
        currentInput = eval(currentInput).toString();
      } catch (error) {
        currentInput = "Error";
      }
    } else if (buttonText === 'del') {
      
      currentInput = currentInput.slice(0, -1);
    } else {
      currentInput += buttonText;
    }

    
    display.innerHTML = currentInput;
  });
}
