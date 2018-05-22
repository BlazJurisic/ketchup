// @flow
import React, { Component } from 'react'
import logo from './logo.svg'
//fonts
import 'typeface-roboto'

//Dependencies
import Router from './Router'
import NotFound from "./NotFound/NotFound"

class App extends Component<any> {
  render() {
    return (
     <NotFound/>
    )
  }
}

export default App
