import { Component, OnInit, Input } from '@angular/core';
import { Quest } from '../model/quest';
import { QuestService } from '../services/quest.service';
import { ConnectedUserService } from '../services/connected-user.service';

@Component({
    selector: 'app-quest',
    templateUrl: './quest.component.html',
    styleUrls: ['./quest.component.css']
})
export class QuestComponent implements OnInit {

    @Input()
    quest: Quest;

    @Input()
    context: String;

    @Input()
    type: String;

    clickable= false;

    constructor(public questService: QuestService, public connectedUserService: ConnectedUserService) { }

    ngOnInit() {
	if ( (this.context === "garden" && this.type === "todo") || (this.context === "profile" && this.type === "ongoing") ) {
	    this.clickable= true;
	}
    }

    onClick() {
	if ( this.context === "garden" ) {
	    this.questService.takeQuest(this.quest.id, this.connectedUserService.userProfile.id);
	}
	if ( this.context === "profile" ) {
	    this.questService.validQuest(this.quest.id);
	}
    }
    
}
