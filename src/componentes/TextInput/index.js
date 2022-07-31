import "./TextInput.css";

const TextInput = (props) => {
    return (
        <div className="text-input">
            <label>
                {props.label}
            </label>
            <input placeholder={props.placeholder} required={props.required}/>
        </div>
    );
}

export default TextInput;