import React from 'react'
import {BtnPrimary,BtnSecodary} from './style'
export function PrimaryBtn({children}) {
    return (
        <BtnPrimary>
            {children}
        </BtnPrimary>
    )
}


export function SecondaryBtn(props){
    return(
        <BtnSecodary {...props}>
            {props.children}
        </BtnSecodary>
    )
}