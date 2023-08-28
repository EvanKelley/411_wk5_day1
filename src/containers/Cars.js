import { connect } from 'react-redux';
import Cars from '../containers/Cars';

// Step 1: Write a mapStateToProps function
const mapStateToProps = (state) => {
  return {
    cars: state.cars
  };
};

// Step 2: Connect the component with mapStateToProps
const ConnectedHome = connect(mapStateToProps)(Cars);

export default ConnectedHome;
