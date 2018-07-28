import { Card } from "./card";

export class Deck {
    id: string;
    name: string;
    description: string;

    cards: Array<Card>;
}

export class DeckModel extends Deck {
    selected: boolean;
}