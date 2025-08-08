import React from 'react';
import { Box, Typography } from '@mui/material';

const Tasks: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Tasks
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Manage tasks and assignments for the office.
      </Typography>
    </Box>
  );
};

export default Tasks;
