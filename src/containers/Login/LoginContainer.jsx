import React  , { useState } from 'react';
import LoginComponent from '../../components/Login/LoginComponent'
import { validateconfirmPassword, validateEmail, validatePassword } from './validations';
import './login.scss' ;

const LoginContainer =  () => {
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
    if(!emailError && !passwordError && !confirmPasswordError){
      setSuccess(true) ;
    }
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

  const loginProps = {
    onSubmit,
    success,
    fields
  }

  return(
    <LoginComponent {...loginProps} />
  );
}

export default LoginContainer;