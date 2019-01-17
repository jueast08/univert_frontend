import { Component, OnInit } from '@angular/core';
import { Quest } from '../model/quest';
import { FormControl } from '@angular/forms';
import { QuestService } from '../services/quest.service';

@Component({
    selector: 'app-add-quest-form',
    templateUrl: './add-quest-form.component.html',
    styleUrls: ['./add-quest-form.component.css']
})
export class AddQuestFormComponent implements OnInit {

    title = new FormControl('');
    description = new  FormControl('');
    icon = new  FormControl('');
    id = new  FormControl('');
    
    quest: Quest;
    
    constructor( public questService : QuestService ) { }

    ngOnInit() {
    }

    submitQuest() {
	this.quest.title = this.title.value;
	this.quest.description = this.description.value;
	this.quest.icon = this.icon.value;
	this.quest.id = this.id.value;
	console.log(this.quest);
	this.questService.addQuest(this.quest);
    }
    
}
