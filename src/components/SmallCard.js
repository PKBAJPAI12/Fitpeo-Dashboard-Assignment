import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../App.css';

const SmallCard = () => {
  return (
    <div className="card" >
      <div style={styles.topLeft}>
        <div style={styles.icon}><ShoppingCartIcon style={{ color: '#fff' }} /></div>
        <div style={styles.totalOrders}>Total Orders</div>
          <div style={styles.ordersCount}>75</div>
          <div style={styles.percentageBottomRight}>
          <div style={styles.triangle}></div>
          <span style={styles.percentageText}>3%</span>
          </div>
      </div>
      <div style={styles.middle}>
        {/* No need for the amount display */}
      </div>
    </div>
  );
};

const styles = {
  
  topLeft: {
  },
  icon: {
    width: '100%',
    height: '100%',
  },
  totalOrders: {
    fontSize: '12px',
    color: 'white',
    marginTop: '5px',
  },
  ordersCount: {
    fontSize: '32px',
    fontWeight: 'bold',
    position: 'absolute',
    bottom: '10px',
  },
  percentageBottomRight: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '12px',
    marginTop: '5px',
    position: 'absolute',
    bottom: '10px',
    right: '10px',
  },
  percentageText: {
    marginRight: '5px',
    color: 'lightgreen',
    paddingLeft: '5px',
  },
  triangle: {
    width: '0',
    height: '0',
    borderLeft: '5px solid transparent',
    borderRight: '5px solid transparent',
    borderBottom: '5px solid lightgreen',
  },
  middle: {
    /* No content here */
  },
};

export default SmallCard;
