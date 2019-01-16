import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { FloatingMapComponent } from '../floating-map/floating-map.component';
import { ConnectedUserService } from '../services/connected-user.service';

import io from "socket.io-client";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  private url = 'http://localhost:3000';
  private socket = null;

  constructor(public connectedUserService : ConnectedUserService) {
  }

  ngOnInit() {
    this.socket = io.connect(this.url);
    console.log('connected');
    this.socket.on('message', function(nfc_id){
      console.log(nfc_id);
      this.ConnectedUserService.connect(nfc_id);
    });
  }

}
