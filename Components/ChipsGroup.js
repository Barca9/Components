import Chip from "./icons/Chip";
import IconNote from "./icons/IconNote";
import {CREATE_OFFER, JANE_COOPER} from "../constants/messagesConstants";
import {CHIP_RED, CHIP_WHITE} from "../constants/classesConstants"

export default function ChipsGroup() {

    return (
        <div className="chips-group">
            <Chip className={CHIP_RED}>
                <IconNote className="icon_chip_white"/>{CREATE_OFFER}
            </Chip>
            <Chip className={CHIP_WHITE}>
                <IconNote className="icon_chip_black"/>
            </Chip>
            <Chip className="chip_border_with_cross">{JANE_COOPER}</Chip>
        </div>
    )
}