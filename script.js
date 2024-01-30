let screen = document.querySelector("#screen");
let buttons = document.querySelectorAll("button");

screenVal = "";
for (let button of buttons) {
    button.addEventListener("click", (evt) => {
        buttonText = evt.target.innerText;
        if (buttonText === "AC") {
            screenVal = "";
            screen.value = screenVal;
        }
        else if (buttonText === "X") {
            screenVal += "*";
            screen.value = screenVal;
        }
        else if (buttonText === "+") {
            screenVal += "+";
            screen.value = screenVal;
        }
        else if (buttonText === "-") {
            screenVal += "-";
            screen.value = screenVal;
        }
        else if (buttonText === "/") {
            screenVal += "/";
            screen.value = screenVal;
        }
        else if (buttonText === "=") {
            screen.value = eval(screenVal);
        }
        else {
            screenVal += buttonText;
            screen.value = screenVal;

        }
    })
}