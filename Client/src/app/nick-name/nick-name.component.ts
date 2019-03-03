import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';
import { SocketService } from '../services/socket/socket.service';
import { Cmessage } from '../shared/Cmessage';

@Component({
  selector: 'app-nick-name',
  templateUrl: './nick-name.component.html',
  styleUrls: ['./nick-name.component.css']
})
export class NickNameComponent implements OnInit {

  constructor(private socketService: SocketService) { }
	
  name: any;
  connection: any;

  ngOnInit() {
  	this.connection = this.socketService.getName().subscribe(observer => {
  		this.name = observer;
  	});
  }
}
