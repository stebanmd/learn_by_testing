export class Card {
  public id?: string;
  public kana: string;
  public romanji: string;
  public translateTo?: string;
  public mnemonic?: string;
  public howToDraw?: string;
  public pronunciation?: string;
}

export class CardModel extends Card {
  public selected: boolean;
}
