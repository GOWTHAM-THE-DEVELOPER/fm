import { Component, ElementRef, ViewChild } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss',
})
export class OverviewComponent {
  selectedTab: any = '';
  bootstrap: any;
  isPopupVisible = false;

  aditionalClick(getValues: any) {
    this.selectedTab = getValues;
  }


  togglePopup() {
    this.isPopupVisible = !this.isPopupVisible;
  }


}
