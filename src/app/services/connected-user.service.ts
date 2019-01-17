import { Injectable } from '@angular/core';
import { Profile } from '../model/profile';
import { Quest } from '../model/quest';
import { ProfileService } from './profile.service';
import { Observable, of } from 'rxjs';

import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ipserver } from './conf';

export class userId {
    idUser: string;
}

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
        }],
	    items: [],
    }

    private verifyBadgeUrl = ipserver + "/univert/univert/userservice/verifyBadge/";
    

    constructor(private http: HttpClient,
        public profileService: ProfileService) { }

    connect(id: string) : Observable<userId>{
        return this.http.get<userId>(this.verifyBadgeUrl+id).pipe(
            tap(_ => console.log('connected'))
          );;
    }
    
    connectUser(userId: string) {
        this.profileService.getProfile(userId).subscribe(userProfile => {
            this.userProfile = userProfile;
        });
    }

    takeQuest(quest: Quest) {
	 //this.userProfile.questList.onGoing.push(quest);
    }

}
