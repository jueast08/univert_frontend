import { Injectable } from '@angular/core';
import {Router} from "@angular/router"

import io from "socket.io-client";
import { ConnectedUserService } from './connected-user.service';


@Injectable({
  providedIn: 'root'
})
export class NfcConnectionService {

  private url = 'http://localhost:3000';
  private socket = null;

  constructor(private router: Router,
    public connectedUserService : ConnectedUserService){ }

  init() {
    this.socket = io.connect(this.url);
    console.log('connected');
    let self = this;
    this.socket.on('message', function(nfc_id){
      console.log(nfc_id);
      self.connect(nfc_id);
    });
  }

  connect(id: string) {
    console.log(id);
    this.connectedUserService.connect(id).subscribe(userId => {
      console.log(userId)
      if (userId.idUser != "0") {
        this.router.navigate(['/jardin'])
        this.connectedUserService.connectUser(userId.idUser);
      }
    } );
  }

}
