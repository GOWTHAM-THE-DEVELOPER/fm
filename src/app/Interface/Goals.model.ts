export interface Goal 
{
    id: string;
    name: string;
    description: string;
    priority: string;
    startDate: string;
    endDate: string;
    progress: number;
    status: 'GoalsAdded' | 'PendingManagerApproval' | 'PendingUserApproval' | 'GoalFinished';
  }
  
  export interface Comment {
    id: number;
    text: string;
    author: string;
    authorType: 'user' | 'manager';
    createdAt: Date;
  }
  
  