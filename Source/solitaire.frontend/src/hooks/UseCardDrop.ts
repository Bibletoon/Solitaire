import {useDrop} from "react-dnd";
import CardPosition from "../models/CardPosition";
import PlacePosition from "../models/PlacePosition";
import {MoveCardFunction, CanMoveCardFunction} from "../models/MoveCardFunction";

const useCardDrop = (placePosition : PlacePosition, canMoveCard : CanMoveCardFunction, moveCard: MoveCardFunction) => {
    const [_, drop] = useDrop({
        accept: "card",
        canDrop : (item : CardPosition, monitor) => {
            if (item.x === placePosition.x && item.placement === placePosition.placement)
                return false;
            return true;
        },
        drop : (item : CardPosition, monitor) => {
            if (canMoveCard(item, placePosition)) moveCard(item, placePosition);
        }
    })

    return [drop]
}

export default useCardDrop;