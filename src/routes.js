import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'

export default function routes(){
    return(
        <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/"  component={Cart}></Route>
        </Switch>
    )
}