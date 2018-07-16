import React, {Component} from 'react';
import {Header, SideNav} from 'components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="flex">
          <SideNav />
        </div>
      </div>
    );
  }
}

export default App;
