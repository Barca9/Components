import classNames from "classnames";

export default function Chip({className, children, text}) {

    const chipClasses = classNames('chip', className)

    return (
        <div className={chipClasses}>{children}{text}</div>
    )
}