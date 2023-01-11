
import Button from "./Button";
import {BTN_THEME_WHITE, BTN_COLOR_TEXT_RED,BTN_SIZE_NORMAL, BTN_BACKGROUND_PINK, BTN_COLOR_TEXT_BLACK} from "../constants/classesConstants";
import {NEXT, BACK, REGULAR_CLEANING, WINDOW_CLEANING, AFTER_RELOCATION, AFTER_REPAIRING} from "../constants/messagesConstants";

export default function Dialog() {

    const clickHandler = () => {
        console.log('!!!');
    }

    return (
        <div className="dialog-window">
            <p className='dialog-window__title'>What type of work would you like to do?</p>
            <div className="dialog-window__buttons-change">
                <Button text = {REGULAR_CLEANING} disabled = {false} className={BTN_THEME_WHITE} colorBackground={BTN_BACKGROUND_PINK}/>
                <Button text = {WINDOW_CLEANING} disabled = {false} className={BTN_THEME_WHITE} handler={clickHandler}/>
                <Button text = {AFTER_REPAIRING} disabled = {false} className={BTN_THEME_WHITE} colorText={BTN_COLOR_TEXT_RED}/>
                <Button text = {AFTER_RELOCATION} disabled = {false} className={BTN_THEME_WHITE} colorBackground={BTN_BACKGROUND_PINK}/>
            </div>
            <div className="dialog-window__buttons-navigation">
                <Button text = {BACK} disabled = {false} className={BTN_THEME_WHITE} size={BTN_SIZE_NORMAL} colorText={BTN_COLOR_TEXT_BLACK}/>
                <Button text = {NEXT} disabled = {false} className={BTN_THEME_WHITE} size={BTN_SIZE_NORMAL}/>
            </div>
        </div>
    )
}