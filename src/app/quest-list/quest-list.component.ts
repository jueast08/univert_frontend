import { Component, OnInit } from '@angular/core';
import { Quest } from '../model/quest';
import { QuestService } from '../services/quest.service';

@Component({
  selector: 'app-quest-list',
  templateUrl: './quest-list.component.html',
  styleUrls: ['./quest-list.component.css']
})
export class QuestListComponent implements OnInit {

  nbAvailableQuests = 3;
  developped = false;

  quests: Quest[]

  constructor(public questService: QuestService) { }

  ngOnInit() {
    this.questService.getQuestsForGarden("1").subscribe(quests => this.quests = quests);
  }

  develop() {
    if (this.developped) {

    }
    else {

    }
    this.developped = !this.developped;
  }

}
