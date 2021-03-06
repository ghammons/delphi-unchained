/*
  Top level component that represents our App. 
  Shows all providers that are sending data through the application
*/

import React, { Component } from 'react';
import store from './store'
import {DrizzleProvider} from 'drizzle-react'
import {Provider} from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import history from './history'
import RouteMap from './navigation/RouteMap'

import {drizzleOptions} from './drizzle'

import { MuiThemeProvider, } from 'material-ui/styles';
import mui_theme from './styles/mui-theme'

class App extends Component {
  render() {
    return (
      <DrizzleProvider options={drizzleOptions} store={store}>
        <Provider store={store}>
          <ConnectedRouter basename={process.env.PUBLIC_URL} history={history}>
            <MuiThemeProvider theme={mui_theme}>
              <RouteMap/>
            </MuiThemeProvider>
          </ConnectedRouter>
          </Provider>    
      </DrizzleProvider>
    );
  }
}

export default App;
