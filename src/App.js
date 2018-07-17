import React, {Component} from 'react';
import {Header, SideNav} from 'components';
import OrderHistory from 'features/OrderHistory';

class App extends Component {
  render() {
    return (
      <div className="App avenir">
        <Header />
        <div className="flex">
          <SideNav />
          <OrderHistory />
        </div>
      </div>
    );
  }
}

export default App;
