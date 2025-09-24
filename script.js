document.getElementById('advisoryForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const soil = document.getElementById('soil').value;
  const region = document.getElementById('region').value.toLowerCase();
  const season = document.getElementById('season').value;

  const resultDiv = document.getElementById('adviceResult');

  let advice = '';

  // Basic mock logic for crop advisory
  if (soil === 'clay' && season === 'kharif') {
    advice = 'Recommended Crop: Paddy';
  } else if (soil === 'loamy' && season === 'rabi') {
    advice = 'Recommended Crop: Wheat';
  } else if (soil === 'sandy') {
    advice = 'Recommended Crop: Groundnut or Millet';
  } else {
    advice = 'Recommended Crop: Maize or Pulses';
  }

  resultDiv.innerHTML = `<p><strong>Advice for ${region}:</strong> ${advice}</p>`;
});

function getWeather() {
  const weatherDiv = document.getElementById('weatherResult');
  
  // Placeholder weather logic (mock)
  weatherDiv.innerHTML = `
    <p><strong>Today's Weather:</strong> Sunny, 32°C</p>
    <p><strong>Rain Forecast:</strong> No rain expected</p>
  `;
}

document.getElementById('queryForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const question = document.getElementById('question').value;
  const responseDiv = document.getElementById('queryResponse');

  // Simulated response
  responseDiv.innerHTML = `<p>Thank you! An expert will respond to your query: "<em>${question}</em>" within 24 hours.</p>`;
  document.getElementById('question').value = '';
});
