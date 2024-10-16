import { Component, OnInit } from '@angular/core';
import { NewHiresService } from '../AllServices/new-hires.service';
import { Router } from '@angular/router';
import { Employee } from '../Interface/employee.model';

@Component({
  selector: 'app-new-hires-card',
  templateUrl: './new-hires-card.component.html',
  styleUrls: ['./new-hires-card.component.scss']
})
export class NewHiresComponent implements OnInit {
  

  employees: Employee[] = [];
  isContentVisible: boolean = false;
  selectedEmployee: Employee | null = null;

  constructor(private newHiresService: NewHiresService, private router: Router) { }

  ngOnInit(): void {
    this.newHiresService.getRecentHires().subscribe((employees: Employee[]) => {
      this.employees = employees;
    });
  }

  viewEmployeeDetails(id: number): void {
    this.router.navigate(['/employee-details', id]);
  }

  toggleContent(): void {
    this.isContentVisible = !this.isContentVisible;
  }
  
}
