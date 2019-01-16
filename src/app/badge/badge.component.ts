import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-badge',
    templateUrl: './badge.component.html',
    styleUrls: ['./badge.component.css']
})
export class BadgeComponent implements OnInit {

    icon="";
    name="";
    description="";
    
    constructor() { }

    ngOnInit() {
	this.icon="https://www.forceplus.com/wp-content/uploads/2016/08/medal-1.png";
	this.name="Maître arroseur";
	this.description="A accompli 50 quêtes d'arrosage.";
    }

}
