import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    avatar = "";
    name = "";
    experience = 0;
    itemList = 0;
    badgeList = 0;
    
    
    constructor() { }

    ngOnInit() {
	this.avatar = "https://previews.123rf.com/images/virinka/virinka1212/virinka121200099/16873066-carotte-dessin-anim%C3%A9.jpg";
	this.name = "Jean-Pouic";
	this.experience = 0;
	this.itemList = 0;
	this.badgeList = 0;
    }

}
