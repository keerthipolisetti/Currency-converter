document.getElementById('convertBtn').addEventListener('click', function() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
  
    if (isNaN(amount) || amount <= 0) {
      alert('Please enter a valid amount.');
      return;
    }
  
    // Dummy exchange rates for demonstration (you can replace this with real-time API data)
    const exchangeRates = {
      USD: { EUR: 0.85, GBP: 0.76, INR: 74.50, JPY: 110.05, USD: 1 },
      EUR: { USD: 1.18, GBP: 0.89, INR: 87.80, JPY: 129.53, EUR: 1 },
      GBP: { USD: 1.32, EUR: 1.12, INR: 98.60, JPY: 146.25, GBP: 1 },
      INR: { USD: 0.013, EUR: 0.011, GBP: 0.010, JPY: 1.48, INR: 1 },
      JPY: { USD: 0.0091, EUR: 0.0077, GBP: 0.0068, INR: 0.68, JPY: 1 }
    };
  
    const rate = exchangeRates[fromCurrency][toCurrency];
    const convertedAmount = (amount * rate).toFixed(2);
  
    document.getElementById('resultText').textContent = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
  });
  