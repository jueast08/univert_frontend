import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { FloatingMapComponent } from '../floating-map/floating-map.component';

import { ToastrService } from 'ngx-toastr';

import { ConnectedUserService } from '../services/connected-user.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { NfcConnectionService } from '../services/nfc-connection.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  constructor(private toastr: ToastrManager,
    public connectedUserService : ConnectedUserService,
    public nfcConnectionService: NfcConnectionService,
    public ngxSmartModalService: NgxSmartModalService) {
  }

  ngOnInit() {
    this.nfcConnectionService.init();
  }

  connectUserByPassword(){
    this.toastr.warningToastr("Désolé. Mais c'est pour le V2 !", ':)');
  }
}
