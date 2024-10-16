import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from 'src/app/Interface/employee.model';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {

  @Input() employee: Employee | null = null;
  @Output() cancel = new EventEmitter<void>();
  @Output() save = new EventEmitter<Employee>();

  employeeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.employeeForm = this.fb.group({
      employeeName: ['', Validators.required],
      joinDate: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    if (this.employee) {
      this.employeeForm.patchValue(this.employee);
    }
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      this.save.emit(this.employeeForm.value);
    }
  }

  onCancel(): void {
    this.cancel.emit();
  }
}
