import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';

const Sidebar = () => {
  return (
    <div style={{ width: '60px', background: 'rgb(31,32,41)' }}>
      <List>
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon style={{ color: 'rgb(110,151,254)', width: '1.25em', height: '1.25em' }} />
          </ListItemIcon>
        </ListItem>
        <ListItem button style={{borderLeft: '2px solid rgb(110, 151, 254)', marginTop:'10px'}}>
          <ListItemIcon>
            <HomeIcon style={{ color: 'rgb(110,151,254)' }} />
          </ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ShoppingCartIcon style={{ color: '#fff' }} />
          </ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PeopleIcon style={{ color: '#fff' }} />
          </ListItemIcon>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <BarChartIcon style={{ color: '#fff' }} />
          </ListItemIcon>       </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
