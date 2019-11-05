import hoistStatics from 'hoist-non-react-statics';
import { withRouter } from 'next/router';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps } from './reduxMethods';
import Router from 'next/router';

export default ChildComponent => {
  class HomePageWrapper extends React.Component {
    static async getInitialProps({ res }) {
      if (res) {
        res.writeHead(302, {
          Location: '/car'
        });
        res.end();
      } else {
        Router.push('/car');
      }
      return {};
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  HomePageWrapper.propTypes = {};

  return withRouter(
    connect(mapStateToProps)(hoistStatics(HomePageWrapper, ChildComponent))
  );
};
