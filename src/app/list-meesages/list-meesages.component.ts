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
	name: any;
	connection1: any;

	constructor(private socketService: SocketService) { 
}

  ngOnInit() {
  	this.connection1 = this.socketService.getName().subscribe(observer => {
  		this.name = observer;
  	});
  	this.connection = this.socketService.getMessages().subscribe(message => {
	  	let item: Cmessage = new Cmessage(message['title'], message['person'], message['name']);
	  	if(message['name'] != this.name ){
	  		console.log(item['name']);
	  		item['person'] = !item['person'];
	  		console.log(item['person']);
			this.dbm.push(item);
	  	}else{
			this.dbm.push(item);
	  	} 
  	});
  }

  ngOnDestroy() {
  	this.connection.unsubscribe();
  }
}
