import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

import './spinner.styles.scss';

const spinner = () => (
  <MDBContainer className="py-5">
    <MDBRow>
      <MDBCol className="d-flex align-items-center justify-content-center">
        <div className="lds-ring">
          <div />
          <div />
          <div />
        </div>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
);

export default spinner;
