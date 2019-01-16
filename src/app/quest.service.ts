import { Injectable } from '@angular/core';

import { Quest } from './model/quest';
import { Observable, of } from 'rxjs';


export const QUESTS: Quest[] = [
  {title : "Quête du serpent géant du lac de l'ombre", description: "Aller chasser le chassant géant !"},
  {title : "Quête du serpent géant du lac de l'ombre", description: "Aller chasser le chassant géant !"},
] 


@Injectable({
  providedIn: 'root'
})
export class QuestService {

  constructor() { }

  getQuestsForGarden(id: string) : Observable<Quest[]> {
    return of(QUESTS);
  }

  getQuestsForUser(id: string) : Observable<Quest[]> {
    return of(QUESTS);
  }

}
