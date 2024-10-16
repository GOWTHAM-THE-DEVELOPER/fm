import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { TaskService } from '../task.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrl: './form-view.component.scss'
})
export class FormViewComponent {
  taskForm!: FormGroup;
  minDate: string;
  isModalOpen = false;
  editingTask: Task | null = null;
  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  showFilterPopup = false;
  filterCriteria = {
    taskName: '',
    priority: '',
    status: ''
  };

  constructor(private fb: FormBuilder, private taskService: TaskService) {
    const today = new Date();
    this.minDate = today.toISOString().split('T')[0];
  }

  ngOnInit(): void {
    this.loadTasks();

    // Initialize the Reactive Form
    this.taskForm = this.fb.group({
      taskOwner: ['', Validators.required],
      taskName: ['', Validators.required],
      description: ['', Validators.required],
      startDate: ['', [Validators.required, this.dateValidator.bind(this)]],
      dueDate: ['', [Validators.required, this.dateValidator.bind(this)]],
      reminder: ['',[Validators.required, this.dateValidator.bind(this)]],
      priority: ['Low', Validators.required],
      status: ['Not Started', Validators.required]
    });
  }

  // Validator function to check date validity
  dateValidator(control: FormControl): ValidationErrors | null {
    const today = new Date().toISOString().split('T')[0];
    const selectedDate = control.value;
    if (selectedDate < today) {
      return { invalidDate: true };
    }
    return null;
  }

  loadTasks(): void {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
      this.filteredTasks = tasks;
    });
  }

  filterTasks(status: string): void {
    setTimeout(() => {
      if (status === 'Total') {
        this.filteredTasks = this.tasks;
      } else {
        this.filteredTasks = this.tasks.filter(task => task.status === status);
      }
    });
  }

  openModal(task?: Task): void {
    this.isModalOpen = true;
    if (task) {
      this.editingTask = { ...task };
      this.taskForm.patchValue(this.editingTask);  // Populate the form with task data
    } else {
      this.editingTask = null;
      this.taskForm.reset();  // Reset the form for a new task
    }
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.editingTask = null;
  }
  submitForm(): void {
    if (this.taskForm.valid) {
      const taskData = this.taskForm.value;
      if (this.editingTask) {
        taskData.id = this.editingTask.id;
        this.taskService.updateTask(taskData).subscribe(() => {
          this.loadTasks();
          this.closeModal();
        });
      } else {
        this.taskService.addTask(taskData).subscribe(() => {
          this.loadTasks();
          this.closeModal();
        });
      }
    } else {
      // Mark all fields as touched to show validation messages
      this.taskForm.markAllAsTouched();
      // You can also log errors or handle them as needed
      console.log('Form is invalid');
    }
  }
  

  editTask(task: Task): void {
    this.openModal(task);
  }

  deleteTask(id: number | undefined): void {
    if (id !== undefined) {
      this.taskService.deleteTask(id).subscribe(() => {
        this.loadTasks();
      });
    } else {
      console.error('Task ID is undefined, cannot delete task.');
    }
  }

  toggleFilterPopup(): void {
    this.showFilterPopup = !this.showFilterPopup;
  }

  applyFilters(): void {
    this.filteredTasks = this.tasks.filter(task => {
      const matchesName = this.filterCriteria.taskName
        ? task.taskName.toLowerCase().includes(this.filterCriteria.taskName.toLowerCase().trim())
        : true;
      const matchesPriority = this.filterCriteria.priority
        ? task.priority === this.filterCriteria.priority
        : true;
      const matchesStatus = this.filterCriteria.status
        ? task.status === this.filterCriteria.status
        : true;

      return matchesName && matchesPriority && matchesStatus;
    });

    console.log('Filters applied', this.filterCriteria);
    this.toggleFilterPopup();
  }

  resetFilters(): void {
    this.filterCriteria = {
      taskName: '',
      priority: '',
      status: ''
    };
    this.filteredTasks = this.tasks;
    console.log('Filters reset');
    this.toggleFilterPopup();
  }

  getPriorityClass(priority: string): string {
    switch (priority) {
      case 'Low':
        return 'status-completed';
      case 'Medium':
        return 'status-in-progress';
      case 'High':
        return 'status-not-started';
      default:
        return '';
    }
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Completed':
        return 'status-completed';
      case 'In Progress':
        return 'status-in-progress';
      case 'Not Started':
        return 'status-not-started';
      default:
        return '';
    }
  }
}
