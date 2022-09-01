import { useState, useEffect } from "react";
import "./style.css";

function Validation() {
    const initialValues = { username: "", email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    console.log(formValues);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        // setFormValues(initialValues);

    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            // console.log(formValues);
            setFormValues(initialValues);

        }
    }, [formErrors]);
    const validate = (values) => {
        const errors = {};
        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const gmail = values.email
        if (values.username === null) {
            errors.username = "Username is null"
        } else if (values.username === undefined) {
            errors.username = "Username is Undefined"
        } else if (values.username.length < 6) {
            errors.username = "Username must be more than 6 characters"
        }
        if (values.email === "") {
            errors.email = "Please Enter  Email"
        } else if (!regEmail.test(gmail)) {
            errors.email = "Please enter valid email"
        }

        if (values.password.length === 0) {
            errors.password = "Password length is 0"
        }
        else if (values.password.length < 4) {
            errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
            errors.password = "Password cannot exceed more than 10 characters";
        } else if (values.password === null) {
            errors.password = "Password is null"
        } else if (values.password === undefined) {
            errors.password = "Password in undefined"
        }
        return errors;


    };

    return (
        <div className="container">
            {Object.keys(formErrors).length === 0 && isSubmit ? (
                <div className="ui message success">Signed in successfully</div>
            ) : ""}

            <form onSubmit={handleSubmit}>
                <h1>Login Form</h1>
                <div className="ui divider"></div>
                <div className="ui form">
                    <div className="field">
                        <label>Username</label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={formValues.username}
                            onChange={handleChange}
                        />
                    </div>
                    <p>{formErrors.username}</p>
                    <div className="field">
                        <label>Email</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={formValues.email}
                            onChange={handleChange}
                        />
                    </div>
                    <p>{formErrors.email}</p>
                    <div className="field">
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formValues.password}
                            onChange={handleChange}
                        />
                    </div>
                    <p>{formErrors.password}</p>
                    <button className="fluid ui button blue">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Validation;