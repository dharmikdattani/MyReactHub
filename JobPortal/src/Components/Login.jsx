import { useState } from "react";
import  Style from './Login.module.css';
function Login() {

    const [form, setForm] = useState({ email: "", password: "" });
    const handlingChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        console.log(form);
    };
    const handleSubmit = (e) =>
    {
        if(!form.email || !form.password )
        {
            alert("All fields are mandatory")
        }
        else if (form.email.length < 6 || form.password.length < 6) {
            alert("Lenght of email and password should be atleast 6 characters long ");
        }
        
         else if (!/[a-zA-Z]/.test(form.password) || !/\d/.test(form.password)) {
            alert("password must contain both letters and numbers");
        }
    }

    return (
        <>
        <div className={Style.body}>
        <form onSubmit={handleSubmit}>
            <div className={Style.heading}><h1>Login Form</h1></div> <br></br>
            <div className={Style.container}>
             <input className={Style.input} type="text" name="email" value={form.email ? form.email : ""} onChange={handlingChange} placeholder="Email"/>{" "} <br></br>
             <input className={Style.input} type="password" name="password" value={form.password ? form.password : ""} onChange={handlingChange} placeholder="Password"/>{" "}
            <br></br>  <button type="submit" className={Style.loginbtn} onClick={handlingChange}>{" "}Submit</button>
                </div>   
        </form>
        </div>
        </>
    );
}

export default Login;
