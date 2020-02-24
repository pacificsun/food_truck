import { connect } from 'react-redux';

const mapStateToProps = state => ({
  apiData: state.apiData
});

const container = connect(mapStateToProps);

export default container;
