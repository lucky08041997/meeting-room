import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import NavBar from './navbar'
import Home from './home'

export default function router() {
    return (
        <div>
            <BrowserRouter>
                <NavBar/>
                <Route exact path="/" component={Home} />
            </BrowserRouter>
        </div>
    )
}
