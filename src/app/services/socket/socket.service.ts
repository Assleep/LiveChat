import { Injectable, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageComponent } from '../../message/message.component';
import { Cmessage } from '../../shared/Cmessage';
import * as io from "socket.io-client";

@Injectable({
  providedIn: 'root'
})
export class SocketService {

	private host: string="http://192.168.0.106:8080";
	private socket: any = io(this.host);
	name: string;

	sendMessage(message){
    	this.socket.emit('callDriver', message);    
  	}

  	setName(){
  		this.name = (this.socket.id).toString().slice(0,5);
  	}

	  getMessages() {
	    let observable = new Observable(observer => {
	      this.socket.on('sendToDriver', (message) => {
	        observer.next(message);    
	      });
	      	return () => {
	       	 this.socket.disconnect();
	      	};  
	      })     
	    	return observable;
	  	}  

  constructor() { }
}
