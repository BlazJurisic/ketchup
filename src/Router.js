// // @flow
//
// import React, { Component } from 'react'
// import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import NotFound from './NotFound/NotFound'
//
// class Router extends Component<any> {
//     render() {
//         const {isLoggedIn} = this.props
//         return (
//             <BrowserRouter>
//                 {
//                     isLoggedIn
//                         ? <Switch>
//                             <Route exact path="/"
//                                 component={Home} />
//                             <Route component={NotFound} />
//                         </Switch>
//                         : <Route component={Auth} />
//                 }
//             </BrowserRouter>
//         )
//     }
// }
//
// export default Router