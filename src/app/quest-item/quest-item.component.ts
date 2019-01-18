import { Component, OnInit, Input} from '@angular/core';
import { AvatarCircleComponent } from '../avatar-circle/avatar-circle.component';

import { Quest } from '../model/quest';
import { QuestService } from '../services/quest.service';
import { ConnectedUserService } from '../services/connected-user.service';
import { QuestListService } from '../services/quest-list.service';

import { ToastrService } from 'ngx-toastr';
import { ToastrManager } from 'ng6-toastr-notifications';

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

  constructor(  private toastr: ToastrManager,public questService: QuestService, public connectedUserService: ConnectedUserService, public questListService: QuestListService) { }

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
    if(!this.connectedUserService.userProfile){
      this.toastr.errorToastr("Connectez-vous pour choisir ou valider une quête", 'Pas connecté ?');
      return;
    }

    if(this.quest && (this.type === "ongoing") && this.context !== "profile"){
      this.toastr.errorToastr("Vous pouvez pas rejoindre cette quête. Elle est déjà en cours ! Si vous faites partie de cette quête, vous pouvez la valider dans votre profile", 'Trop tard !');
      return;
    }

    if (this.quest && (this.type === "todo" || this.type==="ongoing" ) && this.connectedUserService.userProfile) {
      console.log(this.quest);
      if (this.context == "profile") {
        this.questService.validQuest(this.quest.id).subscribe();
        this.questListService.refreshForUser(this.connectedUserService.userProfile.id);
        this.toastr.successToastr("Vous avez réussi la quête. Vous avez gagné "+this.quest.experience+" XP", 'Ouais !');
      }
      else {
        this.questService.takeQuest(this.quest.id, this.connectedUserService.userProfile.id).subscribe();
        this.questListService.refreshForGarden();
        this.toastr.successToastr("La quête vous a été attribuée", 'Succès');
      }
    }else{
      if(this.quest && (this.type === "done")){
        this.toastr.errorToastr("Cette quête a déjà été faite", 'Trop tard !');
        return;
      }

      if(this.quest && (this.type === "ongoing")){
        this.toastr.errorToastr("Vous pouvez pas rejoindre cette quête. Elle est déjà en cours !", 'Trop tard !');
        return;
      }
    }
  }
}
