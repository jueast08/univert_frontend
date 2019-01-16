import { Injectable } from '@angular/core';

import { Item } from '../model/item';
import { Observable, of } from 'rxjs';

export const ITEMS: Item[] = [
    {icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcucQzG-Trh4A11iJG4XP7W7IqibNkRNzWv80i66EO3XiRLsEi", name: "Pelle", description: "Pelle de jardinage de base, pour creuser des trous."},
    {icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcucQzG-Trh4A11iJG4XP7W7IqibNkRNzWv80i66EO3XiRLsEi", name: "Pelle", description: "Pelle de jardinage de base, pour creuser des trous."}
]

@Injectable({
    providedIn: 'root'
})
export class ItemService {

    constructor() { }

    getItems(id: string) : Observable<Item[]> {
	return of(ITEMS);
    }
    
}
