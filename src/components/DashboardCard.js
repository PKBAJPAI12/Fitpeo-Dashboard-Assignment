import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const DashboardCard = ({ title, value, icon, change, changeType }) => {
  return (
    <Card style={{ backgroundColor: 'rgb(31,32,41)', color: '#fff' }}>
      <CardContent>
        <Box display="flex" alignItems="center">
          {icon}
          <Box ml={2}>
            <Typography variant="h5">{value}</Typography>
            <Typography variant="subtitle1">{title}</Typography>
            <Typography variant="body2" style={{ color: changeType === 'increase' ? 'green' : 'red' }}>
              {changeType === 'increase' ? '▲' : '▼'} {change}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
