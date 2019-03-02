import { Component, OnInit } from '@angular/core';
import { dbm } from '../shared/fdata';
import { SocketService } from '../services/socket/socket.service';
import { Cmessage } from '../shared/Cmessage';
@Component({
  selector: 'app-list-meesages',
  templateUrl: './list-meesages.component.html',
  styleUrls: ['./list-meesages.component.css']
})
export class ListMeesagesComponent implements OnInit {

	dbm: Cmessage[] = [];
	connection: any;

	constructor(private socketService: SocketService) { 
}

  ngOnInit() {
  	console.log("initialisation");
  this.connection = this.socketService.getMessages().subscribe(message => {
	  	let item: Cmessage = new Cmessage(message['title'], message['person']);
	  	console.log(typeof message);
	    this.dbm.push(item); 
  	});
  	console.log("after");
  }

  ngOnDestroy() {
  	this.connection.unsubscribe();
  }
}
