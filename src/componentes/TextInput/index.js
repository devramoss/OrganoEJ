import "./TextInput.css";

const TextInput = (props) => {
    const asTyped = (event) => {
        props.asChanged(event.target.value);
    }

    return (
        <div className="text-input">
            <label>
                {props.label}
            </label>
            <input value={props.value} onChange={asTyped} placeholder={props.placeholder} required={props.required}/>
        </div>
    );
}

export default TextInput;