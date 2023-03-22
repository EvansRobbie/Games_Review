import React from 'react'
import Input from './Input'

const FormControl = ({control, ...rest}) => {
    switch(control){
        case 'input': return <Input {...rest}/>

    }
        
        
    
}

export default FormControl