import { Injectable } from '@angular/core';
import { Profile } from '../model/profile';
import { Observable, of } from 'rxjs';

export const PROFILE: Profile = {
  name: "Perceval de GALLES",
  level: 10,
  avatar: "carrot_profile.png",
  experience: 1024,
  id: "1",
  badges: [{
    icon : "https://www.forceplus.com/wp-content/uploads/2016/08/medal-1.png", 
    name : "Maître arroseur", 
    description : "A accompli 50 quêtes d'arrosage."
  }]
}


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor() { }

  getProfile(id: string): Observable<Profile> {
    return of(PROFILE);
  }

}
