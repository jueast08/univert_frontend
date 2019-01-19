import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { FloatingMapComponent } from '../floating-map/floating-map.component';


import { ConnectedUserService } from '../services/connected-user.service';
import { NfcConnectionService } from '../services/nfc-connection.service';
import { RestartDemoService } from '../services/restart-demo.service';

import { ToastrService } from 'ngx-toastr';
import { ToastrManager } from 'ng6-toastr-notifications';
import { NgxSmartModalService } from 'ngx-smart-modal';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  constructor(private toastr: ToastrManager,
    public connectedUserService : ConnectedUserService,
    public nfcConnectionService: NfcConnectionService,
    public restartDemoService: RestartDemoService,
    public ngxSmartModalService: NgxSmartModalService) {
  }

  ngOnInit() {
    this.nfcConnectionService.init();
  }

  connectUserByPassword(){
    this.toastr.infoToastr("Désolé, mais se connecter avec un mot de passe est une fonctionnalité pour la V2 ! Essayez avec un badge NFC ! ", ':)');
  }

  restartDemo(){
    this.restartDemoService.reset();
  }
}
