import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BsDatepickerDirective } from 'ngx-bootstrap/datepicker';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-general',

  templateUrl: './general.component.html',
  styleUrl: './general.component.scss'
})
export class GeneralComponent implements OnInit {

  model:any
  ngbDatepicker:any
  informationForm!  :FormGroup
  active:boolean=true

  constructor(private fbuilder:FormBuilder, private route:Router  , private serv:ServerService){}

  ngOnInit(): void {
   this.informationForm=this.fbuilder.group({
    firstName:['',Validators.required],
    dob:['',Validators.required],
    position:['',Validators.required],
    lastname:['',Validators.required],
    gender:['',Validators.required],
    employeeReference:['',Validators.required],
    mobileNumber: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
    homeNumber: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
    officeNumber: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
    email:['',Validators.required,Validators.email],
    presentAddress:['',Validators.required],
    city:['',Validators.required],
    district:['',Validators.required],
    country:['',Validators.required],
    locality:['',Validators.required],
    pincode:['',Validators.required],
    state:['',Validators.required],
    passport:['',Validators.required],
    landmark:['',Validators.required],
    visa:['',Validators.required],
    maritalstatus:['',Validators.required],
    tname:['',Validators.required],
    trelationship:['',Validators.required],
    tage:['',Validators.required],
    too:['',Validators.required],
    language:['',Validators.required],
    speak:['',Validators.required],
    Read:['',Validators.required],
    Write:['',Validators.required],
   })
  }

  saveClick(){

  this.serv.basicPosttMethod(this.informationForm.value).subscribe((res:any)=>{

  })

  }



  get firstName() {
    return this.informationForm.get('firstName');
  }
  get dob() {
    return this.informationForm.get('dob');
  }
  get position() {
    return this.informationForm.get('position');
  }
  get lastname() {
    return this.informationForm.get('lastname');
  }
  // get gender() {
  //   return this.informationForm.get('gender');
  // }
  get employeeReference() {
    return this.informationForm.get('employeeReference');
  }
  get mobileNumber() {
    return this.informationForm.get('mobileNumber');
  }
  get homeNumber() {
    return this.informationForm.get('homeNumber');
  }
  get officeNumber() {
    return this.informationForm.get('officeNumber');
  }
  get email() {
    return this.informationForm.get('email');
  }
  get presentAddress() {
    return this.informationForm.get('presentAddress');
  }
  get city() {
    return this.informationForm.get('city');
  }
  get district() {
    return this.informationForm.get('district');
  }
  get country() {
    return this.informationForm.get('country');
  }
  get locality() {
    return this.informationForm.get('locality');
  }
  get pincode() {
    return this.informationForm.get('pincode');
  }
  get state() {
    return this.informationForm.get('state');
  }
  get passport() {
    return this.informationForm.get('passport');
  }
  get landmark() {
    return this.informationForm.get('landmark');
  }
  get visa() {
    return this.informationForm.get('visa');
  }
  get maritalstatus() {
    return this.informationForm.get('maritalstatus');
  }
  get tname() {
    return this.informationForm.get('tname');
  }
  get trelationship() {
    return this.informationForm.get('trelationship');
  }
  get tage() {
    return this.informationForm.get('tage');
  }
  get too() {
    return this.informationForm.get('too');
  }
  get language() {
    return this.informationForm.get('language');
  }
  get speak() {
    return this.informationForm.get('speak');
  }

  nextClick(){
  this.route.navigate(['/educational'])
  }



}
