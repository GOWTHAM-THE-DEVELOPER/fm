import { Component, input } from '@angular/core';


@Component({
  selector: 'app-details',

  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {




  workers: any[] = [
    { firstName: 'Raji', secondName: 'Krishnan', mailId: '', officialMailId: '', mobile: '987654345', onboardingStatus: 'pending', department: 'Software Developer', active: 'null', hidden: false,  },
    { firstName: 'Anbu', secondName: 'Krishnan', mailId: '', officialMailId: '', mobile: '987654345', onboardingStatus: 'Active', department: 'Software Developer', active: 'no', hidden: false },
    { firstName: 'Raji', secondName: 'Krishnan', mailId: '', officialMailId: '', mobile: '987654345', onboardingStatus: 'Active', department: 'Software Developer', active: 'yes', hidden: false },
    { firstName: 'Raji', secondName: 'Krishnan', mailId: '', officialMailId: '', mobile: '987654345', onboardingStatus: 'Active', department: 'Software Developer', active: 'no', hidden: false },
    { firstName: 'Raji', secondName: 'Krishnan', mailId: '', officialMailId: '', mobile: '987654345', onboardingStatus: 'Inactive', department: 'Software Developer', active: 'yes', hidden: false },
    { firstName: 'Raji', secondName: 'Krishnan', mailId: '', officialMailId: '', mobile: '987654345', onboardingStatus: 'Inactive', department: 'Software Developer', active: 'no', hidden: false },
    { firstName: 'Raji', secondName: 'Krishnan', mailId: '', officialMailId: '', mobile: '987654345', onboardingStatus: 'Active', department: 'Software Developer', active: 'yes', hidden: false },
    { firstName: 'Raji', secondName: 'Krishnan', mailId: '', officialMailId: '', mobile: '987654345', onboardingStatus: 'pending', department: 'Software Developer', active: 'null', hidden: false },

  ];

  selectedRows: any[] = [];

  constructor() {}

  deleteSelectedRows() {
    this.selectedRows.forEach(row => {
      const index = this.workers.indexOf(row);
      if (index !== -1) {
        this.workers.splice(index, 1);
      }
    });
    this.selectedRows = [];
    alert('Are you sure want delete this row')
  }

  filterWorkers(activeStatus: string) {
    if (activeStatus === 'all') {
      // Show all workers
      this.workers.forEach(worker => worker.hidden = false);
    } else {
      // Filter based on active status
      this.workers.forEach(worker => {
        if (worker.active === activeStatus) {
          worker.hidden = false;
        } else {
          worker.hidden = true;
        }
      });
    }
  }

  toggleSelection(event: Event, worker: any) {
    if ((event.target as HTMLInputElement).checked) {
      this.selectedRows.push(worker);
    } else {
      const index = this.selectedRows.indexOf(worker);
      if (index !== -1) {
        this.selectedRows.splice(index, 1);
      }
    }
  }

  selectAll(event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.selectedRows = isChecked ? [...this.workers] : [];
  }


}
