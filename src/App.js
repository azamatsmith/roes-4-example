import React, {Component} from 'react';
import {Header, SideNav, Footer} from 'components';
import OrderHistory from 'features/OrderHistory';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App avenir">
        <Header />
        <div className="flex">
          <SideNav />
          <div className="App-content">
            <OrderHistory />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
