import React from 'react'


export default props => (
    <l1>
        <a href={props.path}>
            <i className= {`fa fa-${props.icon}`}></i> {props.label}
        </a>
    </l1>
)