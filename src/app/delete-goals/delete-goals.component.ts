import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GoalService } from '../AllServices/goal.service';

@Component({
  selector: 'app-delete-goals',
  templateUrl: './delete-goals.component.html',
  styleUrls: ['./delete-goals.component.scss']
})
export class DeleteGoalsComponent {
 
  constructor(
    public dialogRef: MatDialogRef<DeleteGoalsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: string; name: string },
    private goalService: GoalService
  ) { }

  onConfirm(): void {
    this.goalService.deleteGoal(this.data.id).subscribe({
      next: () => this.dialogRef.close(true),
      error: (err) => {
        console.error('Error deleting goal:', err);
        this.dialogRef.close(false);
      }
    });
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
  
}
