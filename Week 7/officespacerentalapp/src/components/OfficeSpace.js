import '../App.css';
import officeImage from '../Office.jpg'; // Ensure this path is correct

const OfficeList = () => {
  const officeSpaces = [
    { name: 'Sky Tower', rent: 50000, address: '123 Main Street, Chennai' },
    { name: 'Green Plaza', rent: 75000, address: '456 Green Ave, Bangalore' },
    { name: 'Eco Space', rent: 60000, address: '789 Eco St, Hyderabad' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Office Space Listings</h1>

      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        gap: '20px',
        marginTop: '30px'
      }}>
        {officeSpaces.map((item, index) => {
          let colors = [];
          if (item.rent <= 60000) {
            colors.push('textRed');
          } else {
            colors.push('textGreen');
          }

          return (
            <div key={index} className="card">
              <img src={officeImage} alt="Office Space" className="card-img" />
              <h2>{item.name}</h2>
              <p className={colors.join(' ')}>Rent: ₹{item.rent}</p>
              <p>Address: {item.address}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OfficeList;
