import { Injectable } from '@angular/core';
import { Profile } from '../model/profile';
import { Observable, of } from 'rxjs';

import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ipserver } from './conf';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {

	private urlProfile = ipserver+"/univert/univert/characterservice/profil/"

    constructor(private http: HttpClient) { }

    getProfile(id: string): Observable<Profile> {
		return this.http.get<Profile>(this.urlProfile+id).pipe(
            tap(_ => console.log('Profile fetched'))
          );;
    }

}
