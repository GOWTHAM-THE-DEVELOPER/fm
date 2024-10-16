import { Component } from '@angular/core';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss'
})
export class ReportsComponent {

  breadcrumbItems: string[] = ['My Reports', 'Team Reports', 'Organization Reports', 'Analytics'];

  activeTab: string = 'my-reports';

  selectTab(tab: string) {
    this.activeTab = tab;
  }
}
