import { Component, OnInit, Input } from '@angular/core';
import { Badge } from '../model/badge';

@Component({
    selector: 'app-badge-list',
    templateUrl: './badge-list.component.html',
    styleUrls: ['./badge-list.component.css']
})
export class BadgeListComponent implements OnInit {

    @Input()
    badges: Badge[];
    
    constructor() { }

    ngOnInit() {
    }

}
