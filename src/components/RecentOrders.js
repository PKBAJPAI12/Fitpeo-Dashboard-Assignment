import React from 'react';
import { Card, CardContent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Button } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

const orders = [
  { customer: 'Wade Warren', orderNo: '15487626', amount: '$124.00', status: 'Delivered' },
  { customer: 'Jane Cooper', orderNo: '48967686', amount: '$385.02', status: 'Delivered' },
  { customer: 'Guy Hawkins', orderNo: '78058215', amount: '$45.88', status: 'Cancelled' },
  { customer: 'Cody Fisher', orderNo: '86715600', amount: '$235.00', status: 'Delivered' },
  { customer: 'Savannah Nguyen', orderNo: '78514868', amount: '$128.20', status: 'Delivered' },
];

const RecentOrders = () => {
  return (
    <Card style={{ backgroundColor: 'rgb(31,32,41)', color: '#fff', height: '480px' }}>
      <CardContent>
        <Typography variant="h6">Recent Orders</Typography>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={styles.headerCell}>Customer</TableCell>
                <TableCell style={styles.headerCell}>Order No.</TableCell>
                <TableCell style={styles.headerCell}>Amount</TableCell>
                <TableCell style={styles.headerCell}>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.orderNo} style={styles.row}>
                  <TableCell style={styles.cell}>
                    <div style={styles.customerCell}>
                      <AccountCircle style={styles.icon} />
                      {order.customer}
                    </div>
                  </TableCell>
                  <TableCell style={styles.cell}>{order.orderNo}</TableCell>
                  <TableCell style={styles.cell}>{order.amount}</TableCell>
                  <TableCell style={styles.cell}>
                    <Button
                      variant="contained"
                      style={{
                        ...styles.statusButton,
                        backgroundColor: order.status === 'Delivered' ? 'rgb(25,131,104)' : order.status === 'Cancelled' ? 'rgb(133,61,62)' : 'yellow',
                      }}
                    >
                      {order.status}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

const styles = {
  headerCell: {
    color: '#fff',
    borderBottom: '1px solid #444',
  },
  row: {
    borderBottom: '1px solid #444',
  },
  cell: {
    color: '#fff',
    borderBottom: '1px solid #444',
  },
  customerCell: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginRight: '10px',
    width: '1.5em',
    height: '1.5em',
  },
  statusButton: {
    color: '#fff',
    borderRadius: '15px',
    textTransform: 'none',
    minWidth: '70px',
  },
};

export default RecentOrders;
