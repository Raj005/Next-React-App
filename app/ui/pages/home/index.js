import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { HomePageWrapper } from '../../hocs';
import { mapStateToProps } from './reduxMethods';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>Mobile.de Home page</div>;
  }
}

HomePage.propTypes = {};

export default HomePageWrapper(connect(mapStateToProps)(HomePage));
