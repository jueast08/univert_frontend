import { Component, OnInit } from '@angular/core';
import { AvatarCircleComponent } from '../avatar-circle/avatar-circle.component';



@Component({
  selector: 'app-quest-item',
  templateUrl: './quest-item.component.html',
  styleUrls: ['./quest-item.component.css']
})
export class QuestItemComponent implements OnInit {

  desc: string = "Description"
  XP: string = "100"

  constructor() { }

  ngOnInit() {
  }

}
