import { Component, OnInit, Input } from '@angular/core';
import { Quest } from '../model/quest';
import { QuestList } from '../model/quest-list';


import { QuestItemComponent } from '../quest-item/quest-item.component';
import * as $ from 'jquery'


@Component({
    selector: 'app-quest-list',
    templateUrl: './quest-list.component.html',
    styleUrls: ['./quest-list.component.css']
})
export class QuestListComponent implements OnInit {

    @Input()
    questList: QuestList;

    @Input()
    context: String;

    @Input()
    title: string = "Quests";

    nbAvailableQuests = 0;
    developped = false;

    toDo: Quest[] = [];
    onGoing: Quest[];
    done: Quest[];




    typeTodo= "todo";
    typeOngoing= "ongoing";
    typeDone= "done";


    constructor() { }

    ngOnInit() {
    	this.toDo = this.questList.toDo;
    	this.onGoing = this.questList.onGoing;
    	this.done = this.questList.done;
    	this.nbAvailableQuests = this.toDo.length

    }

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
