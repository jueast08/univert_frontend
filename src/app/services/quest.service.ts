import { Injectable } from '@angular/core';

import { Quest } from '../model/quest';
import { QuestList } from '../model/quest-list';
import { Observable, of } from 'rxjs';
import { ConnectedUserService } from '../services/connected-user.service';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ipserver } from './conf';

@Injectable({
    providedIn: 'root'
})
export class QuestService {
	
	private urlForGarden = ipserver + "/univert/univert/questservice/garden/";

	constructor(private http: HttpClient,
		public connectedUserService : ConnectedUserService) { }

    getQuestsForGarden(id: string) : Observable<QuestList> {
		return this.http.get<QuestList>(this.urlForGarden+id+"/quests").pipe(
            tap(_ => console.log('connected'))
          );
    }

      /*getQuestsForUser(id: string) : Observable<QuestList> {
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

    addQuest(quest: Quest) {
	this.questList.toDo.push(quest);
    }

    validQuest(id_quest: string) {
        
    }
}
