import { connect } from 'react-redux';
import Home from '../containers/Home';

// Step 1: Write a mapStateToProps function
const mapStateToProps = (state) => {
  return {
    cars: state.cars
  };
};

// Step 2: Connect the component with mapStateToProps
const ConnectedHome = connect(mapStateToProps)(Home);

export default ConnectedHome;
