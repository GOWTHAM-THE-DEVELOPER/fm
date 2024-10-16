import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../AllServices/employee.service';
import { Employee } from '../Interface/employee.model';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

interface Day {
  label: string;
  date: string;
  employees: Employee[];
  leaveCount: number;
}

@Component({
  selector: 'app-onleave',
  templateUrl: './onleave.component.html',
  styleUrls: ['./onleave.component.scss']
})
export class OnLeaveComponent implements OnInit {
  currentWeek: string = '';
  weekDays: Day[] = [];
  isCalendarVisible: boolean = false;
  selectedDate: Date | null = null;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.setWeek(new Date());
  }

  setWeek(date: Date): void {
    this.weekDays = [];
    const startOfWeek = this.getStartOfWeek(date);
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);

    this.currentWeek = `${this.formatDate(startOfWeek)} - ${this.formatDate(endOfWeek)}`;

    for (let i = 0; i < 7; i++) {
      const dayDate = new Date(startOfWeek);
      dayDate.setDate(startOfWeek.getDate() + i);
      this.employeeService.getEmployeesOnLeave(this.formatDate(dayDate)).subscribe(
        (employees: Employee[]) => {
          this.weekDays.push({
            label: this.getDayLabel(dayDate),
            date: this.formatDate(dayDate),
            employees: employees,
            leaveCount: employees.length
          });
        },
        (error: any) => {
          console.error('Failed to fetch employees on leave', error);
        }
      );
    }
  }

  getStartOfWeek(date: Date): Date {
    const start = new Date(date);
    const day = start.getDay();
    const diff = start.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(start.setDate(diff)); // Start of the week is Monday
  }

  formatDate(date: Date): string {
    return date.toISOString().split('T')[0];
  }

  getDayLabel(date: Date): string {
    return date.toLocaleString('default', { weekday: 'short' });
  }

  previousWeek(): void {
    if (this.weekDays.length > 0) {
      const currentStart = new Date(this.weekDays[0].date);
      const previousWeekStart = new Date(currentStart.setDate(currentStart.getDate() - 7));
      this.setWeek(previousWeekStart);
    }
  }

  nextWeek(): void {
    if (this.weekDays.length > 0) {
      const currentStart = new Date(this.weekDays[0].date);
      const nextWeekStart = new Date(currentStart.setDate(currentStart.getDate() + 7));
      this.setWeek(nextWeekStart);
    }
  }

  onDateChange(event: MatDatepickerInputEvent<Date>): void {
    const selectedDate = event.value;
    if (selectedDate) {
      this.setWeek(selectedDate);
      this.selectedDate = selectedDate;
    }
  }
}
