import React from 'react';
import Meter from './Meter';

const ProfitCard = () => {
  return (
    <div style={styles.card}>
      <div style={styles.topLeft}>
        <div style={styles.netProfit}>Net Profit</div>
        <div style={styles.amount}>$ 6759</div>
        <div style={styles.percentage}>
          <div style={styles.triangle}></div>
          <span style={styles.percentageText}>3%</span>
        </div>
      </div>
      <div style={styles.rightSide}>
        <Meter/>
      </div>
    </div>
  );
};

const styles = {
  card: {
    display: 'flex',
    height: '130px', // Adjust this as needed
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '10px',
    boxSizing: 'border-box',
    backgroundColor: 'rgb(31,32,41)',
  },
  topLeft: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: '1',
  },
  netProfit: {
    fontSize: '12px',
    color: 'white',
  },
  percentage: {
    display: 'flex',
    alignItems: 'center',

  },
  percentageText: {
    fontSize: '12px',
    color: 'lightgreen',
    marginLeft: '5px',
  },
  triangle: {
    width: '0',
    height: '0',
    borderLeft: '5px solid transparent',
    borderRight: '5px solid transparent',
    borderBottom: '5px solid lightgreen',
  },
  amount: {
    fontSize: '36px',
    fontWeight: 'bold',
  },
  rightSide: {
    display: 'flex',
    alignItems: 'center',
    flex: '1',
    justifyContent: 'space-evenly',
  },
  meterWrapper: {
    width: '65%',
    height: '65%',
  },
  meter: {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    background: 'conic-gradient(blue 0% 70%, skyblue 70% 100%)',
    border: '2px solid #ccc',
  },
};

export default ProfitCard;
