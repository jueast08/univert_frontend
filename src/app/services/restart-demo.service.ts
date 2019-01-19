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
    this.http.get<>(this.resetQuestsUrl).pipe(
      tap(_ => console.log('reset'))
    );
  }
}
