import { Injectable } from '@angular/core';

import { Quest } from '../model/quest';
import { QuestList } from '../model/quest-list';
import { Observable, of } from 'rxjs';


export const QUESTLIST: QuestList = { toDo : [{title : "Quête du serpent géant du lac de l'ombre", description: "Aller chasser le serpent géant !", status:"A faire", icon:"../../assets/carrot_profile.png"}, {title : "Quête du serpent géant du lac de l'ombre", description: "Aller chasser le serpent géant !", status:"A faire", icon:"../../assets/carrot_profile.png"}],
				      onGoing: [{title : "Planter des choux", description: "Aller planter des choux fleurs (et non romanesco)...", status:"En cours", icon:"../../assets/carrot_profile.png"}, {title : "Planter des choux", description: "Aller planter des choux fleurs (et non romanesco)...", status:"En cours", icon:"../../assets/carrot_profile.png"}, {title : "Planter des choux", description: "Aller planter des choux fleurs (et non romanesco)...", status:"En cours", icon:"../../assets/carrot_profile.png"}],
				      done:
				      [{title : "Arroser", description: "Arroser les plantes", status:"Fini", icon:"../../assets/carrot_profile.png"}]
				    } 

@Injectable({
    providedIn: 'root'
})
export class QuestService {

    questList : QuestList;
    
    constructor() { }

    getQuestsForGarden(id: string) : Observable<QuestList> {
	return of(QUESTLIST);
    }

    getQuestsForUser(id: string) : Observable<QuestList> {
	return of(QUESTLIST);
    }

}
