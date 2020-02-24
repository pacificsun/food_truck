import React from 'react';

import Card from '../food-truck-card/food-truck-card.component';
import Spinner from '../../ui/spinner/spinner';

const List = ({ data, loading }) => {
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        data.map(({ id, ...rest }) => <Card key={id} {...rest} />)
      )}
    </>
  );
};

export default List;
