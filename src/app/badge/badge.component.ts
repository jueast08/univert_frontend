import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-badge',
    templateUrl: './badge.component.html',
    styleUrls: ['./badge.component.css']
})
export class BadgeComponent implements OnInit {

    badgeIcon="";
    badgeName="";
    badgeDescription="";
    
    constructor() { }

    ngOnInit() {
	this.badgeIcon="https://www.forceplus.com/wp-content/uploads/2016/08/medal-1.png";
	this.badgeName="Maître arroseur";
	this.badgeDescription="A accompli 50 quêtes d'arrosage.";
    }

}
