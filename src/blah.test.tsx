import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { JSONSchemaRenderer } from '.';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<JSONSchemaRenderer schema={{}} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders each of the JSON schema primitive types', () => {
    const div = document.createElement('div');
    ReactDOM.render(<JSONSchemaRenderer schema={{}} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
