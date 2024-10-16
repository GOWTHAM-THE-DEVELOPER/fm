import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skillset',

  templateUrl: './skillset.component.html',
  styleUrl: './skillset.component.scss',
  animations: [
    trigger('popupAnimation', [
      state('void', style({
        transform: 'scale(0.9)',
        opacity: 0
      })),
      state('*', style({
        transform: 'scale(1)',
        opacity: 1
      })),
      transition('void => *', animate('800ms ease-out')),
      transition('* => void', animate('200ms ease-in'))
    ])
  ]
})
export class SkillsetComponent {

  skillForm!: FormGroup;
  showPopup = false;
  currentIndex: number | null = null;


  constructor( private route:Router, private fb: FormBuilder){
    this.skillForm = this.fb.group({
      name: ['', Validators.required],
      yof: ['', Validators.required],
      rating: ['', Validators.required]
    });
  }
  skills=[
    {name:'Java',yof:3,rating:7},
    {name:'python',yof:4,rating:4},
    {name:'Angular',yof:5,rating:5},
    {name:'SQL',yof:6,rating:6},
    {name:'C++',yof:7,rating:2},
    {name:'Angular',yof:8,rating:1},
    {name:'XML',yof:9, rating:7},
    {name:'SQL',yof:3,rating:8},
    {name:'Window',yof:2,rating:3}
  ]

  editSkill(skill: any, index: number) {
    this.skillForm.patchValue(skill);
    this.currentIndex = index;
    this.showPopup = true;
  }

  onSave() {
    if (this.skillForm.valid && this.currentIndex !== null) {
      this.skills[this.currentIndex] = this.skillForm.value;
      this.showPopup = false;
      this.currentIndex = null;
    }
  }

  onClose() {
    this.showPopup = false;
    this.currentIndex = null;
  }
  addSkill() { debugger
    this.skills.push({ name: 'Angular', yof: 22323, rating: 3,});
    console.log(this.skills,'array value')
    alert('Extra row added')
  }

  deleteRow(index: number): void {
    this.skills.splice(index, 1);
  }

  nextClick(){
    this.route.navigate(['/professional'])
    }

}

