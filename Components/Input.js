export default function Input ({type, textLabel, id}) {
    return(
        <div className="text-field">
            <input type={type} className="text-field__input" id={id} required/>
            <label htmlFor={id} className="text-field__label">{textLabel}</label>
        </div>
    )
}

