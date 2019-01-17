import { Component, OnInit, Input } from '@angular/core';
import { Quest } from '../model/quest';
import { QuestService } from '../services/quest.service';

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

    constructor(public questService: QuestService) { }

    ngOnInit() {
	if ( this.context === "garden" && this.type === "todo" ) {
	    this.clickable= true;
	}
    }

    onClick() {
	this.questService.takeQuest(this.quest.id, "1");
    }
    
}
