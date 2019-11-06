import hoistStatics from 'hoist-non-react-statics';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps } from './reduxMethods';
import Router from 'next/router';

import * as thunks from '../../../store/thunks';

export default ChildComponent => {
  class HomePageWrapper extends React.Component {
    static async getInitialProps({ store, res }) {
      await store.dispatch(thunks.getCars());
      const state = store.getState();
      const { id } = state.cars.data[0];

      if (res) {
        res.writeHead(302, {
          Location: `cars/${id}`
        });
        res.end();
      } else {
        Router.push(`cars/${id}`);
      }
      return {};
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  HomePageWrapper.propTypes = {
    cars: PropTypes.array.isRequired
  };

  return withRouter(
    connect(mapStateToProps)(hoistStatics(HomePageWrapper, ChildComponent))
  );
};
