import { shallow } from '../../../utils/testing';
import SomeComponent from '../SomeComponent';

describe('SomeComponent', () => {
  it('should render', () => {
    let wrapper = shallow(<SomeComponent />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render when active', () => {
    let wrapper = shallow(<SomeComponent isActive={true} />);

    expect(wrapper).toMatchSnapshot();
  });
});
