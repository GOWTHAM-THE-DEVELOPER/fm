import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrl: './onboarding.component.scss'
})
export class OnboardingComponent implements OnInit {


  employee: any[] = [];
  originalEmployee: any[] = []; // Store the original data
  apiUrl: string = 'http://localhost:8080/api/approval';
  approveUrl: string = 'http://localhost:8080/api/approval'; // URL for approval API

  startDate: any | null = null; // To hold the selected start date
  endDate: string | null = null;   // To hold the selected end date


  ngOnInit() {
    this.loadInactiveWorkers();
  }

  loadInactiveWorkers(): void {

  }

  filterByDate(): void {
    if (this.startDate && this.endDate) {
      const start = new Date(this.startDate);
      const end = new Date(this.endDate);

      // Check for valid date range
      if (!isNaN(start.getTime()) && !isNaN(end.getTime())) {
        this.employee = this.originalEmployee.filter(worker => {
          const joinDate = new Date(worker.createdDate);
          return joinDate >= start && joinDate <= end;
        });
      } else {
        console.error('Invalid date range');
      }
    } else {
      console.error('Both start date and end date must be provided');
    }
  }

  undoFilter(): void {
    this.employee = [...this.originalEmployee]; // Restore the original data
  }

  approveEmployee(id: number): void {

  }
}
