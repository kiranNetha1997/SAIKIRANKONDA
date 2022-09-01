import React, { useState, useEffect, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./SignUp.css";
const ReCaptach = () => {
    const [verfied, setVerifed] = useState(false);
    const intialValue = { firstname: "", lastname: "", email: "", mobile: "", isChecked: false }
    const [details, setDetails] = useState(intialValue)
    console.log(details);
    const [formeerr, setFormErr] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const capthaRef = useRef(null)

    function onChange(value) {
        console.log("Captcha value:", value);
        setVerifed(true);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        setFormErr(validate(details));
        setIsSubmit(true);
        // const token = capthaRef.current.getValue();
        capthaRef.current.reset();

    }

    const validate = (values) => {
        const error = {}
        if (!values.firstname) {
            error.firstname = "firstname Required";
        }
        if (!values.lastname) {
            error.lastname = "lastname Required";
        }
        if (!values.email) {
            error.email = "E-mail Required";
        }
        if (!values.mobile) {
            error.mobile = "Mobile number Required";
        }
        // if (values.isChecked === false) {
        //     error.isChecked = "Please Check Check box"
        // }
        return error;

    }
    useEffect(() => {

        if (Object.keys(formeerr).length === 0 && isSubmit) {
            setDetails(intialValue);

        }
    })


    return (
        <div className="d-flex flex-column align-items-center justify-content-center h-100 mt-4">
            <h1 className="mb-3">SignUp with ReCaptha</h1>
            <form onSubmit={submitHandler}>

                <div >
                    <label >
                        FirstName :
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={details.firstname}
                        onChange={(e) => setDetails({ ...details, firstname: e.target.value })}
                    />
                </div>
                <p>{formeerr.firstname}</p>
                <div>
                    <label >
                        LastName :
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={details.lastname}
                        onChange={(e) => setDetails({ ...details, lastname: e.target.value })}
                    />
                </div>
                <p>{formeerr.lastname}</p>
                <div>
                    <label >
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={details.email}
                        onChange={(e) => setDetails({ ...details, email: e.target.value })}
                    />
                </div>
                <p>{formeerr.email}</p>
                <div>
                    <label >
                        Mobile :
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        value={details.mobile}
                        onChange={(e) => setDetails({ ...details, mobile: e.target.value })}
                    />
                </div>
                <p>{formeerr.mobile}</p>
                <ReCAPTCHA
                    className="recapthca"
                    sitekey="6Lc1UpshAAAAAIXVSwbd2X_hzEkzwhw6lc3y1g7v
                    "
                    onChange={onChange}
                    value={details.isChecked}
                    ref={capthaRef}

                />
                <p>{formeerr.isChecked}</p>

                <button
                    type="submit"
                    className="btn btn-primary mt-3"
                // disabled={!verfied}
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ReCaptach;