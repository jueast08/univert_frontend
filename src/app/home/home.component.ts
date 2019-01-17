import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { FloatingMapComponent } from '../floating-map/floating-map.component';

import { ToastrService } from 'ngx-toastr';

import { ConnectedUserService } from '../services/connected-user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  constructor(private toastr: ToastrService, public connectedUserService : ConnectedUserService) {
  }

  ngOnInit() {
  }

  openToaster() {
    this.toastr.show('Cette fonctionnalité n\'est pas encore disponible', '');
  }
}
