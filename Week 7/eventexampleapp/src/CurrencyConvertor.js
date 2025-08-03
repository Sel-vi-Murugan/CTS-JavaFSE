import { useState } from 'react';

const CurrencyConvertor = () => {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!rupees || isNaN(rupees)) {
      alert("Please enter a valid number");
      return;
    }
    const euroValue = (parseFloat(rupees) / 90).toFixed(2); // Assuming 1 Euro = 90 INR
    setEuro(euroValue);
  };

  return (
    <div className="currency-container">
      <h2>Currency Converter (INR to Euro)</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter amount in INR"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
        />
        <button type="submit">Convert</button>
      </form>
      {euro && <p>Equivalent in Euro: €{euro}</p>}
    </div>
  );
};

export default CurrencyConvertor;
