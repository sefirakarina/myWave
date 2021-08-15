import { shallow } from 'enzyme';
import App from './App';
import LoginContainer from './containers/Login/LoginContainer';

describe('renders LoginContainer', () => {
  
  it('should render 3 InputField', () => {
    const wrapper = shallow(<App />) ;
    expect(wrapper.find(LoginContainer).length).toBe(1);
  });

});
