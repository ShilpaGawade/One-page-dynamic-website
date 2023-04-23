import React from "react";
import Con from "./images/pic2.jpg";
import {useFormik} from "formik";
import { signUpSchema } from "./Schema";


    const initialValues = {
        name: "",
        email: "",
        password: "",
        message: "",
    };




    const Message = () => {

    const {values,errors,resetForm,touched,handleBlur,handleSubmit,handleChange} = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit: (values) => {
            console.log(values);
            resetForm();
        
        }

       
    });



    return (

        <>
        
        
        <div className="content"/>
        
        <h1 className="h1">Contact us</h1>
        
        <form  onSubmit={handleSubmit}>
        
            <label htmlFor="Name">Name</label><br/>
            <input type="text" name="name" 
             
            autoComplete="off"
            value={values.name}
            onBlur={handleBlur}
            
            onChange={handleChange}
            />
            {errors.name && touched.name? ( 
            <p className="form-error">{errors.name}</p>) :null}
            <br/><br/>
            <label htmlFor="Email">Email</label><br/>
            <input type="email" name="email"
            id="email" 
            autoComplete="off"
            onBlur={handleBlur}
            value={values.email}
            onChange={handleChange}
            />
            {errors.email && touched.email? ( 
            <p className="form-error">{errors.email}</p>) :null}
            <br/><br/>
            <label htmlFor="password" >password</label><br/>
            <input type="password" name="password" 
            id="password" 
            autoComplete="off"
            onBlur={handleBlur}
            value={values.password}
            onChange={handleChange}
            />
            {errors.password && touched.password? ( 
            <p className="form-error">{errors.password}</p>) :null}
            <br/><br/>
            <label htmlFor="Message">Message</label><br/>
            <textarea className="txtarea" col='5' row='4' 
            name="message" 
            id="message"
            autoComplete="off"
            onBlur={handleBlur}
            value={values.message}
            onChange={handleChange}
            >
            </textarea>
            {errors.message && touched.message? ( 
            <p className="form-error">{errors.message}</p>) :null}
            <button type="submit">Submit</button>
           
        </form>

        <img className="Con" src={Con} alt="24/7"/>
   
<div/>

        


        </>
    )
}


export default Message;