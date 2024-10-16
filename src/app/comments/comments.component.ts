import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { GoalService } from '../AllServices/goal.service';
import { Comment } from '../Interface/Goals.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  comments: Comment[] = [];
  newComment: string = '';
  newAuthorType: 'user' | 'manager' = 'user';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { goalId: number },
    private goalService: GoalService,
    private dialogRef: MatDialogRef<CommentsComponent>
  ) {}

  ngOnInit(): void {
    this.loadComments();
  }

  loadComments(): void {
    debugger
    this.goalService.getComments().subscribe(
      (response: Comment[]) => {
        this.comments = response;
        console.log('Comments loaded:', this.comments);
      },
      (error) => console.error('Error loading comments:', error)
    );
  }

  addComment(): void {
    debugger
    if (this.newComment.trim()) {
      const comment: Comment = {
        id: Math.floor(Math.random() * 10000),
        text: this.newComment,
        author: 'Current User',
        authorType: this.newAuthorType,
        createdAt: new Date()
      };

      this.goalService.addComment(comment).subscribe(
        (response: Comment) => {
          console.log('Comment successfully posted:', response);
          this.comments.push(response);
          this.newComment = '';
          this.newAuthorType = 'user';
        },
        (err) => console.error('Error posting comment:', err)
      );
    }
  }

  oncancel() {
    this.dialogRef.close();
  }
}
