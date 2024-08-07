import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import SmallCard from './components/SmallCard';
import ProfitCard from './components/ProfitCard';
import ActivityChart from './components/ActivityChart';
import StatusCard1 from './components/StatusCard1';
import RecentOrders from './components/RecentOrders';
import CustomerFeedback from './components/CustomerFeedback';

import './App.css';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div style={{ flexGrow: 1 }}>
        <Topbar toggleSidebar={toggleSidebar} />
        <div style={{ padding: '20px', backgroundColor: 'rgb(20,19,22)' }}>
          <h1>Dashboard</h1>
          <div className="dashcards">
            <div className="smallcards">
              <SmallCard />
              <SmallCard />
              <SmallCard />
              <SmallCard />
            </div>
            <div className="profitcard" >
              <ProfitCard />
            </div>
          </div>
          <div className='dashcards2' >
            <div className='activity'>
              <ActivityChart />
            </div>
            <div className='statuscard'>
              <StatusCard1 />
            </div>
          </div>
          <div className='dashcards3'>
            <div className='recentorder' >
              <RecentOrders />
            </div>
            <div className='customer'>
              <CustomerFeedback />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
