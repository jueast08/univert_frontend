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

    userProfile: Profile;

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
}
