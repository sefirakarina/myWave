import { mount } from 'enzyme';
import Alert from './AlertComponent';

const defaultProps = {
    class: 'alert-success',
    message: 'some message'
    
}

describe('Alert', () => {

    it('should render the correct message', () => {
        const wrapper = mount(<Alert {...defaultProps} />) ;
        expect(wrapper.find('div').text()).toBe(defaultProps.message);
    });

});