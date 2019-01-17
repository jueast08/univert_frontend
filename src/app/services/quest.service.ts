import { Injectable } from '@angular/core';

import { Quest } from '../model/quest';
import { QuestList } from '../model/quest-list';
import { Observable, of } from 'rxjs';
import { ConnectedUserService } from '../services/connected-user.service';

@Injectable({
    providedIn: 'root'
})
export class QuestService {

    questList : QuestList = { toDo : [{title : "Quête du serpent géant du lac de l'ombre", description: "Aller chasser le serpent géant !", status:"A faire", icon:"../../assets/carrot_profile.png", id:1}, {title : "Quête du serpent géant du lac de l'ombre", description: "Aller chasser le serpent géant !", status:"A faire", icon:"../../assets/carrot_profile.png", id:2} ],
			      onGoing: [{title : "Planter des choux", description: "Aller planter des choux fleurs (et non romanesco)...", status:"En cours", icon:"../../assets/carrot_profile.png", id:3}, {title : "Planter des choux", description: "Aller planter des choux fleurs (et non romanesco)...", status:"En cours", icon:"../../assets/carrot_profile.png", id:4}, {title : "Planter des choux", description: "Aller planter des choux fleurs (et non romanesco)...", status:"En cours", icon:"../../assets/carrot_profile.png", id:5}],
			      done:
			      [{title : "Arroser", description: "Arroser les plantes", status:"Fini", icon:"../../assets/carrot_profile.png", id:6}]
			    };
    
    constructor(public connectedUserService : ConnectedUserService) { }
/*
    getQuestsForGarden(id: string) : Observable<QuestList> {
	return of(QUESTLIST);
    }

    getQuestsForUser(id: string) : Observable<QuestList> {
	return of(QUESTLIST);
    }*/

    takeQuest(id_quest: number, id_user: Number) {
	console.log("Quest : " + id_quest + ", user : "+id_user);
	var quest;
	for ( var i = 0 ; i < this.questList.toDo.length ; i++ ) {
	    if ( this.questList.toDo[i].id == id_quest ) {
		quest = this.questList.toDo[i];
		this.questList.toDo.splice(i, 1);
		this.questList.onGoing.push(quest);
	    }
	}
	this.connectedUserService.takeQuest(quest);
    }

    validQuest(id_quest: string) {
        
    }
}
