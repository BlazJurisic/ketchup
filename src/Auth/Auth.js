// @flow

import React, {Component} from 'react'
import { withStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import Button from "@material-ui/core/es/Button/Button"
import {computed, observable} from "mobx"
import {observer} from "mobx-react"

type State = {
    email: string,
    password: string,
    isLoading: boolean
}

type User = {
    email: String
}

class UserStore {

    @observable user: ?User

    @computed get isLoggedIn(): boolean {
        return !!this.user
    }

    setUser(user: User) {
        this.user = user
    }
}

const userStore = new UserStore()

@observer
class Auth extends React.Component<any, State> {

    state = {
        email: 'marinbend@gmail.com ',
        password: 'nekiPass',
        isLoading: false
    }

    handleChange = (id: string) => {
    }

    onSubmit = () => {
        userStore.setUser({email: 'main', password: 'password'})
    }

    render() {
        const {classes} = this.props
        const {isLoggedIn} = userStore

        return (
            <div>
                <form className={classes.container} autoComplete="off">
                    <TextField
                        required
                        id="email"
                        label="email"
                        className={classes.textField}
                        value={this.state.name}
                        onChange={this.handleChange('email')}
                        margin="normal"
                        disabled={isLoggedIn}
                    />
                    <TextField
                        id="password-input"
                        label="Password"
                        className={classes.textField}
                        type="password"
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
                    {isLoggedIn && "YOU ARE LOG IN!"}
                </form>
            </div>
        )
    }
}

export default withStyles({})(Auth)