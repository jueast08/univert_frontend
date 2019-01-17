import { Badge } from "./badge";
import { Item } from "./item";
import { QuestList } from "./quest-list";

export class Profile {
    name: String;
    level: Number;
    id: Number;
    experience: Number;
    listBadge: Badge[];
    listItem: Item[];
}
