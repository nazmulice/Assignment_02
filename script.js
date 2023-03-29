function calculateBtn() {
  let weight = parseFloat(document.getElementById("weightInput").value);
  let height = parseFloat(document.getElementById("heightInput").value);

  let result = weight / (height * height);
  document.getElementById("res").innerHTML = `Your BMI is :  ${result.toFixed(2)}`;
}

var form = document.getElementById('form');
form.addEventListener('submit', function (event) {
  event.preventDefault();
})
