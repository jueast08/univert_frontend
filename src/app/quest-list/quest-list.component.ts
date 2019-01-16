import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quest-list',
  templateUrl: './quest-list.component.html',
  styleUrls: ['./quest-list.component.css']
})
export class QuestListComponent implements OnInit {

  nbAvailableQuests = 3;
  developped = false;

  constructor() { }

  ngOnInit() {
  }

  develop() {
    if (this.developped) {

    }
    else {

    }
    this.developped = !this.developped;
  }

}
