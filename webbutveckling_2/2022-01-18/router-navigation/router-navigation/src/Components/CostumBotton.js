function PrimaryButton(props) {
    return (
        <button onClick={props.onClick}>
            {props.children}
        </button>
    )
}

function SecondaryButton({onClick, children}) {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    )
}

export {
    PrimaryButton,
    SecondaryButton
}