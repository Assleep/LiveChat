import { Component, OnInit } from '@angular/core';
import { Cmessage } from '../shared/Cmessage';
import { dbm } from '../shared/fdata';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  dbm: Cmessage[] = dbm;
  newTitle: string = '';

  send() {
  	let message: Cmessage = new Cmessage(this.newTitle);
  	this.dbm.push(message);
  	this.newTitle = '';

  }

  constructor() { }

  ngOnInit() {
  }

}