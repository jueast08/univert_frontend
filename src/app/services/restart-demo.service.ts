import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ipserver } from './conf';

import { ToastrService } from 'ngx-toastr';
import { ToastrManager } from 'ng6-toastr-notifications';

import * as $ from 'jquery'

@Injectable({
  providedIn: 'root'
})
export class RestartDemoService {

  private resetQuestsUrl = ipserver + "/univert/univert/questservice/quests/reset";

  constructor(private toastr: ToastrManager,private http: HttpClient) { }


  reset(){
    this.toastr.infoToastr("Réinitialisation de la démo ...", 'Veuillez patienter')
    let el = $("body");
    el.addClass("loading")
    return this.http.get(this.resetQuestsUrl).pipe(
      tap(_ =>  {
        el.removeClass("loading")
        this.toastr.successToastr("Réinitialisation terminée :) ", 'Ouais !')
      })
    ).subscribe();
  }
}
