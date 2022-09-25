import {useDrop} from "react-dnd";
import CardPosition from "../models/CardPosition";
import PlacementType from "../models/PlacementType";
import PlacePosition from "../models/PlacePosition";

const useCardDrop = (placePosition : PlacePosition, moveCard: (cardPosition : CardPosition, placePosition : PlacePosition) => void) => {
    const [_, drop] = useDrop({
        accept: "card",
        canDrop : (item : CardPosition, monitor) => {
            if (item.x == placePosition.x && item.placement === PlacementType.Foundation)
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