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

  desc: string = "Description"
  XP: string = "100"


  @Input()
  member_icons: string = "../../assets/IconeQueteSeul.png";

  @Input()
  quest_icon: string = "../../assets/IconeOrangeTailler.png";

  constructor(public questService: QuestService, public connectedUserService: ConnectedUserService) { }

  ngOnInit() {
    if ( this.context === "garden" && this.type === "todo" ) {
        this.clickable= true;
    }
  }

  onClick() {
    if (this.quest && this.clickable && this.connectedUserService.userProfile) {
      console.log(this.quest);
      this.questService.takeQuest(1, this.connectedUserService.userProfile.id)
    }
  }
}
