const mapStateToProps = state => {
  return {
    car: state.cars.data
  };
};
export { mapStateToProps };
