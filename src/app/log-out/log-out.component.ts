import { Component, EventEmitter, Output, output } from '@angular/core';

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrl: './log-out.component.scss'
})
export class LogOutComponent {
 @Output() cancel=new EventEmitter<any>()
  closePopup:any=false
  // changeEvent:any
  closeClick(){
   this.cancel.emit(this.closePopup)
  }
}
