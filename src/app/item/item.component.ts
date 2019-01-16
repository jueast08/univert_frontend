import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
    
    icon="";
    name="";
    description="";
    
    constructor() { }

    ngOnInit() {
	this.icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcucQzG-Trh4A11iJG4XP7W7IqibNkRNzWv80i66EO3XiRLsEi";
	this.name="Pelle";
	this.description="Pelle de jardinage de base, pour creuser des trous.";
    }

}
