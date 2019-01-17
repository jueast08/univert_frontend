import { Component, OnInit } from '@angular/core';
import { ProfileToastComponent } from '../profile-toast/profile-toast.component';
import { QuestListComponent } from '../quest-list/quest-list.component';
import { QuestList } from '../model/quest-list';
import { QuestService } from '../services/quest.service';
import { AddQuestFormComponent } from '../add-quest-form/add-quest-form.component';
import { NfcConnectionService } from '../services/nfc-connection.service';

@Component({
    selector: 'app-garden',
    templateUrl: './garden.component.html',
    styleUrls: ['./garden.component.css']
})
export class GardenComponent implements OnInit {

    questList: QuestList;
    context = "garden";

    constructor(public questService: QuestService,
        public nfcConnectionService: NfcConnectionService) { }

    ngOnInit() {
        this.questService.getQuestsForGarden("1").subscribe(list => {
            this.questList = list;
            console.log(this.questList)
        });
        this.nfcConnectionService.init();
    }


}
