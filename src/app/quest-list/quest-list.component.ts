import { Component, OnInit, Input } from '@angular/core';
import { Quest } from '../model/quest';
import { QuestList } from '../model/quest-list';


import { QuestItemComponent } from '../quest-item/quest-item.component';
import * as $ from 'jquery'
import { NgxSmartModalService } from 'ngx-smart-modal';


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


    typeTodo= "todo";
    typeOngoing= "ongoing";
    typeDone= "done";


    constructor(public ngxSmartModalService: NgxSmartModalService) { }

    ngOnInit() {
        console.log("bou")
        if (this.questList) {
            this.nbAvailableQuests = this.questList.todo.length
        }
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
