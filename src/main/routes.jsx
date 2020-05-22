import React from 'react'
import { Router, Route, Redirect, hashHistory} from 'react-router'

import Dashboard from '../main/dashboard/dashboard'
import BillingCycle from '../main/billingCycle/billingCycle'



export default props =>(

    <Router history ={hashHistory}>
    <Route path ='/' component= {Dashboard} />
    <Route path ='billingCycles' component= {BillingCycle} />
    <Redirect from ='*' to='/' />

    </Router>
)

