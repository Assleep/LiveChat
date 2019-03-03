import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { SocketService } from './services/socket/socket.service';
import { ListMeesagesComponent } from './list-meesages/list-meesages.component';
import { NickNameComponent } from './nick-name/nick-name.component'

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    ListMeesagesComponent,
    NickNameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    SocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
