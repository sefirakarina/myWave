import { shallow } from 'enzyme';
import InputField from './InputField';

const defaultProps = {
    type: 'text',
    title: 'title',
    name: 'name',
    value: 'value',
    error: null,
    onChange: jest.fn()
}

describe('InputField', () => {

    it('should not show error msg if error = null', () => {
        const wrapper = shallow(<InputField {...defaultProps} />) ;
        expect(wrapper.find('span').length).toBe(0);
    });

    it('should show error msg if it exists', () => {
        defaultProps.error = 'error' ;
        const wrapper = shallow(<InputField {...defaultProps} />) ;
        expect(wrapper.find('span').text()).toBe(defaultProps.error);
    });

    it('should call onChange on value changed', () => {
        const wrapper = shallow(<InputField {...defaultProps} />) ;
        wrapper.find('input').simulate('change') ;
        expect(defaultProps.onChange).toBeCalledTimes(1) ;
    });

});