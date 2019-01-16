import { Component, OnInit, Input } from '@angular/core';
import { Quest } from '../model/quest';

@Component({
    selector: 'app-quest',
    templateUrl: './quest.component.html',
    styleUrls: ['./quest.component.css']
})
export class QuestComponent implements OnInit {

    @Input()
    quest: Quest;

    questIcon = ""
    
    constructor() { }

    ngOnInit() {
	this.questIcon = "https://previews.123rf.com/images/ylivdesign/ylivdesign1607/ylivdesign160700348/59386368-arrosoir-pour-l-ic%C3%B4ne-de-jardin-dans-le-style-de-dessin-anim%C3%A9-isol%C3%A9-sur-fond-blanc-symbole-de-jardinage.jpg";
    }

}
