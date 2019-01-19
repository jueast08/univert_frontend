import { Injectable } from '@angular/core';

import { Quest } from '../model/quest';
import { QuestList } from '../model/quest-list';
import { Observable, of } from 'rxjs';
import { ConnectedUserService } from '../services/connected-user.service';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ipserver } from './conf';
import { ToastrService } from 'ngx-toastr';
import { ToastrManager } from 'ng6-toastr-notifications';
import * as $ from 'jquery'

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
		private toastr: ToastrManager,
		public connectedUserService : ConnectedUserService) { }

    getQuestsForGarden(id: string) : Observable<QuestList> {
			let el = $("body");
			el.addClass("loading")
		return this.http.get<QuestList>(this.urlForGarden+id+"/quests").pipe(
            tap(_ => {
							el.removeClass("loading")
							console.log('quest list for garden fetched')
						})
          );
    }

	getQuestsForUser(id: Number) : Observable<QuestList> {
		let el = $("body");
		el.addClass("loading")
		return this.http.get<QuestList>(this.urlForUser+id+"/quests").pipe(
						tap(_ => {
							el.removeClass("loading")
							console.log('quest list for garden fetched')
						})
          );
    }

    takeQuest(id_quest: number, id_user: Number): Observable<ResService> {
			let el = $("body");
			el.addClass("loading")
			return this.http.get<ResService>(this.urlQuest+id_quest+"/user/"+id_user).pipe(
				tap(_ => {
					el.removeClass("loading")
					console.log('quest list for garden fetched')
					this.toastr.successToastr("La quête vous a été attribuée", 'Succès');
				})
		  );
    }

    addQuest(quest: Quest) {
	// this.questList.toDo.push(quest);
    }

    validQuest(id_quest: Number, xp: Number) {
			let el = $("body");
	    el.addClass("loading")
			  return this.http.get<ResService>(this.urlQuest+id_quest+"/done").pipe(
					tap(_ => {
						el.removeClass("loading")
						this.toastr.successToastr("Vous avez réussi la quête. Vous avez gagné "+xp+" XP", 'Ouais !');
						console.log('quest list for garden fetched')
					})

		  );
    }


}
