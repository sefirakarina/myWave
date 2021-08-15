import { shallow } from 'enzyme';
import SignupComponent from "./SignupComponent";
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

describe('SignupComponent', () => {

    it('should render 1 InputField', () => {
        const wrapper = shallow(<SignupComponent {...defaultProps} />) ;
        expect(wrapper.find(InputField).length).toBe(1) ;
    });

    it('should render Signup btn', () => {
        const wrapper = shallow(<SignupComponent {...defaultProps} />) ;
        const signupBtn = wrapper.find('button') ;
        expect(signupBtn.length).toBe(1) ;
        expect(signupBtn.text()).toBe('Submit') ;
    });

    it('should call onSubmit on form submit', () => {
        const wrapper = shallow(<SignupComponent {...defaultProps} />) ;

        wrapper.find('form').simulate('submit');
        expect(defaultProps.onSubmit).toHaveBeenCalledTimes(1);
    });
    
});