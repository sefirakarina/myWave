import './inputField.scss'
import PropTypes from 'prop-types';

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

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default InputField;