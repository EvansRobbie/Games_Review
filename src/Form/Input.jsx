import React from 'react'
import { Field, ErrorMessage } from 'formik'

const Input = ({control, name, label, ...rest }) => {
  return (
    <div>
        <label id={name}>{label}</label>
        <Field name = {name} {...rest}/>
        <ErrorMessage name ={name}/>
    </div>
  )
}

export default Input