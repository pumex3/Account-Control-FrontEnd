import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import ContentHeader from '../../common/template/contentHeader'
import Content from '../../common/template/content'
import ValueBox from '../../common/widget/valueBox'
import Row from '../../common/layout/row'
import {GetSummary} from './dashboardActions'

class Dashboard extends Component {

    componentWillMount() {
        this.props.GetSummary()

    }

    render() {
        const {credit, debt} = this.props.summary // summary buscando do redux do mapStateToprops linha 30
        return (
            <div>
                <ContentHeader title='DashBoard' small=';)' />
                <Content >
                    <Row>
                    <ValueBox cols=' 12 4' color='green' icon='bank'   value= {`R$ ${credit}`} text='Total de Créditos' /> 
                <ValueBox cols=' 12 4' color='purple' icon='credit-card'   value={`R$ ${debt}`} text='Total de Débitos' /> 
                <ValueBox cols=' 12 4' color='blue' icon='money'   value={`R$ ${credit - debt}`} text='Valor Consolidado' /> 

                    </Row>

             
                </Content>
            </div>
        )
    }
}

const mapStateToProps = state => ({summary: state.dashboard.summary})
const mapDispatchToProps = dispatch => bindActionCreators({GetSummary}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
