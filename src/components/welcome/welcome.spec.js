import Welcome from './welcome';
import { IntlProvider } from 'react-intl';
import { mount } from 'enzyme';

describe('<Welcome />', () => {
  it('renders MoneyInput', () => {
    const view = mount(
      <IntlProvider locale="en">
        <Welcome />
      </IntlProvider>
    );

    expect(view.find('MoneyInput').exists()).toBe(true);
  });
});
