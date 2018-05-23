// @flow
import React, { Component } from 'react'
//fonts
import 'typeface-roboto'

//Dependencies
import Router from './Router'
import NotFound from "./NotFound/NotFound"
import Auth from "./UI/Auth/Auth"

class App extends Component<any> {
  render() {
    return (
     <Auth/>
    )
  }
}

export default App
