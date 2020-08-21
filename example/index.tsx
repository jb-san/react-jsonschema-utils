//@ts-nocheck
import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Null } from '../.';
const App = () => {
  return (
    <div>
      asd
      <Null />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
