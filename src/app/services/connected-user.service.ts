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
        }],
	items: [{icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcucQzG-Trh4A11iJG4XP7W7IqibNkRNzWv80i66EO3XiRLsEi",
		 name: "Pelle",
		 description: "Pelle de jardinage de base, pour creuser des trous."
		}],
	questList: { toDo : [{title : "Quête du serpent géant du lac de l'ombre", description: "Aller chasser le serpent géant !", status:"A faire", icon:"../../assets/carrot_profile.png"}, {title : "Quête du serpent géant du lac de l'ombre", description: "Aller chasser le serpent géant !", status:"A faire", icon:"../../assets/carrot_profile.png"}],
		     onGoing: [{title : "Planter des choux", description: "Aller planter des choux fleurs (et non romanesco)...", status:"En cours", icon:"../../assets/carrot_profile.png"}, {title : "Planter des choux", description: "Aller planter des choux fleurs (et non romanesco)...", status:"En cours", icon:"../../assets/carrot_profile.png"}, {title : "Planter des choux", description: "Aller planter des choux fleurs (et non romanesco)...", status:"En cours", icon:"../../assets/carrot_profile.png"}],
		     done:
		     [{title : "Arroser", description: "Arroser les plantes", status:"Fini", icon:"../../assets/carrot_profile.png"}]
		   }
    }
    

    constructor(public profileService: ProfileService) { }

    connect(id: string) {
        this.profileService.getProfile(id).subscribe(userProfile => {
            this.userProfile = userProfile;
        });
    }

}
