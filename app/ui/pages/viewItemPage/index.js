import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ViewItemPageWrapper } from '../../hocs';
import { mapStateToProps } from './reduxMethods';

class ViewItemPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>{this.props.car.description}</div>;
  }
}

ViewItemPage.propTypes = {
  car: PropTypes.object.isRequired
};

export default ViewItemPageWrapper(connect(mapStateToProps)(ViewItemPage));
