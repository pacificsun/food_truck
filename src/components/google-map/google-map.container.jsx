import { connect } from 'react-redux';

const mapStateToProps = state => ({
  markerPoint: state.apiData.data
});
const container = connect(mapStateToProps);

export default container;
