export interface LeaveRequest {
 
  employeeId?: string | any;
  employeeName?: string;
  leaveType: string;
  available?: number | any;
  booked?: number | any;
  iconClass?: string;
  email?: string;
  designation?: string;
  teamId?: string;
  type?: string;
  leavePeriod?: string;
  startDate?: string;
  endDate?: string;
  totalDays?: number;
  reasonforLeave?: string;
  status?: string;
  dateOfRequest?: string;
  selected?: boolean;
  comment?: string;
  reasonforRejected?: string;
  color?: string;
  rejectionComment?: string;
  daysTaken?: number; 
  typeLeave?:string;
}
