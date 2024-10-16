import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NewHiresService } from '../../AllServices/new-hires.service';
import { Employee } from 'src/app/Interface/employee.model';

@Component({
  selector: 'app-employee-details',
  templateUrl:'./employee-details.component.html',
  styleUrls: ['./employee-details.component.scss'] // Updated 'styleUrl' to 'styleUrls'
})
export class EmployeeDetailsComponent implements OnInit {

  employee: Employee | null = null;
  isEditing: boolean = false;

  constructor(private route: ActivatedRoute, private newHiresService: NewHiresService, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.newHiresService.getEmployeeById(id).subscribe(
        (employee: Employee) => {
          this.employee = employee;
        },
        (error: any) => {
          console.error('Failed to fetch employee details', error);
        }
      );
    }else{
      console.error('Employee ID is null');
    }
  }

  startEdit(): void {
    this.isEditing = true;
  }

  cancelEdit(): void {
    this.isEditing = false;
  }

  saveEmployee(employee: Employee): void {
    if (this.employee) {
      this.newHiresService.updateEmployee({ ...this.employee, ...employee }).subscribe(
        (updatedEmployee: Employee) => {
          this.employee = updatedEmployee;
          this.isEditing = false;
        },
        (error: any) => {
          console.error('Failed to save employee details', error);
        }
      );
    }
  }

  deleteEmployee(): void {
    if (this.employee) {
      this.newHiresService.deleteEmployee(this.employee.employeeId).subscribe(
        () => {
          this.router.navigate(['/new-hires']);
        },
        (error: any) => {
          console.error('Failed to delete employee', error);
        }
      );
    }
  }
}
