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
	private socket: any; 

	sendMessage(message){
	this.socket = io(this.host);
    this.socket.emit('message', message);    
  	}
  constructor() { }
}
