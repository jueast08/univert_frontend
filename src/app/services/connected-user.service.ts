import { Injectable } from '@angular/core';
import { Profile } from '../model/profile';
import { Quest } from '../model/quest';
import { ProfileService } from './profile.service';
import { Observable, of } from 'rxjs';

import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
        id: 1,
        badges: [{
            icon : "https://www.forceplus.com/wp-content/uploads/2016/08/medal-1.png", 
            name : "Maître arroseur", 
            description : "A accompli 50 quêtes d'arrosage."
        }],
	items: [{icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcucQzG-Trh4A11iJG4XP7W7IqibNkRNzWv80i66EO3XiRLsEi",
		 name: "Pelle",
		 description: "Pelle de jardinage de base, pour creuser des trous."
		}],
	questList: { toDo : [],
		     onGoing: [{title : "Planter des choux",
				description: "Aller planter des choux fleurs (et non romanesco)...",
				icon:"../../assets/carrot_profile.png",
				id:3},
			       {title : "Planter des choux",
				description: "Aller planter des choux fleurs (et non romanesco)...",
				icon:"../../assets/carrot_profile.png",
				id:4},
			       {title : "Planter des choux",
				description: "Aller planter des choux fleurs (et non romanesco)...",
				icon:"../../assets/carrot_profile.png",
				id:5}],
		     done: [{title : "Arroser",
			     description: "Arroser les plantes",
			     icon:"../../assets/carrot_profile.png",
			     id:6}]
		   }
    }

    private verifyBadgeUrl = 'http://192.168.43.32:8080/univert/univert/userservice/verifyBadge/';
    

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
	this.userProfile.questList.onGoing.push(quest);
    }

}
