import React, { Component } from "react";
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';

export default RenderWithRouter = ( Component ) => {
  const history = createMemoryHistory();
  return ({
    ...render(<Router history={history}>{ Component }</Router>), history,
  });
}