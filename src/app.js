import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './app.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import HarViewer from './components/Harviewer';

class App extends React.Component {
  render() {
    return (
      <HarViewer/>
    );
  }
};

(() => {
  const BOOTSTRAP =
    'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css';
  const LINK = document.createElement('link');
  // LINK.setAttribute('href', BOOTSTRAP);
  // LINK.setAttribute('rel', 'stylesheet');
  // document.head.appendChild(LINK);
  const DIV = document.createElement('div');
  DIV.setAttribute('class', 'container');
  document.body.appendChild(DIV);
  ReactDOM.render(<App/>, DIV);
})();
