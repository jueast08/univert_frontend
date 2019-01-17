import { Component, OnInit, Input} from '@angular/core';
import { AvatarCircleComponent } from '../avatar-circle/avatar-circle.component';

import { Quest } from '../model/quest';
import { QuestService } from '../services/quest.service';
import { ConnectedUserService } from '../services/connected-user.service';

@Component({
  selector: 'app-quest-item',
  templateUrl: './quest-item.component.html',
  styleUrls: ['./quest-item.component.css']
})
export class QuestItemComponent implements OnInit {

  @Input()
  quest: Quest;

  @Input()
  context: String;

  @Input()
  type: String;

  clickable= false;

  @Input()
  member_icons: string = "../../assets/IconeQueteSeul.png";

  @Input()
  quest_icon: string = "../../assets/IconeOrangeTailler.png";

  icon: string;

  constructor(public questService: QuestService, public connectedUserService: ConnectedUserService) { }

  ngOnInit() {
    if (this.type === "ongoing") {
      this.icon = "IconeJaune";
    } else if (this.type === "done") {
      this.icon = "IconeVert";
    } else {
      this.icon = "IconeOrange";
    }
    this.icon+=this.quest.description + ".png";
    // if (this.quest.description === "arracher") {
    //   this.icon+= "Arracher.png";
    // } else if (this.quest.description === "arroser") {
    //   this.icon+= "Arroser.png";
    // } else if (this.quest.description === "semer") {
    //   this.icon+= "Semer.png";
    // } else {
    //   this.icon+= "Recolter.png";
    // }

  }

  onClick() {
    if (this.quest && (this.type === "todo" || this.type==="ongoing" ) && this.connectedUserService.userProfile) {
      console.log(this.quest);
      if (this.context == "profile") {
        this.questService.validQuest(this.quest.id).subscribe();
      }
      else {
        this.questService.takeQuest(this.quest.id, this.connectedUserService.userProfile.id).subscribe();
      }
      
    }
  }
}
