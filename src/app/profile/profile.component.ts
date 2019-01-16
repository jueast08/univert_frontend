import { Component, OnInit } from '@angular/core';
import { BadgeComponent } from '../badge/badge.component';
import { BadgeListComponent } from '../badge-list/badge-list.component';
import { ItemComponent } from '../item/item.component';
import { ItemListComponent } from '../item-list/item-list.component';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    avatar = "";
    name = "";
    experience = 0;
    
    
    constructor() { }

    ngOnInit() {
	this.avatar = "https://previews.123rf.com/images/virinka/virinka1212/virinka121200099/16873066-carotte-dessin-anim%C3%A9.jpg";
	this.name = "Jean-Pouic";
	this.experience = 0;
    }

}
