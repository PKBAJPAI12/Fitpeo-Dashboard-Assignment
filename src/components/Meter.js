import React from 'react';

const Meter = () => {
  const meterStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    background: 'conic-gradient(rgb(110,151,254) 0% 70%, skyblue 70% 100%)',
    border: '2px solid #ccc',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const centerStyle = {
    position: 'absolute',
    width: '85%',
    height: '85%',
    backgroundColor: 'rgb(31,32,41)',
    borderRadius: '50%',
  };

  const percentageStyle = {
    position: 'absolute',
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'white',
  };

  return (
    <div style={{ width: '65%', height: '65%', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
      <div style={meterStyle}>
        <div style={centerStyle}></div>
        <div style={percentageStyle}>70%</div>
      </div>
    </div>
  );
};

export default Meter;
