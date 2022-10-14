import CardPosition from "./CardPosition";
import PlacePosition from "./PlacePosition";

type MoveCardFunction = (cardPosition : CardPosition, placePosition : PlacePosition) => void;
type CanMoveCardFunction = (cardPosition : CardPosition, placePosition : PlacePosition) => boolean;

export type {MoveCardFunction, CanMoveCardFunction};