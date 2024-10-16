import { Component, OnInit, OnDestroy } from '@angular/core';
import { GoalService } from '../AllServices/goal.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Goal } from '../Interface/Goals.model';
import { Subscription } from 'rxjs';
import { DeleteGoalsComponent } from '../delete-goals/delete-goals.component';
import { CommentsComponent } from '../comments/comments.component';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit, OnDestroy {
  goals: Goal[] = [];
  filteredGoals: Goal[] = [];
  private goalsSub!: Subscription;

  allGoalsCount: number = 0;
  thisWeekCount: number = 0;
  thisMonthCount: number = 0;
  thisYearCount: number = 0;

  // Stepper State
  step1Completed: boolean = false;
  step2Completed: boolean = false;
  step3Completed: boolean = false;
  step4Completed: boolean = false;

  constructor(
    private goalService: GoalService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadGoals();

    this.goalsSub = this.goalService.getGoalsUpdatedListener().subscribe(() => {
      this.loadGoals();
    });

    this.updateStepperState();
  }

  ngOnDestroy(): void {
    this.goalsSub.unsubscribe();
  }

  private loadGoals(): void {
    this.goalService.getGoals().subscribe(data => {
      this.goals = data;
      this.updateCounts();
      this.filterGoals('all'); // Default filter on load
      this.updateStepperState();
    });
  }

  private updateStepperState(): void {
    this.step1Completed = this.goals.some(goal => goal.status === 'GoalsAdded');
    this.step2Completed = this.goals.some(goal => goal.status === 'PendingManagerApproval');
    this.step3Completed = this.goals.some(goal => goal.status === 'PendingUserApproval');
    this.step4Completed = this.goals.every(goal => goal.status === 'GoalFinished');
  }

  navigateToGoalSpace(goalId: string): void {
    this.router.navigate(['/goal-space', goalId]);
  }

  openCommentsDialog(goalId: string): void {
    const dialogRef = this.dialog.open(CommentsComponent, {
      width: '600px',
      data: { goalId }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadGoals();
      }
    });
  }

  private updateCounts(): void {
    const now = new Date();
    const startOfWeek = new Date(now);
    startOfWeek.setDate(now.getDate() - now.getDay());
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const startOfYear = new Date(now.getFullYear(), 0, 1);

    this.allGoalsCount = this.goals.length;

    this.thisWeekCount = this.goals.filter(goal => {
      const startDate = new Date(goal.startDate);
      return startDate >= startOfWeek && startDate <= now;
    }).length;

    this.thisMonthCount = this.goals.filter(goal => {
      const startDate = new Date(goal.startDate);
      return startDate >= startOfMonth && startDate <= now;
    }).length;

    this.thisYearCount = this.goals.filter(goal => {
      const startDate = new Date(goal.startDate);
      return startDate >= startOfYear && startDate <= now;
    }).length;
  }

  filterGoals(period: string): void {
    const now = new Date();
    const startOfWeek = new Date(now);
    startOfWeek.setDate(now.getDate() - now.getDay());
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const startOfYear = new Date(now.getFullYear(), 0, 1);

    switch (period) {
      case 'all':
        this.filteredGoals = this.goals;
        break;
      case 'thisWeek':
        this.filteredGoals = this.goals.filter(goal => {
          const startDate = new Date(goal.startDate);
          return startDate >= startOfWeek && startDate <= now;
        });
        break;
      case 'thisMonth':
        this.filteredGoals = this.goals.filter(goal => {
          const startDate = new Date(goal.startDate);
          return startDate >= startOfMonth && startDate <= now;
        });
        break;
      case 'thisYear':
        this.filteredGoals = this.goals.filter(goal => {
          const startDate = new Date(goal.startDate);
          return startDate >= startOfYear && startDate <= now;
        });
        break;
    }
  }

  addGoal(): void {
    this.router.navigate(['/add-goal']);
  }

  editGoal(goal: Goal): void {
    this.router.navigate(['/add-goal', goal.id]);
  }

  deleteGoal(goal: Goal): void {
    this.openDeleteDialog(goal);
  }

  openDeleteDialog(goal: Goal): void {
    const dialogRef = this.dialog.open(DeleteGoalsComponent, {
      width: '400px',
      data: { id: goal.id, name: goal.name }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.goalService.deleteGoal(goal.id).subscribe({
          next: () => {
            console.log('Goal deleted successfully');
            this.loadGoals();
          },
          error: (err) => {
            console.error('Error deleting goal:', err);
          }
        });
      }
    });
  }
  
}
