// @flow
import React, { Component } from 'react'
//fonts
import 'typeface-roboto'

//Dependencies
import Router from './Router'
import NotFound from './NotFound/NotFound'
import Auth from './UI/Auth/Auth'

import { MuiThemeProvider } from '@material-ui/core/styles'
import Navbar from './UI/Navigation/Navbar'
import Landing from './UI/Landing/Landing'
import theme from './UI/Theme'

class App extends Component<any> {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <Landing />
            </MuiThemeProvider>
        )
    }
}

export default App
