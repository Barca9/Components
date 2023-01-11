import Input from "./Input";
import {NEW_PASSWORD, REPEAT_NEW_PASSWORD} from "../constants/messagesConstants";

export default function InputGroup() {

    return (
        <div className="input-group">
            <Input textLabel= {NEW_PASSWORD} id="password" type="password"/>
            <Input textLabel = {REPEAT_NEW_PASSWORD} id="password" type="password"/>
        </div>
    )
}


