import PropTypes from 'prop-types';
import Constraints from '@commercetools-uikit/constraints';
import Spacings from '@commercetools-uikit/spacings';
import Text from '@commercetools-uikit/text';
import MoneyInput from '@commercetools-uikit/money-input';
import messages from './messages';
import styles from './welcome.mod.css';
import WebDeveloperSvg from './web-developer.svg';

const WrapWith = (props) =>
  props.condition ? props.wrapper(props.children) : props.children;
WrapWith.displayName = 'WrapWith';
WrapWith.propTypes = {
  condition: PropTypes.bool.isRequired,
  wrapper: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

const Welcome = () => {
  return (
    <Constraints.Horizontal max={16}>
      <Spacings.Stack scale="xl">
        <Text.Headline as="h1" intlMessage={messages.title} />
        <div>
          <div className={styles.imageContainer}>
            <img
              alt="web developer"
              src={WebDeveloperSvg}
              width="100%"
              height="100%"
            />
          </div>
        </div>
        <MoneyInput
          value={{ amount: '1.00', currencyCode: 'EUR' }}
          onChange={() => {}}
          currencies={['EUR', 'USD']}
        />
      </Spacings.Stack>
    </Constraints.Horizontal>
  );
};
Welcome.displayName = 'Welcome';

export default Welcome;
