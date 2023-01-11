import Button from "../Components/Button";
import IconSheqel from "../Components/icons/IconSheqel";
import IconShoppingCart from "../Components/icons/IconShoppingCart";
import IconNumberOne from "../Components/icons/IconNumberOne";
import InputGroup from "../Components/InputGroup";
import Card from "../Components/Card";
import ChipsGroup from "../Components/ChipsGroup";
import Dialog from "../Components/Dialog";
import {NEXT,SEARCH,DONE,CART,PRICE,WAIT_FOR_A_CONFIRMATION} from "../constants/messagesConstants";
import {BTN_SIZE_BIG, BTN_COLOR_TEXT_RED, BTN_THEME_PRICE, BTN_SIZE_NORMAL, BTN_THEME_WHITE, BTN_THEME_RED, BTN_SIZE_SMALL,
        BTN_COLOR_TEXT_GREEN, BTN_ICON_AFTER, BTN_ICON_BEFORE} from "../constants/classesConstants";


export default function Index() {

    const clickHandler = () => {
        console.log('!!!');
    }

  return (
    <>
        <div className='main'>
            <div className='buttonGroup'>
                <Button text = {NEXT} disabled = {false} handler = {clickHandler} className={BTN_THEME_WHITE}/>
                <Button text = {DONE} disabled = {true} handler = {clickHandler} className={BTN_THEME_RED}/>
                <Button text = {SEARCH} disabled = {false} handler = {clickHandler} className={BTN_THEME_RED} size={BTN_SIZE_BIG}/>
                <Button text = {CART} className={BTN_THEME_PRICE} handler = {clickHandler}>
                    <IconSheqel className={"sheqelAfter"}/>
                </Button>
                <Button text = {CART} disabled = {true} handler = {clickHandler}>
                    <IconShoppingCart className={BTN_ICON_BEFORE}/>
                    <IconNumberOne className={BTN_ICON_AFTER}/>
                </Button>
            </div>
            <InputGroup/>
            <Card/>
            <ChipsGroup/>
            <Dialog/>
            <Button text={WAIT_FOR_A_CONFIRMATION}/>
            <Button text={WAIT_FOR_A_CONFIRMATION} size={BTN_SIZE_SMALL} colorText={BTN_COLOR_TEXT_GREEN}/>
        </div>
    </>
  )
}


