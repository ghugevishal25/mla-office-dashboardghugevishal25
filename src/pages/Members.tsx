import React from 'react';
import { Box, Typography } from '@mui/material';

const Members: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Members
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Manage MLA members and their information.
      </Typography>
    </Box>
  );
};

export default Members;
