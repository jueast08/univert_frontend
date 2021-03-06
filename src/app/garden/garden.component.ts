import { Component, OnInit } from '@angular/core';
import { ProfileToastComponent } from '../profile-toast/profile-toast.component';
import { QuestListComponent } from '../quest-list/quest-list.component';
import { QuestList } from '../model/quest-list';
import { QuestService } from '../services/quest.service';
import { AddQuestFormComponent } from '../add-quest-form/add-quest-form.component';
import { NfcConnectionService } from '../services/nfc-connection.service';
import { QuestListService } from '../services/quest-list.service';
import { ThrowStmt } from '@angular/compiler';

import { ConnectedUserService } from '../services/connected-user.service';

import { ToastrService } from 'ngx-toastr';
import { ToastrManager } from 'ng6-toastr-notifications';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { QuestItemComponent } from '../quest-item/quest-item.component';

@Component({
    selector: 'app-garden',
    templateUrl: './garden.component.html',
    styleUrls: ['./garden.component.css']
})
export class GardenComponent implements OnInit {

    questList: QuestList;
    context = "garden";

    constructor(
        private toastr: ToastrManager,
        public questService: QuestService,
        public ngxSmartModalService: NgxSmartModalService,
        public questListService: QuestListService,
        public connectedUserService: ConnectedUserService,
        public nfcConnectionService: NfcConnectionService) { }

    ngOnInit() {
        this.questListService.refreshForGarden();
        this.nfcConnectionService.init();
    }

    addQuest(){
      this.toastr.infoToastr("Désolé, mais proposer une quête est une fonctionnalité pour la V2 ! ", ':)');
    }

    connectUserByPassword(){
      this.toastr.infoToastr("Désolé, mais se connecter avec un mot de passe est une fonctionnalité pour la V2 ! Essayez avec un badge NFC ! ", ':)');
    }
}
