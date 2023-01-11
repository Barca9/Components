import SwitchButton from "./SwitchButton";
import {EMAIL_AUTHENTICATION, GOOGLE_TWO_FACTOR, SECURITY_KEY, SIGN_IN_WITH_BIOMETRICS} from "../constants/messagesConstants"

export default function Card() {
    return(
        <div className="card">
            <div className="card__card-item">
                <span>{EMAIL_AUTHENTICATION}</span>
                <div className="plus"/>
            </div>
            <div className="card__card-item">
                <span>{GOOGLE_TWO_FACTOR}</span>
                <div className="plus"/>
            </div>
            <div className="card__card-item">
                <span>{SECURITY_KEY}</span>
                <div className="plus"/>
            </div>
            <div className="card__card-item">
                <span>{SIGN_IN_WITH_BIOMETRICS}</span>
                <SwitchButton/>
            </div>
        </div>
    )
}