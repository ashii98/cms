import React from 'react';
import Header from './Header';
import Main from './Main';
import '../styles/main.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App