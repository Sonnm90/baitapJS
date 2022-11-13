var height = document.getElementById('height');
var weight = document.getElementById('weight');
var cal = document.getElementById('cal');

function calculate(height, weight) {
    if (height <= 0 || weight <= 0 || isNaN(height) || isNaN(weight)) {
        alert(' Không hợp lệ')
    } else {
        height = height / 100;
        let bmi = weight / (height * height);
        return bmi;
    }
}

function result() {
    var height = height.value;
    var weight = weight.value;
    var bmi = calculate(height, weight);
    if (bmi < 18) {
        alert("Underweight");
    } else if (bmi < 25) {
        alert("Normal");
    } else if (bmi < 30) {
        alert("Overweight");
    } else {
        alert("Obese")
    }
}