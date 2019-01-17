import { Injectable } from '@angular/core';
import { QuestList } from '../model/quest-list';
import { QuestService } from './quest.service';

@Injectable({
  providedIn: 'root'
})
export class QuestListService {

  currentList: QuestList;

  constructor(public questService: QuestService) { }

  refreshForGarden() {
    this.questService.getQuestsForGarden("1").subscribe(list => this.currentList = list);
  }

  refreshForUser(id: Number) {
    console.log("bou")
    this.questService.getQuestsForUser(id).subscribe(list => this.currentList = list);
  }

}
