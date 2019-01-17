import { Component, OnInit, Input } from '@angular/core';
import { Quest } from '../model/quest';
import { QuestService } from '../services/quest.service';
import { QuestList } from '../model/quest-list';

import { QuestItemComponent } from '../quest-item/quest-item.component';
import * as $ from 'jquery'


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

    @Input()
    title: string = "Quests";

    constructor(public questService: QuestService) { }

    ngOnInit() {
    	this.questService.getQuestsForGarden("1").subscribe(questList => this.questList = questList);
    	this.toDo = this.questList.toDo;
    	this.onGoing = this.questList.onGoing;
    	this.done = this.questList.done;
    }

    // onClickOpenList() {
    //
    //   console.log('here')
    //
    // }

    develop() {
      let el = $(".quest-list-frame-inner");
      if(!this.developped){
        el.animate({height: 15});
      }else{
        el.animate({height: "100%"});
      }
  	   this.developped = !this.developped;
    }

}
