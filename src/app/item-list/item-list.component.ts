import { Component, OnInit } from '@angular/core';
import { Item } from '../model/item';
import { ItemService } from '../services/item.service';

@Component({
    selector: 'app-item-list',
    templateUrl: './item-list.component.html',
    styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

    itemListContent = [];
    
    constructor(public itemService : ItemService ) { }

    ngOnInit() {
	this.itemService.getItems("1").subscribe(items => this.itemListContent = items);
    }
    
}
