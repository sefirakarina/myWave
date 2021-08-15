import { shallow } from 'enzyme';
import LoginComponent from "./LoginComponent";
import InputField from '../Input/InputField';

const fields = [{
    type: 'text',
    title: 'Email',
    name: 'email',
    value: '',
    error: '',
    onChange: jest.fn()
  }]

const defaultProps = {
    fields,
    onSubmit: jest.fn(),
    success: false
}

describe('LoginComponent', () => {

    it('should render 1 InputField', () => {
        const wrapper = shallow(<LoginComponent {...defaultProps} />) ;
        expect(wrapper.find(InputField).length).toBe(1) ;
    });

    it('should render Login btn', () => {
        const wrapper = shallow(<LoginComponent {...defaultProps} />) ;
        const loginBtn = wrapper.find('button') ;
        expect(loginBtn.length).toBe(1) ;
        expect(loginBtn.text()).toBe('Login') ;
    });

    it('should call onSubmit on form submit', () => {
        const wrapper = shallow(<LoginComponent {...defaultProps} />) ;

        wrapper.find('form').simulate('submit');
        expect(defaultProps.onSubmit).toHaveBeenCalledTimes(1);
    });
    
});