import { connect } from 'react-redux';
import Dashboard from '../containers/Dashboard';

// Step 1: Write a mapStateToProps function
const mapStateToProps = (state) => {
  return {
    cars: state.cars
  };
};

// Step 2: Connect the component with mapStateToProps
const ConnectedHome = connect(mapStateToProps)(Dashboard);

export default ConnectedHome;
