import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-educational',

  templateUrl: './educational.component.html',
  styleUrl: './educational.component.scss'
})
export class EducationalComponent {
  educationGroup!:FormGroup

  arrayValue:any=[]

  constructor(private fb: FormBuilder,  private route:Router , private server:ServerService) {}

  ngOnInit() {
    this.educationGroup = this.fb.group({
      coursePursued: ['', Validators.required],
      durationFrom: ['', Validators.required],
      durationTo: ['', Validators.required],
      institutionName: ['', Validators.required],
      cgpaObtained: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
    });
  }

  get coursePursued() {
    return this.educationGroup.get('coursePursued');
  }
  get durationFrom() {
    return this.educationGroup.get('durationFrom');
  }
  get durationTo() {
    return this.educationGroup.get('durationTo');
  }
  get institutionName() {
    return this.educationGroup.get('institutionName');
  }
  get cgpaObtained() {
    return this.educationGroup.get('cgpaObtained');
  }

  getDataMethod(){
    this.server.getMethod().subscribe((res:any)=>{
      this.arrayValue=res
     this.server.userSubject.next(this.arrayValue)

    })
  }
  addedClick(){
    console.log(this.educationGroup.value,'efwefweewf')
    this.server.postMethod(this.educationGroup.value).subscribe((res)=>{
      this.getDataMethod()
    })

  }



  nextClick(){
    this.route.navigate(['/skillset'])
    }
}

