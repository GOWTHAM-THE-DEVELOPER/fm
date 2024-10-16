import { Component, OnInit } from '@angular/core';
import { Team } from '../Interface/team';
import { TeamService } from '../teams-dashboard/team.service';

interface Message {
  sender: string;
  text: string;
  timestamp: Date;
}

@Component({
  selector: 'app-teams-space',
  templateUrl: './teams-space.component.html',
  styleUrl: './teams-space.component.scss'
})
export class TeamsSpaceComponent implements OnInit {

  team: Team = new Team();
  messages: Message[] = [];
  newMessage: string ='';


  constructor(private teamService : TeamService) {}

  ngOnInit(): void {
    this.loadTeamData();
  }

  loadTeamData(): void
  {
    this.teamService.getTeamStrength().subscribe((data) => (this.team.teamStrength = data));
    this.teamService.getWorkAnniversaries().subscribe((data) => (this.team.workAnniversaries = data));
    this.teamService.getNewHires().subscribe((data) => (this.team.newHires = data));
    this.teamService.getBirthdayBuddies().subscribe((data) => (this.team.birthdayBuddies = data));
    this.teamService.getDepartmentFiles().subscribe((data) => (this.team.departmentFiles = data));
    this.teamService.getTeamAvailability().subscribe((data) => (this.team.teamAvailability = data));
  }

  postMessage() {
    if (this.newMessage.trim()) {
      const message: Message = {
        sender: 'Current User',
        text: this.newMessage,
        timestamp: new Date()
      };
      this.messages.push(message);
      this.newMessage = '';
    }
  }

}
