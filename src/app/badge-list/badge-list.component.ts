import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-badge-list',
    templateUrl: './badge-list.component.html',
    styleUrls: ['./badge-list.component.css']
})
export class BadgeListComponent implements OnInit {

    badgeListContent = [];
    
    constructor() { }

    ngOnInit() {
	this.badgeListContent = [];
    }

}
