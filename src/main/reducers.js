import {combineReducers} from 'redux'

import DashboardReducer from '../main/dashboard/dashboardReducer'


const rootReducer = combineReducers({
    dashboard: DashboardReducer
})

export default rootReducer