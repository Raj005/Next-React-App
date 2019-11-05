import hoistStatics from 'hoist-non-react-statics';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps } from './reduxMethods';

import * as thunks from '../../../store/thunks';

export default ChildComponent => {
  class ViewItemPageWrapper extends React.Component {
    static async getInitialProps({ store, isServer, pathname, query }) {
      await store.dispatch(thunks.getCar());
      return {};
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  ViewItemPageWrapper.propTypes = {
    car: PropTypes.object.isRequired
  };

  return withRouter(
    connect(mapStateToProps)(hoistStatics(ViewItemPageWrapper, ChildComponent))
  );
};
