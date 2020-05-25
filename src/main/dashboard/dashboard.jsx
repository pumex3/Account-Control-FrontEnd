import React, { Component } from 'react'

import ContentHeader from '../../common/template/contentHeader'
import Content from '../../common/template/content'
import ValueBox from '../../common/widget/valueBox'

class Dashboard extends Component {
    render() {
        return (
            <div>
                <ContentHeader title='DashBoard' small=';)' />
                <Content >

                <ValueBox cols=' 12 4' color='green' icon='bank'   value='R$ 10' text='Total de Créditos' /> 
                <ValueBox cols=' 12 4' color='purple' icon='credit-card'   value='R$ 10' text='Total de Débitos' /> 
                <ValueBox cols=' 12 4' color='blue' icon='money'   value='R$ 10' text='Valor Consolidado' /> 

                </Content>
            </div>
        )
    }
}

export default Dashboard