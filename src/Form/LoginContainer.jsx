import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import FormControl from './FormControl'

const LoginContainer = () => {
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
        password: 
            Yup.string()
            .required('Password required')
            
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
        <Form className='absolute top-[20%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-full max-w-[500px] bg-[var(--info)] backdrop-filter'>
            <FormControl
                control= 'input' 
                label = 'Username' 
                name = 'username' 
                id = 'username'
            />
            <FormControl
                    control= 'input' 
                    label = 'Password' 
                    name = 'password' 
                    id = 'password'
                />
               < button>Login</button>
            </Form>
        )
       }

        }
    </Formik>
  )
}

export default LoginContainer