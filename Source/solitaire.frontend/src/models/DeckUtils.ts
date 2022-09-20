import Deck from "./Deck";

const shuffle = (deck : Deck) : Deck => {
    return [...deck].sort(() => Math.random() - 0.5)
}

export {shuffle}