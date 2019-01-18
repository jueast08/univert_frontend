import { Component, OnInit } from '@angular/core';
import { ConnectedUserService } from '../services/connected-user.service';
import { Profile } from '../model/profile';

@Component({
    selector: 'app-profile-toast',
    templateUrl: './profile-toast.component.html',
    styleUrls: ['./profile-toast.component.css']
})
export class ProfileToastComponent implements OnInit {

    avatar: string = "character1.png";

    constructor(public connectedUserService: ConnectedUserService) { }

    ngOnInit() {
        if (this.connectedUserService.userProfile && this.connectedUserService.userProfile.id == 2) {
            this.avatar = "character1.png";
        }
    }

}
