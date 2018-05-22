// @flow
import React, { Component } from 'react'
import logo from './logo.svg'
//fonts
import 'typeface-roboto'

//Dependencies
import Router from './Router'
import NotFound from "./NotFound/NotFound"
import Auth from "./Auth/Auth"

class App extends Component<any> {
  render() {
    return (
     <Auth/>
    )
  }
}

export default App
