import { Component, OnInit } from '@angular/core';
import { ConnectedUserService } from '../services/connected-user.service';
import { Profile } from '../model/profile';

@Component({
    selector: 'app-profile-toast',
    templateUrl: './profile-toast.component.html',
    styleUrls: ['./profile-toast.component.css']
})
export class ProfileToastComponent implements OnInit {

    userProfile: Profile;

    constructor(public connectedUserService: ConnectedUserService) { }

    ngOnInit() {
	this.userProfile = this.connectedUserService.user;
    }

}
