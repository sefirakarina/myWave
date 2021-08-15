import './inputField.scss'

const InputField =  (props) => {
  return(
    <>
        <label>
            {props.title}
        </label>
        <input name={props.name}
               className={props.error ? 'input-error' : 'input-default'}
               type={props.type}
               value={props.value}
               onChange={props.onChange}
        />
        { props.error && <span>{props.error}</span> }
    </>
  );
}

export default InputField;