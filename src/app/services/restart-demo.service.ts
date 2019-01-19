import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ipserver } from './conf';

@Injectable({
  providedIn: 'root'
})
export class RestartDemoService {

  private resetQuestsUrl = ipserver + "/univert/univert/questservice/quests/reset";

  constructor(private http: HttpClient) { }


  reset(){
    console.log('hi');
    return this.http.get(this.resetQuestsUrl).pipe(
      tap(_ => console.log('reset'))
    ).subscribe();
  }
}
