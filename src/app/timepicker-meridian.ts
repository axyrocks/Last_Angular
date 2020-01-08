import { Component,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ngbd-timepicker-meridian',
  templateUrl: './timepicker-meridian.html',
  encapsulation: ViewEncapsulation.None,
  styles: [`
    .my-custom-class .tooltip-inner {
      background-color: white;
      border:1px solid gray;
      color:black;
    }
    .btn-link{
      color: gray ;
    }
   .change {
    right: 0.2em;
    color: gray;
    text-align: center;
    vertical-align: middle;
    border: 1px solid white;
    position: relative;
    top: 2.3em;
    right: em;
  }
   .change1 {
    right: 0.2em;
    color: gray;
    text-align: center;
    vertical-align: middle;
    border: 1px solid white;
    position: relative;
    top: -2.3em;
    right: em;

  }

    .myclass .btn-outline-primary{
      border:1px solid transparent;
      color:gray;
      background-color:white;
    }
    .myclass .form-control{
      background-color:white;
      color:gray;
      border:1px solid transparent
    }
    .
  `]
})

export class NgbdTimepickerMeridian { 
  time = { hour: 10, minute: 30};
  meridian = true;
  public newTime: string = '10:30';
  public show = false;
  public timeinformat;
  public timeofday="AM";
 
  toggle() {
    this.show = !this.show;
  }
  reverse(timeofday){  
     if(document.getElementsByClassName("btn btn-outline-primary")[0].textContent==="AM"){
      document.getElementsByClassName("btn btn-outline-primary")[0].textContent="PM";
      console.log(document.getElementsByClassName("btn btn-outline-primary")[0].textContent)
      this.timeofday="PM"
      console.log(this.timeofday)
     }
     else{
      document.getElementsByClassName("btn btn-outline-primary")[0].textContent="AM";
      console.log(this.timeofday)  
      this.timeofday="AM"
      console.log(this.timeofday)
     }
   
  }
   
  onTimeChange(value: { hour: string, minute: string}) {
    document.getElementsByClassName("btn btn-outline-primary")[0].innerHTML=this.timeofday;
    this.timeinformat = parseInt(value.hour);  
      if (this.timeinformat > 12) {
        this.timeinformat -= 12;
        if (this.timeinformat < 10) {
        this.timeinformat = "0" + this.timeinformat;
      }
    }
    else if (this.timeinformat == 0) {
      this.timeinformat += 12;
    }
  
    else if (this.timeinformat < 10) {
      this.timeinformat = "0" + this.timeinformat
    }
    if (parseInt(value.minute) < 10) {
      value.minute = "0" + value.minute;
    }
    this.newTime = `${this.timeinformat}:${value.minute}`;
  }
}
