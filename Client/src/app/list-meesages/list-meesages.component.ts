import { Component, OnInit } from '@angular/core';
import { SocketService } from '../services/socket/socket.service';
import { Cmessage } from '../shared/Cmessage';
import * as $ from 'jquery';

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


	constructor(private socketService: SocketService) { }


  ngOnInit() {

  	// Получение имени из SocketService
  	this.connection1 = this.socketService.getName().subscribe(observer => {

  		this.name = observer;
  	});

  	// Получение сообщения от сервера
  	this.connection = this.socketService.getMessages().subscribe(message => {

  		// Создание объекта класса Cmessage из свойств сообщения
	  	let item: Cmessage = new Cmessage(message['title'], message['person'], (message as any).nick);
	  	if(item.nick != this.name ){ 
	  		item['person'] = !item['person'];
			this.dbm.push(item); //Добавление сообщения в массив и вывод на экран

	  	}else{
			this.dbm.push(item);
	  	} 

	  	if($('ul li').length == 0){

	  	}else{
	  		$('ul').animate({
	        scrollTop: $("ul")[0].scrollHeight
	    }, 100);
  	}
 });
}


  ngOnDestroy() {
  	this.connection.unsubscribe();
  }
}
