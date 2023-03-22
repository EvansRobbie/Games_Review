import React from 'react'
import { Formik, Form} from 'formik'
import * as Yup from 'yup'
import FormControl from './FormControl'

const RegisterContainer = () => {
    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        conditions: ''
    }
    const validationSchema = Yup.object({
        username: 
            Yup.string()
            .required('Username Required'),
        email: 
            Yup.string()
            .email('Invalid Email')
            .required('Email Required'),
        password: 
            Yup.string()
            .required('Password required')
            .matches(
                /^.*(?=.{6,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                "Password must contain at least 6 characters, one uppercase, one number and one special case character"
            ),
        confirmPassword: 
            Yup.string()
            .oneOf([Yup.ref('password'), null], 'Password must match')
    })
    
    const onSubmit = ( value) => console.log(value)
  return (
    <Formik 
        initialValues={initialValues}
        validationSchema = {validationSchema}
        onSubmit ={onSubmit}
    >
       { (formik) => {
        return (
            <Form>
                <FormControl
                    control= 'input' 
                    label = 'Username' 
                    name = 'username' 
                    id = 'username'
                />
                <FormControl
                    control= 'input' 
                    label = 'Email' 
                    name = 'email' 
                    id = 'email'
                />
                <FormControl
                    control= 'input' 
                    label = 'Password' 
                    name = 'password' 
                    id = 'password'
                />
                <FormControl
                    control= 'input' 
                    label = 'confirm Password' 
                    name = 'confirmPassword' 
                    id = 'confirmPassword'
                />
                < button>Register</button>
            </Form>
        )
       }

        }
    </Formik>
  )
}

export default RegisterContainer