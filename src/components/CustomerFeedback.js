import React from 'react';
import { Card, CardContent, List, ListItem, ListItemAvatar, ListItemText, Avatar, Typography, Box, Rating } from '@mui/material';

const feedbacks = [
  { name: 'Jenny Wilson', rating: 5, comment: 'Great service! Loved the experience.' },
  { name: 'Dianne Russell', rating: 4, comment: 'The product was of excellent quality.' },
  { name: 'Devon Lane', rating: 3, comment: 'Fast shipping, but the packaging was damaged.' },
  { name: 'Dianne Russell', rating: 4, comment: 'The product was of excellent quality.' },
];

const CustomerFeedback = () => {
  return (
    <Card sx={{ backgroundColor: 'rgb(31,32,41)', color: '#fff', height: '480px' }}>
      <CardContent>
        <Typography variant="h6">Customer's Feedback</Typography>
        <List>
          {feedbacks.map((feedback, index) => (
            <ListItem key={index} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar style={{width: '1.5em', height: '1.5em'}}>{feedback.name.charAt(0)}</Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <React.Fragment>
                    <Typography variant="body1" sx={{ fontWeight: 'bold', color: '#fff' }}>
                      {feedback.name}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', color: '#fff' }}>
                      <Rating name="read-only" value={feedback.rating} readOnly size="small" />
                    </Box>
                  </React.Fragment>
                }
                secondary={
                  <Typography variant="body2" color="textSecondary" sx={{ color: '#fff' }}>
                    {feedback.comment}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default CustomerFeedback;
