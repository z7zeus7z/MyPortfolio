import { useEffect, useState } from 'react'
import classes from '../../Styles/Contacts.module.css'
import InputField from './InputField'
import TextArea from './TextArea'
import emailjs from '@emailjs/browser';
const ContactForm = (props) => {
    const {theme} = props
    const [values,setValues] = useState({
        fullname:'',
        email : '',
        message:''

    });

    const [status,setStatus]= useState('')

    useEffect(()=>{
        if (status==='SUCCESS'){
             setTimeout(() => {
                setStatus('')
             }, 3000);
        }

    },[status]);

    const handleChange = (e) =>{
        setValues(values =>({
            ...values,
            [e.target.name]: e.target.value
            
            
        }))
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
         emailjs.send("service_r88q0xk", "template_ku9bn11", values,"MUykEk_n_qRITsiaz")
            .then(response =>{
                console.log('SUCCESS!', response);
                setValues({
                    fullname:'',
                    email:'',
                    message:''
                });
                setStatus('SUCCESS')
            },error =>{
                console.log('falied...',error)
            });
    }
  return (
   <>
     <div className={`${classes.contactForm} ${theme}`}>
                   
                   <form onSubmit={handleSubmit}>
                       <h3>Get in touch</h3>
                       <InputField value={values.fullname} handleChange={handleChange} label="Full Name :" name ="fullname" type ="text" placeholder="John Doe"/>
                       <InputField value={values.email} handleChange={handleChange} label="E-Mail :" name ="email" type ="email" placeholder="JohnDoe@example.com"/>
                       <TextArea value={values.message} handleChange={handleChange} label="Your message here" name="message" />
                       <button className={classes.submit} type='submit'>Send</button>
                       {status&&renderAlert()}
                   </form>
               </div>
   </>
  )
}
const renderAlert = ()=>{
    return <div className={classes.alert}>
        <p> your message submitted successfully</p>
    </div>
}
export default ContactForm