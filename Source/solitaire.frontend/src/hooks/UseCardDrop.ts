import {useDrop} from "react-dnd";
import CardPosition from "../models/CardPosition";
import PlacementType from "../models/PlacementType";
import PlacePosition from "../models/PlacePosition";
import MoveCardFunction from "../models/MoveCardFunction";

const useCardDrop = (placePosition : PlacePosition, moveCard: MoveCardFunction) => {
    const [_, drop] = useDrop({
        accept: "card",
        canDrop : (item : CardPosition, monitor) => {
            if (item.x === placePosition.x && item.placement === placePosition.placement)
                return false;
            return true;
        },
        drop : (item : CardPosition, monitor) => {
            moveCard(item, placePosition);
        }
    })

    return [drop]
}

export default useCardDrop;