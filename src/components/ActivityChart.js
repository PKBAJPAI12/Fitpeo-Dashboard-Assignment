import React, { useState } from 'react';
import { Card, CardContent, Typography, FormControl, Select, MenuItem } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const data = [
  { name: '5', uv: 4000 },
  { name: '6', uv: 3500 },
  { name: '7', uv: 3000 },
  { name: '8', uv: 2800 },
  { name: '9', uv: 2000 },
  { name: '10', uv: 2200 },
  { name: '11', uv: 2780 },
  { name: '12', uv: 2500 },
  { name: '13', uv: 1890 },
  { name: '14', uv: 2000 },
  { name: '15', uv: 2390 },
  { name: '16', uv: 2600 },
  { name: '17', uv: 3490 },
];

const ActivityChart = () => {
  const [period, setPeriod] = useState('Weekly');

  const handlePeriodChange = (event) => {
    setPeriod(event.target.value);
  };

  return (
    <Card style={{ backgroundColor: 'rgb(31,32,41)', color: '#fff', height: '285px' }}>
      <CardContent>
        <div style={styles.header}>
          
          <div>
          <Typography variant="h6">Activity</Typography>
          </div>
          <FormControl variant="outlined" size="small" style={styles.dropdown}>
            <Select
              value={period}
              onChange={handlePeriodChange}
              style={styles.select}
              IconComponent={() => <div style={styles.dropdownIcon} />}
              MenuProps={{
                PaperProps: {
                  sx: {
                    bgcolor: '#2d2d3d',
                    color: '#fff',
                  },
                },
              }}
            >
              <MenuItem value="Weekly">Weekly</MenuItem>
              <MenuItem value="Monthly">Monthly</MenuItem>
            </Select>
          </FormControl>
        </div>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={data} margin={{ left: 0, right: 0 }} barGap={0.5} barSize={1}>
            <CartesianGrid stroke="#444" vertical={false} />
            <XAxis dataKey="name" tickFormatter={(tick) => (Number.isInteger(parseFloat(tick)) ? tick : '')} tick={{ fill: '#fff' }} axisLine={false} />
            <YAxis tick={{ fill: '#fff' }} axisLine={false} />
            <Tooltip />
            <Bar dataKey="uv" fill="rgb(110,151,254)" barSize={15} radius={[10, 10, 10, 10]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    padding: '10px',
  },
  dropdown: {
    color: '#fff',
    backgroundColor: '#888', // Gray background
    borderRadius: '35px', // More rounded corners
    padding: '-2px', // Adjust the padding to make the button smaller
    marginTop: '-20px', // Move the dropdown up to avoid touching the horizontal line
  },
  select: {
    color: '#fff',
    '& .MuiSvgIcon-root': {
      color: '#fff',
    },
  },
  dropdownIcon: {
    width: 0,
    height: 0,
    marginLeft: '-15px',
    borderLeft: '6px solid transparent',
    borderRight: '6px solid transparent',
    borderTop: '6px solid #fff', // White triangle
    marginTop: '4px',
  },
};

export default ActivityChart;
