import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-quest',
    templateUrl: './quest.component.html',
    styleUrls: ['./quest.component.css']
})
export class QuestComponent implements OnInit {

    questName = "";
    questStatus = "";
    questText = "";
    questIcon = "";
    
    constructor() { }

    ngOnInit() {
	this.questName = "Arroser";
	this.questStatus = "À faire";
	this.questText = "Arroser les plantes";
	this.questIcon = "https://previews.123rf.com/images/ylivdesign/ylivdesign1607/ylivdesign160700348/59386368-arrosoir-pour-l-ic%C3%B4ne-de-jardin-dans-le-style-de-dessin-anim%C3%A9-isol%C3%A9-sur-fond-blanc-symbole-de-jardinage.jpg";
    }

}
