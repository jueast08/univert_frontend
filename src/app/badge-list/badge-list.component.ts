import { Component, OnInit } from '@angular/core';
import { Badge } from '../model/badge';
import { BadgeService } from '../services/badge.service';

@Component({
    selector: 'app-badge-list',
    templateUrl: './badge-list.component.html',
    styleUrls: ['./badge-list.component.css']
})
export class BadgeListComponent implements OnInit {

    badgeListContent = [];
    
    constructor(public badgeService : BadgeService ) { }

    ngOnInit() {
	this.badgeService.getBadges("1").subscribe(badges => this.badgeListContent = badges);
    }

}
