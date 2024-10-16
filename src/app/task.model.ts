export interface Task {
    id?: number;
    name: string; // Ensure 'name' property exists
    taskOwner: string;
    taskName: string;
    description: string;
    startDate: Date;
    dueDate: Date;
    reminder?: Date;
    priority: string;
    status: string;
  }
  