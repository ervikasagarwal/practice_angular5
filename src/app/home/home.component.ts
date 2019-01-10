import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  
  btnText : string ='Add Reminder';
  reminderText : string = ' test reminder';
  reminders = [];
  itemCount : number = this.reminders.length;
  constructor() { }

  ngOnInit() {
   this.itemCount = this.reminders.length;
  }
  addItem(){
    this.reminders.push(this.reminderText);
    this.reminderText = '';
    this.itemCount = this.reminders.length;
  }
  removeItem(index){
    this.reminders.splice(index,1);
    this.itemCount = this.reminders.length;
  }

}
