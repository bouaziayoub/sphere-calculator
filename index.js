// Return the reference of the element by its ID and store it in a variable
const radio = document.getElementById("radio");
const result = document.getElementById("result");

const calArea = document.getElementById("area");
const calVolume = document.getElementById("volume");

// Calculate area
let resultado;

calArea.addEventListener("click", () => {
  if (Number(radio.value)) {
    if (radio.value > 0) {
      if (radio.value % 1 === 0) {
        const radioValue = parseFloat(radio.value);
        resultado = 4 * Math.PI * Math.pow(radioValue, 2);
        console.log('The result of the area is :' + resultado);
        result.value = resultado;
      } else {
        console.log("The value has to be an integer");
        alert("the value has to be an integer");
      }
    } else {
      console.log("It has to be positive Number.");
      alert("It has to be positive Number.");
    }
  } else {
    console.log("It has to be a number.");
    alert("It has to be a number.");
  }
});

// calculate volume
calVolume.addEventListener("click", () => {
  if (Number(radio.value)) {
    if (radio.value > 0) {
      if (radio.value % 1 === 0) {
        const radioValue = parseFloat(radio.value);
        resultado = (4 / 3) * Math.PI * Math.pow(radioValue, 3);
        console.log('The result of the volume is :' + resultado);
        result.value = resultado;
      } else {
        console.log("The value has to be an integer");
        alert("the value has to be an integer");
      }
    } else {
      console.log("It has to be positive Number.");
      alert("It has to be positive Number.");
    }
  } else {
    console.log("It has to be a number.");
    alert("It has to be a number.");
  }
});
