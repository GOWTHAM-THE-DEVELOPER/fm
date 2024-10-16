import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FeedsService } from '../feeds.service';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrl: './feeds.component.scss'
})
export class FeedsComponent implements OnInit {

  formValue!: FormGroup;
  collection: any = [];
  currentTime: string = '';
  isPopupVisible: boolean = false;
  activePopupId: any = null;
  index:number=0;
  activeButtons:boolean=true;
  // updateActive:boolean=false

  constructor(private formB: FormBuilder, private srever: FeedsService) {
  }
  ngOnInit(): void {
    this.formValue = this.formB.group({
      title: ['',Validators.required],
      name: ['',Validators.required],
      // time:[this.currentTime]
    })
    this.getFeedMethod()
  }

  getFeedMethod() {
    this.srever.getMethod().subscribe((res: any) => {
      this.collection = res
      console.log(res)
    })
  }

  formSubmit() {
    // Capture current time
    if(this.formValue.valid){
      const now = new Date();
      this.currentTime = now.toLocaleString();  // Use full date and time
      const formData = { ...this.formValue.value, currentTime: this.currentTime };
      
      this.srever.postMethod(formData).subscribe(() => {
        this.getFeedMethod();
      });
      
      console.log(formData, "form value with time");
      this.formValue.reset();
    }
  }

  editCkick(id: any) {
    this.index=id
    this.srever.gettingMethod(id).subscribe((res: any) => {
      this.formValue.patchValue(res)
    })
    this.activeButtons=false
  }

  delete(id: any) {
    this.srever.deleteMethod(id).subscribe(() => {
      this.getFeedMethod()
    })
  }
  updateClick(){
    this.srever.putMethod(this.index,this.formValue.value).subscribe((res)=>{
      this.getFeedMethod()
    })
    this.activeButtons=true;
    this.formValue.reset()
  }

  togglePopup(postId: any) {
    // Toggle the popup visibility for the clicked post
    this.activePopupId = this.activePopupId === postId ? null : postId;
  }
 
}
