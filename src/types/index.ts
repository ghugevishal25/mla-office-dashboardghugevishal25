export interface MLAMember {
  id: string;
  name: string;
  constituency: string;
  party: string;
  email: string;
  phone: string;
  status: 'active' | 'inactive';
}

export interface Meeting {
  id: string;
  title: string;
  date: Date;
  time: string;
  location: string;
  attendees: string[];
  agenda: string;
  status: 'scheduled' | 'completed' | 'cancelled';
}

export interface Task {
  id: string;
  title: string;
  description: string;
  assignedTo: string;
  dueDate: Date;
  priority: 'low' | 'medium' | 'high';
  status: 'pending' | 'in-progress' | 'completed';
}

export interface DashboardStats {
  totalMembers: number;
  activeMeetings: number;
  pendingTasks: number;
  completedTasks: number;
}
