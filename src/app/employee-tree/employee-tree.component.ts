import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-tree',
  templateUrl: './employee-tree.component.html',
  styleUrls: ['./employee-tree.component.scss']
})
export class EmployeeTreeComponent {
  employees!: any[];
  selectedEmployee: any = null;
  selectedTeam: any = null;
  selectedTeamLead: any = null;

  ngOnInit() {
    this.employees = [
      {
        label: 'Arul (CEO)',
        children: [
          { label: 'TEAM A', children: [{ label: 'TEAM-A LEAD' }, { label: 'TEAM-A MEMBER' }, { label: 'TEAM-A MEMBER' }, { label: 'TEAM-A MEMBER' }, { label: 'TEAM-A MEMBER' }] },
          { label: 'TEAM B', children: [{ label: 'TEAM-B LEAD' }, { label: 'TEAM-B MEMBER' }, { label: 'TEAM-B MEMBER' }, { label: 'TEAM-B MEMBER' }, { label: 'TEAM-B MEMBER' }] },
          { label: 'TEAM C', children: [{ label: 'TEAM-C LEAD' }, { label: 'TEAM-C MEMBER' }, { label: 'TEAM-C MEMBER' }, { label: 'TEAM-C MEMBER' }, { label: 'TEAM-C MEMBER' }] },
          { label: 'TEAM D', children: [{ label: 'TEAM-D LEAD' }, { label: 'TEAM-D MEMBER' }, { label: 'TEAM-D MEMBER' }, { label: 'TEAM-D MEMBER' }, { label: 'TEAM-D MEMBER' }] },
        ]
      }
    ];
  }

  selectEmployee(employee: any) {
    this.selectedEmployee = employee;
    this.selectedTeam = null;
    this.selectedTeamLead = null;
  }

  selectTeam(team: any) {
    this.selectedTeam = team;
    this.selectedTeamLead = null;
  }

  selectTeamLead(team: any) {
    this.selectedTeamLead = team.children[0];
  }
}
