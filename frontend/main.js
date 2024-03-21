document.getElementById('calculateBtn').addEventListener('click', calculateBMI);

function calculateBMI() {
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    alert('Bitte geben Sie gültige Werte für Gewicht und Größe ein.');
    return;
  }

  const bmi = calculateBMIValue(weight, height);
  displayBMIResult(bmi);
}

function calculateBMIValue(weight, height) {
  const heightInMeters = height / 100; // Umrechnung von Zentimetern in Meter
  const bmi = weight / (heightInMeters * heightInMeters);
  return bmi.toFixed(2); // Auf zwei Dezimalstellen runden
}

function displayBMIResult(bmi) {
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `<p>Ihr BMI beträgt: ${bmi}</p>`;
}
