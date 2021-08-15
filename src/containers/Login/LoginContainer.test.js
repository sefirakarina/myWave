import * as React from 'react';
import { shallow, mount } from 'enzyme';
import LoginContainer from './LoginContainer';
import LoginComponent from '../../components/Login/LoginComponent';
import InputField from '../../components/Input/InputField';
import Alert from '../../components/Alert/AlertComponent';
import { errorMessages } from "./errorMessages";

describe('LoginContainer', () => {

    it('should render LoginComponent', () => {
        const wrapper = shallow(<LoginContainer />) ;
        expect(wrapper.find(LoginComponent).length).toBe(1) ;
        expect(wrapper.find(Alert).length).toBe(0) ;
    });

    it('should change email state if onChange is triggered in email field', () => {
        const wrapper = mount(<LoginContainer />) ;
        const emailField = wrapper.find(InputField).at(0)

        emailField.find('input').simulate('change', {
            target: {
                value: 'email@email.com',
                name: 'email'
            } 
        });
        expect(wrapper.find(InputField).at(0).props().value).toBe('email@email.com') ;
    });

    it('should change password state if onChange is triggered in password field', () => {
        const wrapper = mount(<LoginContainer />) ;
        const passwordField = wrapper.find(InputField).at(1)

        passwordField.find('input').simulate('change', {
            target: {
                value: 'Qwerty123',
                name: 'password'
            } 
        });
        expect(wrapper.find(InputField).at(1).props().value).toBe('Qwerty123') ;
    });

    it('shold show required field message if field is empty', () => {
        const wrapper = mount(<LoginContainer />) ;
        const loginForm = wrapper.find('form') ;
        expect(loginForm.length).toBe(1) ;

        loginForm.simulate('submit');
        const inputFields = wrapper.find(InputField)

        expect(inputFields.at(0).find('span').text()).toBe(errorMessages.REQUIRED) ;
        expect(inputFields.at(1).find('span').text()).toBe(errorMessages.REQUIRED) ;
        expect(inputFields.at(2).find('span').text()).toBe(errorMessages.REQUIRED) ;
        expect(wrapper.find(Alert).length).toBe(0) ;
    });

    it('should show wrong format msg if email format is incorrect', () => {
        const wrapper = mount(<LoginContainer />) ;

        const loginForm = wrapper.find('form') ;
        expect(loginForm.length).toBe(1) ;

        const inputFields = wrapper.find(InputField)

        inputFields.at(0).find('input').simulate('change', {
            target: {
                value: 'wrong email format',
                name: 'email'
            } 
        });
        loginForm.simulate('submit');
    
        expect(wrapper.find(InputField).at(0).find('span').text()).toBe(errorMessages.INVALID_EMAIL) ;
        expect(wrapper.find(Alert).length).toBe(0) ;
    });

    it('should show invalid password msg if password does not have a special character', () => {
        const wrapper = mount(<LoginContainer />) ;

        const loginForm = wrapper.find('form') ;
        expect(loginForm.length).toBe(1) ;

        const inputFields = wrapper.find(InputField)
        inputFields.at(1).find('input').simulate('change', {
            target: {
                value: 'Qwerty1',
                name: 'password'
            } 
        });

        loginForm.simulate('submit');
    
        expect(wrapper.find(InputField).at(1).find('span').text()).toBe(errorMessages.INVALID_PASSWORD) ;
        expect(wrapper.find(Alert).length).toBe(0) ;
    });

        
    it('should show invalid password msg if password does not have an uppercase letter', () => {
        const wrapper = mount(<LoginContainer />) ;

        const loginForm = wrapper.find('form') ;
        expect(loginForm.length).toBe(1) ;

        const inputFields = wrapper.find(InputField)
        inputFields.at(1).find('input').simulate('change', {
            target: {
                value: 'qwerty_1',
                name: 'password'
            } 
        });

        loginForm.simulate('submit');
    
        expect(wrapper.find(InputField).at(1).find('span').text()).toBe(errorMessages.INVALID_PASSWORD) ;
        expect(wrapper.find(Alert).length).toBe(0) ;
    });

    it('should show invalid password msg if password does not have a number', () => {
        const wrapper = mount(<LoginContainer />) ;

        const loginForm = wrapper.find('form') ;
        expect(loginForm.length).toBe(1) ;

        const inputFields = wrapper.find(InputField)
        inputFields.at(1).find('input').simulate('change', {
            target: {
                value: 'Qwerty@',
                name: 'password'
            } 
        });

        loginForm.simulate('submit');
        expect(wrapper.find(InputField).at(1).find('span').text()).toBe(errorMessages.INVALID_PASSWORD) ;
        expect(wrapper.find(Alert).length).toBe(0) ;
    });

    it('should show invalid confirmation password error if the field does not match with password', () => {
        const wrapper = mount(<LoginContainer />) ;

        const loginForm = wrapper.find('form') ;
        expect(loginForm.length).toBe(1) ;

        const inputFields = wrapper.find(InputField)
        inputFields.at(1).find('input').simulate('change', {
            target: {
                value: 'Qwerty-123',
                name: 'password'
            } 
        });
        inputFields.at(2).find('input').simulate('change', {
            target: {
                value: 'not same',
                name: 'confirmPassword'
            } 
        });
        loginForm.simulate('submit');
    
        expect(wrapper.find(InputField).at(2).find('span').text()).toBe(errorMessages.INVALID_CONFIRMATION_PASSWORD);
        expect(wrapper.find(Alert).length).toBe(0) ;
    });

    it('should show success alert if all inputs are correct', () => {

        const wrapper = mount(<LoginContainer />) ;

        const loginForm = wrapper.find('form') ;
        expect(loginForm.length).toBe(1) ;

        const inputFields = wrapper.find(InputField)

        inputFields.at(0).find('input').simulate('change', {
            target: {
                value: 'email@email.com',
                name: 'email'
            } 
        });
        inputFields.at(1).find('input').simulate('change', {
            target: {
                value: 'Qwerty-123',
                name: 'password'
            } 
        });

        inputFields.at(2).find('input').simulate('change', {
            target: {
                value: 'Qwerty-123',
                name: 'confirmPassword'
            } 
        });

        loginForm.simulate('submit');
        expect(wrapper.find(Alert).length).toBe(1) ;
    });

    
});