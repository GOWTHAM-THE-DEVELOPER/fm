export class Team {
    teamStrength: number;
    workAnniversaries: string[];
    newHires: string[];
    birthdayBuddies: string[];
    departmentFiles: string[];
    teamAvailability: { yetToCheckIn: number; onLeave: number };
  
    constructor() {
      this.teamStrength = 0;
      this.workAnniversaries = [];
      this.newHires = [];
      this.birthdayBuddies = [];
      this.departmentFiles = [];
      this.teamAvailability = { yetToCheckIn: 0, onLeave: 0 };
    }
  }
  