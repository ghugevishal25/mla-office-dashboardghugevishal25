import React from 'react';
import { Box, Typography } from '@mui/material';

const Meetings: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Meetings
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Schedule and manage meetings and events.
      </Typography>
    </Box>
  );
};

export default Meetings;
