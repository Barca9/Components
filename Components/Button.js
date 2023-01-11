import classNames from "classnames";


export default function Button({text, disabled, handler, colorText, colorBackground, size, className, children}) {

    const btnClasses = classNames(
        'button',
        colorText,
        size,
        colorBackground,
        {
            [className]: (!disabled) && handler && className,
            button_disabled: disabled,
        }
    )

    return (
        <>
            <button className={btnClasses}
                    onClick={handler}
                    disabled={disabled}>
                {text}{children}
            </button>
        </>
    )
}
