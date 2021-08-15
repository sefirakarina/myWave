import React from 'react';
import Alert from '../Alert/AlertComponent';
import InputField  from '../Input/InputField';

const SignupComponent =  (props) => {
  const successMsg = 'Signup successful'

  return(
    <div className='card col-sm-4 centered'>
      <div className='card-body'>
        <h4 className='card-title text-center mb-4 mt-1'>Sign up</h4>
        <form onSubmit={props.onSubmit}>
          {props.fields.map((props)=>{
            return <InputField {...props} key={props.name}/>
          })}
          <button type="submit"
                  className= "btn mt-4 mb-4"
          >
            Submit
          </button>
        </form>
        { props.success && <Alert message={successMsg} class='alert-success' /> }
      </div>
    </div>
  );
}

export default SignupComponent;
