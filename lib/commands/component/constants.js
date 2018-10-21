const component = (name, extension) => {
  return `import React, { Component, Fragment } from 'react';
import classNames from 'classnames/bind';
import styles from './${name}.${extension}';

const cx = classNames.bind(styles);

class ${name} extends Component {
  render() {
    return (
      <Fragment>
        <p className={cx('default')}>Component ${name} works!</p>
      </Fragment>
    );
  } 
}

export default ${name};
`;
}

const style = `.default {
 color: black;
}
`;

const testFile = (name, extension) => {
  return `import React from 'react';
import { create } from 'react-test-renderer';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { Router, Route, createMemoryHistory } from 'react-router';
import ${name} from './${name}.${extension}';

const browserHistory = createMemoryHistory('/');
const mockStore = {};

function App(Component, props = {}, path = '/') {
  return (
    <Router history={browserHistory}>
      <Route
        path={path}
        component={ownProps => <Component {...props} {...ownProps} />}
      />
    </Router>
  );
}

describe('${name}', () => {
  describe('${name} component', () => {
    it('should render', () => {
      const payloads = [];
      const props = createProps({
        list: payloads.subCategories,
        rules: payloads.rules
      });
      const wrapper = create(
        <Provider store={mockStore}>{App(${name}, props)}</Provider>
      ).toJSON();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
`;
};

module.exports = {
  component,
  style,
  testFile
}