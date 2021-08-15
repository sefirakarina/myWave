import React  , { useState } from 'react';
import SignupComponent from '../../components/Signup/SignupComponent'
import { validateconfirmPassword, validateEmail, validatePassword } from './validations';
import './signup.scss' ;

const SignupContainer =  () => {
  const[ data, setData ] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const[ errors, setErrors ] = useState({});
  const[ success, setSuccess ] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const emailError = validateEmail(data.email) ;
    const passwordError = validatePassword(data.password) ;
    const confirmPasswordError = validateconfirmPassword(data.confirmPassword, data.password) ;
    setErrors({
      email: emailError,
      password: passwordError,
      confirmPassword: confirmPasswordError
    })
    const noError = !emailError && !passwordError && !confirmPasswordError
    setSuccess(noError ? true : false) ;
  }

  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const fields = [{
      type: 'text',
      title: 'Email',
      name: 'email',
      value: data.email,
      error: errors?.email,
      onChange: onChange
    },{
      type: 'password',
      title: 'Password',
      name: 'password',
      value: data.password,
      error: errors?.password,
      onChange: onChange
    },{
      type: 'password',
      title: 'Confirm password',
      name: 'confirmPassword',
      value: data.confirmPassword,
      error: errors?.confirmPassword,
      onChange: onChange
    }
  ]

  const signupProps = {
    onSubmit,
    success,
    fields
  }

  return(
    <SignupComponent {...signupProps} />
  );
}

export default SignupContainer;