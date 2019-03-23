import React, { Component } from 'react';
import {BrowserRouter , Route , Switch} from 'react-router-dom'
import Home from './container/Home'
import DetailOfStd from './container/DetailOfStd'
import AddStd from './container/AddStd'

class App extends Component {

  renderRouter () {
    return (
      <Switch>
        <Route exact path = "/" component = {Home} />
        <Route exact path = "/std" component = {DetailOfStd} />
        <Route exact path = "/addstd" component = {AddStd} />
      </Switch>
    )
  }


  render() {
    return (
      <div>
        <BrowserRouter>{this.renderRouter()}</BrowserRouter>
      </div>
    );
  }
}

export default App;
