// @flow

import * as React, {Component} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import NotFound from './UI/Common/NotFound/NotFound'

import NetworkService from './Services/Networking/NetworkService'
import PersistenceService from './Services/PersistenceService'
import StorageService from './Services/StorageService'

type State = {
    isError: boolean
}

class Router extends Component<any, State> {
    persistenceService: PersistenceService
    networkService: NetworkService

    constructor() {
        super()
        const storageService = new StorageService()
        this.persistenceService = new PersistenceService(storageService)
        this.networkService = new NetworkService()
    }

    state = {
        isError: false
    }

    login = (response: any) => {
        const config = GoogleLoginSchema(response.tokenId)
        this.networkService.makeRequest(config)
            .then(response => {
                this._handleLoginResponse(response.data)
            })
            .catch(err => {
                console.log(err)
                this.setState({isError: true})
            })
    }

    logout = () => {
        this.persistenceService.removeToken()
        this.forceUpdate()
    }

    _handleLoginResponse = (data: any) => {
        this.persistenceService.storeToken(data.token)
        this.forceUpdate()
    }

    _handleSnackbarClose = () => {
        this.setState({isError: false})
    }

    render() {
        const isUserLoggedIn = this.persistenceService.isLoggedIn()
        return (
            <div>
                <BrowserRouter>
                    <MuiThemeProvider muiTheme={theme}>
                        <div>
                            {
                                isUserLoggedIn ? <div>
                                        <Navigation logout={this.logout}/>
                                        <Switch>
                                            <Route exact path="/"
                                                   component={Users}/>
                                            <Route exact path="/categories"
                                                   component={Categories}/>
                                            <Route exact path="/actions"
                                                   component={Actions}/>
                                            <Route component={NotFound}/>
                                        </Switch>
                                    </div>
                                    : <Route render={() => <Login login={this.login}/>}/>
                            }
                            <Snackbar
                                open={this.state.isError}
                                message="Something went wrong. Please check data and try again."
                                autoHideDuration={4000}
                                action="OK"
                                onActionClick={this._handleSnackbarClose}
                                onRequestClose={this._handleSnackbarClose}
                            />
                        </div>
                    </MuiThemeProvider>
                </BrowserRouter>
            </div>
        )
    }
}

export default Router