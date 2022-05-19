import Welcome from './welcome';
import { IntlProvider } from 'react-intl';
import { render } from 'enzyme';

describe('<Welcome />', () => {
  it('renders MoneyInput', () => {
    const view = render(
      <IntlProvider locale="en">
        <Welcome />
      </IntlProvider>
    );
    expect(view.find('#money-input-1.amount')).not.toBe(undefined);
  });
});
