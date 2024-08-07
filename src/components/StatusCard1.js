import React from 'react';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import ChevronRight from '@mui/icons-material/ChevronRight';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const styles = {
  card: {
    backgroundColor: 'rgb(31,32,41)',
    color: '#fff',
    height: '285px',
  },
  cardcontent: {
    padding: '25px',
  },
  itemContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  label: {
    marginLeft: '10px',
    fontSize: '20px',
  },
  arrowButton: {
    backgroundColor: '#888',
    borderRadius: '50%',
    padding: '3px',
  },
  arrowIcon: {
    color: '#fff',
  },
  icon: {
    color: '#fff',
    width: '2em',
    height: '2em',
    marginBottom: '15px'
  },
};

const items = [
  { icon: <EmojiEventsIcon style={styles.icon} />, label: 'Goals' },
  { icon: <RestaurantMenuIcon style={styles.icon} />, label: 'Popular Dishes' },
  { icon: <MenuBookIcon style={styles.icon} />, label: 'Menus' },
];

const StatusCard1 = () => {
  return (
    <Card style={styles.card}>
      <CardContent style={styles.cardcontent}>
        {items.map((item, index) => (
          <div key={index} style={styles.itemContainer}>
            <div style={styles.iconContainer}>
              {item.icon}
              <Typography variant="body1" style={styles.label}>
                {item.label}
              </Typography>
            </div>
            <IconButton style={styles.arrowButton}>
            <ChevronRight style={{ fontSize: 24, cursor: 'pointer' }} />
            </IconButton>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};


export default StatusCard1;
