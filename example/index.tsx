import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { JSONSchemaRenderer } from '../.';

const App = () => {
  return (
    <div>
      <JSONSchemaRenderer schema={{}} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
