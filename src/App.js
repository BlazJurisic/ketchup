// @flow
import React, {Component} from 'react'
// import logo from './logo.svg'
import theme from './UI/Theme'
//fonts
import 'typeface-roboto'

//Dependencies
import Router from './Router'
import NotFound from "./NotFound/NotFound"
import Auth from "./UI/Auth/Auth"

import {MuiThemeProvider} from '@material-ui/core/styles'

class App extends Component<any> {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <Auth/>
            </MuiThemeProvider>
        )
    }
}

export default App
