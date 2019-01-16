import { Injectable } from '@angular/core';

import { Badge } from '../model/badge';
import { Observable, of } from 'rxjs';

export const BADGES: Badge[] = [
    {badgeIcon : "https://www.forceplus.com/wp-content/uploads/2016/08/medal-1.png", badgeName : "Maître arroseur", badgeDescription : "A accompli 50 quêtes d'arrosage."},
    {badgeIcon : "https://www.forceplus.com/wp-content/uploads/2016/08/medal-1.png", badgeName : "Maître arroseur", badgeDescription : "A accompli 50 quêtes d'arrosage."}]

@Injectable({
    providedIn: 'root'
})
export class BadgeService {

    constructor() { }

    getBadges(id: string) : Observable<Badge[]> {
	return of(BADGES);
    }
}
