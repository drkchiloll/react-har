import React from 'react';
import ReactDOM from 'react-dom';
import './app.scss';

class App extends React.Component {
  render() {
    return (
      <h1>React Deep Dive</h1>
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
