import { Injectable } from '@angular/core';

import { Quest } from '../model/quest';
import { QuestList } from '../model/quest-list';
import { Observable, of } from 'rxjs';
import { ConnectedUserService } from '../services/connected-user.service';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ipserver } from './conf';

export class ResService {
	validate: boolean
}

@Injectable({
    providedIn: 'root'
})
export class QuestService {
	
	private urlForGarden = ipserver + "/univert/univert/questservice/garden/";
	private urlForUser= ipserver + "/univert/univert/questservice/user/";
	private urlQuest = ipserver + "/univert/univert/questservice/quests/";

	constructor(private http: HttpClient,
		public connectedUserService : ConnectedUserService) { }

    getQuestsForGarden(id: string) : Observable<QuestList> {
		return this.http.get<QuestList>(this.urlForGarden+id+"/quests").pipe(
            tap(_ => console.log('quest list for garden fetched'))
          );
    }

	getQuestsForUser(id: string) : Observable<QuestList> {
		return this.http.get<QuestList>(this.urlForUser+id+"/quests").pipe(
            tap(_ => console.log('quest list for garden fetched'))
          );
    }

    takeQuest(id_quest: number, id_user: Number): Observable<ResService> {
		return this.http.post<ResService>(this.urlQuest+id_quest+"/user/"+id_user, null).pipe(
            tap(_ => console.log('quest list for garden fetched'))
		  );
    }

    addQuest(quest: Quest) {
	// this.questList.toDo.push(quest);
    }

    validQuest(id_quest: string) {
        return this.http.post<ResService>(this.urlQuest+id_quest+"/done", null).pipe(
            tap(_ => console.log('quest list for garden fetched'))
		  );
    }
}
