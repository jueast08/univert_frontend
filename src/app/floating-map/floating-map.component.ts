import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery'

@Component({
  selector: 'app-floating-map',
  templateUrl: './floating-map.component.html',
  styleUrls: ['./floating-map.component.css']
})

export class FloatingMapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.floating-map-img').bind('wheel mousewheel', function(e){
        var delta;

        if (e.originalEvent.wheelDelta !== undefined)
            delta = e.originalEvent.wheelDelta;
        else
            delta = e.originalEvent.deltaY * -1;

            if(delta > 0) {
                $("#main").css("width", "+=10");
            }
            else{
                $("#main").css("width", "-=10");
            }
        });
  }

}
