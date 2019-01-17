import { Injectable } from '@angular/core';


import io from "socket.io-client";
import { ConnectedUserService } from './connected-user.service';


@Injectable({
  providedIn: 'root'
})
export class NfcConnectionService {

  private url = 'http://localhost:3000';
  private socket = null;

  constructor(public connectedUserService : ConnectedUserService){ }

  init() {
    this.socket = io.connect(this.url);
    console.log('connected');
    this.socket.on('message', function(nfc_id){
      console.log(nfc_id);
      this.connectedUserService.connect(nfc_id);
    });
  }

}
