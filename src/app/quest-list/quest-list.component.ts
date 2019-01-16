import { Component, OnInit } from '@angular/core';
import { Quest } from '../model/quest';
import { QuestService } from '../services/quest.service';
import { QuestList } from '../model/quest-list';

@Component({
    selector: 'app-quest-list',
    templateUrl: './quest-list.component.html',
    styleUrls: ['./quest-list.component.css']
})
export class QuestListComponent implements OnInit {

    nbAvailableQuests = 3;
    developped = false;

    toDo: Quest[]
    onGoing: Quest[]
    done: Quest[]

    questList: QuestList; 

    constructor(public questService: QuestService) { }

    ngOnInit() {
	this.questService.getQuestsForGarden("1").subscribe(questList => this.questList = questList);
	this.toDo = this.questList.toDo;
	this.onGoing = this.questList.onGoing;
	this.done = this.questList.done;
    }

    develop() {
	if (this.developped) {

	}
	else {

	}
	this.developped = !this.developped;
    }

}
