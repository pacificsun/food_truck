import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchApiDataStart } from './redux/api/api.actions';
// import FoodTrucks from './components/food-truck-card/food-truck-card.container';
import MainView from './view/main-view.component';
import './App.css';

import Header from './layout/header/header.component';

function App({ onFetchData }) {
  useEffect(() => {
    onFetchData();
    console.log('here');
  }, []);
  return (
    <div className="App">
      <Header />
      <MainView />
      {/* <FoodTrucks /> */}
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  onFetchData: () => dispatch(fetchApiDataStart())
});

export default connect(null, mapDispatchToProps)(App);
