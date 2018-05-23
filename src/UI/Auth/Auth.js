// @flow

import React, { Component } from 'react'
import { computed, observable } from 'mobx'
import { observer } from 'mobx-react'
//MaterialUI
import { withStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import Button from "@material-ui/core/es/Button/Button"
//Local dependencies
import locator from '../../state/Store'
import makeRequest from '../../services/RESTService'
import { login } from '../../services/Requests/AuthRequests'

type State = {
    email: ?string,
    password: ?string,
}

const fields = {
    email: 'email',
    password: 'password'
}

@observer
class Auth extends React.Component<any, State> {

    state = {
        email: '',
        password: ''
    }

    handleChange = (e: any) => {
        this.setState({ [e.target.id]: e.target.value })
    }

    onSubmit = () => {
        const { email, password } = this.state
        if (!email || !password) return
        const config = login({
            email,
            password
        })
        makeRequest(config)
            .then(
                user => locator.authStore.setUser(user)
            )
            .catch()
    }

    render() {
        const { classes } = this.props
        const { isLoggedIn } = locator.authStore

        return (
            <form className={classes.container} autoComplete="off">
                <TextField
                    required
                    id={fields.email}
                    label={fields.email}
                    className={classes.textField}
                    value={this.state.email}
                    onChange={this.handleChange}
                    margin="normal"
                    disabled={isLoggedIn}
                />
                <TextField
                    id="password-input"
                    label={fields.password}
                    className={classes.textField}
                    type={fields.password}
                    autoComplete="current-password"
                    margin="normal"
                    disabled={isLoggedIn}
                />
                <Button
                    variant="outlined"
                    className={classes.button}
                    onClick={this.onSubmit}
                    disabled={isLoggedIn}
                >
                    Default
                    </Button>
                {
                    isLoggedIn
                    && "you are logged in!"}
            </form>
        )
    }
}

const styles = {
        button: {
            marginTop: '30px',
        },
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }
}

export default withStyles(styles)(Auth)