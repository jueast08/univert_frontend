import { Injectable } from '@angular/core';
import { Profile } from '../model/profile';

@Injectable({
  providedIn: 'root'
})
export class ConnectedUserService {

  user: Profile = {name: "Perceval de GALLES", level: 10, id: "26"};

  constructor() { }

  connect(id: string) {
    this.user = {name: "Perceval de GALLES", level: 10, id: "26"};
  }

}
