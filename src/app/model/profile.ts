import { Badge } from "./badge";
import { Item } from "./item";

export class Profile {
    name: String;
    level: Number;
    id: String;
    avatar: String;
    experience: Number;
    badges: Badge[];
    items: Item[];
}
