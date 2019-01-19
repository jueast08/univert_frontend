import { Injectable } from '@angular/core';
import {Router} from "@angular/router"

import io from "socket.io-client";
import { ConnectedUserService } from './connected-user.service';
import { ToastrService } from 'ngx-toastr';
import { ToastrManager } from 'ng6-toastr-notifications';

@Injectable({
  providedIn: 'root'
})
export class NfcConnectionService {

  private url = 'http://localhost:3000';
  private socket = null;

  constructor(private router: Router,
    private toastr: ToastrManager,
    public connectedUserService : ConnectedUserService){ }

  init() {
    this.socket = io.connect(this.url);
    console.log('connected');
    let self = this;
    // this.connect("044463b2744d80")
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
        this.connectedUserService.connectUser(userId.idUser);
        this.router.navigate(['/jardin']);
      }else{
        this.toastr.errorToastr("Désolé, mais il n'y a pas de compte lié à ce badge NFC. Vous êtes sûr qu'il est le bon ?", 'Badge NFC non reconnu');
      }
    } );
  }

}
