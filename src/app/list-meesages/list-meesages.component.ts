import { Component, OnInit } from '@angular/core';
import { dbm } from '../shared/fdata';
import { Cmessage } from '../shared/Cmessage';
@Component({
  selector: 'app-list-meesages',
  templateUrl: './list-meesages.component.html',
  styleUrls: ['./list-meesages.component.css']
})
export class ListMeesagesComponent implements OnInit {
	dbm: Cmessage[] = dbm;
	constructor() { }

  ngOnInit() {
  }

}
