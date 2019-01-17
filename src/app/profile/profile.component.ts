import { Component, OnInit } from '@angular/core';
import { BadgeComponent } from '../badge/badge.component';
import { BadgeListComponent } from '../badge-list/badge-list.component';
import { ItemComponent } from '../item/item.component';
import { ItemListComponent } from '../item-list/item-list.component';
import { ConnectedUserService } from '../services/connected-user.service';
import { Profile } from '../model/profile';
import { QuestListComponent } from '../quest-list/quest-list.component';

import { ButtonComponent } from '../button/button.component';

import { AvatarCircleComponent } from '../avatar-circle/avatar-circle.component';
import { QuestList } from '../model/quest-list';
import { QuestService } from '../services/quest.service';

import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    userProfile: Profile;
    context= "profile";

    questList: QuestList;

    constructor(public connectedUserService: ConnectedUserService,
      public questService: QuestService,
    public ngxSmartModalService: NgxSmartModalService) { }

    ngOnInit() {
         this.userProfile = this.connectedUserService.userProfile;
         console.log(this.connectedUserService.userProfile);
        this.questService.getQuestsForUser(this.connectedUserService.userProfile.id).subscribe(list => this.questList = list);
    }

}
