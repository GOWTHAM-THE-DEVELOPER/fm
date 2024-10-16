import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-more-options',
  templateUrl: './more-options.component.html',
  styleUrl: './more-options.component.scss',
})
export class MoreOptionsComponent {
  @Output() changeIcons = new EventEmitter();

  sidNave: any = [
    {
      name: 'task',
      icons: 'fa-solid fa-list-check',
      router: 'task-tasks',
    },
    {
      name: 'Onboarding',
      icons: 'fa-regular fa-handshake',
      router: 'onboarding',
    },
  ];
  onboardingClick(key: any) {
    this.changeIcons.emit(key);
  }
}
