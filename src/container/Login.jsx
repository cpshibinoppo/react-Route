import React, { useState } from "react"
import { Form, redirect, useLoaderData, useNavigate } from "react-router-dom"
import { loginUser } from "../api";
export function loader({request}){
    return new URL(request.url).searchParams.get("message");
}
export async function action({request}){
    const formData = await request.formData();
    const email = formData.get("email");
    const password = formData.get("password");
    const data = await loginUser({email, password})
    console.log(data)
    localStorage.setItem('isLoggedIn', true)
    return redirect('/');
}


export default function Login() {
    const [status , setStatus] = useState('idle');
    const [error , setError] = useState(null);
    const navigate = useNavigate();
    const message = useLoaderData()

    function handleSubmit(e) {
        e.preventDefault()
        setStatus('submitting')
        setError(null)
        // loginUser(loginFormData)
        // .then(data => { navigate('/host',{replace: true})})
        // .catch(err => setError(err))
        // .finally(()=>setStatus('idle'));
    }


    return (
        <div className="login-container">
            {message && <h3 className="red">{message}</h3>}
            <h1>Sign in to your account</h1>
            <Form className="login-form" method="post">
                <input
                    name="email"
                    type="email"
                    placeholder="Email address"
                />
                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                />
                {error && <h3 className="red">{error.message}</h3>}

                <button disabled={status === 'submitting'} >
                {status === "submitting" ? "Logging in..." : "Log in"}
                </button>
            </Form>
        </div>
    )

}