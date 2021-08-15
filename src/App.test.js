import { shallow } from 'enzyme';
import App from './App';
import SignupContainer from './containers/Signup/SignupContainer';

describe('App', () => {
  
  it('should render SignupContainer', () => {
    const wrapper = shallow(<App />) ;
    expect(wrapper.find(SignupContainer).length).toBe(1);
  });

});
