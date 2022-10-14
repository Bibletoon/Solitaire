enum Suit {
    Spade = 0,
    Heart,
    Diamond,
    Club
}

class SuitUtils {
    public static isRed(suit : Suit) {
        return suit === Suit.Heart || suit === Suit.Diamond;
    }
}

export {Suit, SuitUtils};