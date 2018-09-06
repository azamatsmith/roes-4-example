import React, {Component} from 'react';
import {Banner, Header, SideNav} from 'components';
import OrderHistory from 'features/OrderHistory';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App avenir">
        <Banner>
          This is not a U.S. Government website. This site is intended for
          infomational purposes only.
        </Banner>
        <Header />
        <div className="flex">
          <SideNav />
          <div className="w-100">
            <OrderHistory />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
