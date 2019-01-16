import { Component, OnInit, Input  } from '@angular/core';
import { Badge } from '../model/badge';

@Component({
    selector: 'app-badge',
    templateUrl: './badge.component.html',
    styleUrls: ['./badge.component.css']
})
export class BadgeComponent implements OnInit {

    @Input()
    badge: Badge;
    
    constructor() { }

    ngOnInit() { }

}
