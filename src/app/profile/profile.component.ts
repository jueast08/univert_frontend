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
import { QuestListService } from '../services/quest-list.service';

import { NgxSmartModalService } from 'ngx-smart-modal';
import { ToastrService } from 'ngx-toastr';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    userProfile: Profile;
    context= "profile";

    questList: QuestList;

    constructor(
      private toastr: ToastrManager,
      public connectedUserService: ConnectedUserService,
      public questService: QuestService, public questListService: QuestListService,
      public ngxSmartModalService: NgxSmartModalService,
    ) { }

    ngOnInit() {
         this.userProfile = this.connectedUserService.userProfile;
         console.log(this.connectedUserService.userProfile);
         this.questListService.refreshForUser(this.connectedUserService.userProfile.id);
    }

    addQuest(){
      this.toastr.infoToastr("Désolé, mais proposer une quête est une fonctionnalité pour la V2 ! ", ':)');
    }
}
