import React from 'react';
import { connect } from 'react-redux';
import FoodTruck from './food-truck-card.component';
import Spinner from '../../ui/spinner/spinner';

const FoodTrucks = ({ apiData: { data, loading } }) => {
  console.log('container.>>>', loading);
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        data.map(({ id, ...rest }) => <FoodTruck key={id} {...rest} />)
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  apiData: state.apiData
});

export default connect(mapStateToProps)(FoodTrucks);
