import React, { useState, setState, useEffect } from 'react';
import './style.css';
function RegistrationForm() {
    const [input, setInput] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });
    console.log(input);
    const [formErr, setFormErr] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });
    const validation = () => {
        let errors = {};
        if (input.firstName.value === null) {
            setFormErr(prev => { return { ...prev, firstName: "First name is Null" } })
        } else if (input.firstName.value === undefined) {
            setFormErr(prev => { return { ...prev, firstName: "First name is Undefines" } })
        } else if (input.firstName.value.length === 0) {
            setFormErr(prev => { return { ...prev, firstName: "First name is Lenght is " } })
        }
    }
    const handleSubmit = (e) => {
        console.log("click")
        validation()
        setFormErr(validation())

    };
    useEffect(() => {
        if (Object.keys(formErr).length === 0) {
            handleSubmit();
        }
    }, [formErr]);
    return (
        <div className="form">
            <div className="form-body">
                <h1>RegistrationForm</h1>
                <div className="username">
                    <label className="form__label" for="firstName">First Name </label>
                    <input className="form__input" type="text" value={input.firstName}
                        onChange={(e) => setInput({ ...input, firstName: e.target.value })}
                        name="firstName" placeholder="First Name" />
                </div>
                {formErr.firstName !== "" &&
                    <p className="error-msg">{formErr.firstName}</p>
                }
                <div className="lastname">

                    <label className="form__label" for="lastName">Last Name </label>
                    <input type="text" name="lastName" value={input.lastName} className="form__input"
                        onChange={(e) => setInput({ ...input, lastName: e.target.value })}
                        placeholder="LastName" />
                </div>
                <div className="email">
                    <label className="form__label" for="email">Email </label>
                    <input type="email" name="email" className="form__input" value={input.email}
                        onChange={(e) => setInput({ ...input, email: e.target.value })} placeholder="Email" />
                </div>
                <div className="password">
                    <label className="form__label" for="password">Password </label>
                    <input className="form__input" type="password" name="password" value={input.password}
                        onChange={(e) => setInput({ ...input, password: e.target.value })} placeholder="Password" />
                </div>
            </div>
            <div class="footer">
                <button onSubmit={handleSubmit} type="submit" class="btn" >Submit</button>
            </div>
        </div >

    )
}

export default RegistrationForm;