import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from "socket.io-client";

@Injectable({
  providedIn: 'root'
})
export class SocketService {

	private host: string="http://192.168.0.106:8080";
	private socket: any; 

  constructor() {
	this.socket = io(this.host);
	this.socket.on("connect" , () => {
		console.log('Connected');
	});
	this.socket.on('message', (msg) =>{
		// data from input
	});
  }
}
