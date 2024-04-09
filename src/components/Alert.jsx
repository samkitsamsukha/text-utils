import React from 'react'

export default function Alert(props) {
    // making a div and assigning hight to avoid CLS - Cumulative Layout Shift due to alert pop-up
    return (
        <div style={{height: '50px'}}>
            {props.alert && <div>
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                    {props.alert.msg}
                </div>
            </div>}
        </div>
    )
}
