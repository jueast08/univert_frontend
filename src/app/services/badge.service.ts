import { Injectable } from '@angular/core';

import { Badge } from '../model/badge';
import { Observable, of } from 'rxjs';

export const BADGES: Badge[] = [
    {icon : "https://www.forceplus.com/wp-content/uploads/2016/08/medal-1.png", name : "Maître arroseur", description : "A accompli 50 quêtes d'arrosage."},
    {icon : "https://www.forceplus.com/wp-content/uploads/2016/08/medal-1.png", name : "Maître arroseur", description : "A accompli 50 quêtes d'arrosage."}]

@Injectable({
    providedIn: 'root'
})
export class BadgeService {

    constructor() { }

    getBadges(id: string) : Observable<Badge[]> {
	return of(BADGES);
    }
}
