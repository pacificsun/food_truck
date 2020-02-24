import React from 'react';

import Card from '../food-truck-card/food-truck-card.component';

const List = ({ data }) => {
  return (
    <>
      {data.map(({ id, ...rest }) => (
        <Card key={id} {...rest} />
      ))}
    </>
  );
};

export default List;
