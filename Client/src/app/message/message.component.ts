import { Component, OnInit, Input } from '@angular/core';
import { Cmessage } from '../shared/Cmessage';
import { SocketService } from '../services/socket/socket.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  newTitle: string = '';
  name: any = this.socketService.getName().subscribe(observer => {
      this.name = observer;
  });

  // Функция создания объекта класс Cmessage для отправки в SocketService
  send() {
  	let message: Cmessage = new Cmessage(this.newTitle, false, this.name);
    this.socketService.sendMessage(message);
  	this.newTitle = '';

  }

  constructor(private socketService: SocketService) { }

  ngOnInit() {
  }
 
}
