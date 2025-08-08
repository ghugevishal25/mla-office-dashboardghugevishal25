import React from 'react';
import { Box, Card, CardContent, Grid, Typography, Paper } from '@mui/material';
import {
  People as PeopleIcon,
  Event as EventIcon,
  Task as TaskIcon,
  CheckCircle as CheckCircleIcon,
} from '@mui/icons-material';
import type { DashboardStats } from '../types';

const Dashboard: React.FC = () => {
  // Mock data - in real app this would come from API
  const stats: DashboardStats = {
    totalMembers: 45,
    activeMeetings: 8,
    pendingTasks: 12,
    completedTasks: 34,
  };

  const StatCard: React.FC<{
    title: string;
    value: number;
    icon: React.ReactNode;
    color: string;
  }> = ({ title, value, icon, color }) => (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box
            sx={{
              backgroundColor: color,
              borderRadius: '50%',
              p: 1,
              mr: 2,
              color: 'white',
            }}
          >
            {icon}
          </Box>
          <Box>
            <Typography variant="h4" component="div">
              {value}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {title}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        Dashboard
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Welcome to the MLA Office Management Dashboard
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Total Members"
            value={stats.totalMembers}
            icon={<PeopleIcon />}
            color="#1976d2"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Active Meetings"
            value={stats.activeMeetings}
            icon={<EventIcon />}
            color="#388e3c"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Pending Tasks"
            value={stats.pendingTasks}
            icon={<TaskIcon />}
            color="#f57c00"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Completed Tasks"
            value={stats.completedTasks}
            icon={<CheckCircleIcon />}
            color="#4caf50"
          />
        </Grid>
      </Grid>

      <Box sx={{ mt: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Recent Activities
              </Typography>
              <Typography variant="body2" color="text.secondary">
                • Meeting with Education Committee scheduled for tomorrow
              </Typography>
              <Typography variant="body2" color="text.secondary">
                • Budget proposal reviewed and approved
              </Typography>
              <Typography variant="body2" color="text.secondary">
                • New member registration completed
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>
                Upcoming Events
              </Typography>
              <Typography variant="body2" color="text.secondary">
                • Weekly team meeting - Today at 2:00 PM
              </Typography>
              <Typography variant="body2" color="text.secondary">
                • Constituency visit - Tomorrow
              </Typography>
              <Typography variant="body2" color="text.secondary">
                • Budget review session - Friday
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
