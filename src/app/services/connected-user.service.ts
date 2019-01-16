import { Injectable } from '@angular/core';
import { Profile } from '../model/profile';
import { ProfileService } from './profile.service';

@Injectable({
    providedIn: 'root'
})
export class ConnectedUserService {

    userProfile: Profile = {
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
      

    constructor(public profileService: ProfileService) { }

    connect(id: string) {
        this.profileService.getProfile(id).subscribe(userProfile => {
            this.userProfile = userProfile;
        });
    }

}
