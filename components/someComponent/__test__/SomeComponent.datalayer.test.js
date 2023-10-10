import { shallow } from '../../../utils/testing';
import SomeComponentDatalayer from '../SomeComponent.datalayer';

describe('SomeComponentDatalayer', () => {
  it('should render', () => {
    let wrapper = shallow(<SomeComponentDatalayer/>);

    expect(wrapper).toMatchSnapshot();
  });
});
