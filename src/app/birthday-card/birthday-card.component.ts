import { Component, OnInit } from '@angular/core';
import { BirthdayService } from './birthday-card.service';
import { Employee } from '../Interface/employee.model';

@Component({
  selector: 'app-birthday-card',
  templateUrl: './birthday-card.component.html',
  styleUrls: ['./birthday-card.component.scss']  // Corrected property name
})
export class BirthdayCardComponent implements OnInit {

 
  todayBirthdays: Employee[] = [];

  constructor(private birthdayService: BirthdayService) { }

  ngOnInit(): void {
    this.birthdayService.getTodayBirthdays().subscribe(
      (employees: Employee[]) => {
        this.todayBirthdays = employees;
      },
      (error) => {
        console.error('Failed to fetch today\'s birthdays', error);
      }
    );
  }
}
