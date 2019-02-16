import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-nick-name',
  templateUrl: './nick-name.component.html',
  styleUrls: ['./nick-name.component.css']
})
export class NickNameComponent implements OnInit {

  socket = io('http://192.168.0.106:8080');
  constructor() { }
	
  nickName: string = "321@khf";

  ngOnInit() {
  }

}
