import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
    
    itemIcon="";
    itemName="";
    itemDescription="";
    
    constructor() { }

    ngOnInit() {
	this.itemIcon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcucQzG-Trh4A11iJG4XP7W7IqibNkRNzWv80i66EO3XiRLsEi";
	this.itemName="Pelle";
	this.itemDescription="Pelle de jardinage de base, pour creuser des trous.";
    }

}
