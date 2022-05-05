import axios from "axios";
import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";


function LoginPage(props) {

    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    let currentRef = useRef();
    const navigate = useNavigate();

    const getUser = () => {
        axios.get('http://localhost:3000/comments')
            .then((response) => onValidate(response))
            .catch(e => {
                window.location.reload(false);
                console.log(e)
            })
    }

    const onValidate = (response) => {
        currentRef = response.data.filter(function (currentElement) {
            return currentElement.mail === mail && currentElement.password === password;
        });
        if (Array.isArray(currentRef) && currentRef.length) {
            /// here a have current obj i will set it in redux stor
            // props.addInitialState(currentRef);
            console.log(currentRef);
            routeChange(currentRef);
        } else {
            alert("No such User")
        }
    }

    const routeChange = () => {
        let path = `/userPage/${mail}`;
        navigate(path)
    }

    return (
        <div className="login-page">
            <div className="login-window">
                <h5 className="fw-normal mb-3 pb-3" >Sign into your account</h5>
                <div className="form-outline mb-4">
                    <input type="email" className="form-control form-control-lg" onChange={e => setMail(e.target.value)} />
                    <label className="form-label" >Email address</label>
                </div>
                <div className="form-outline mb-4">
                    <input type="password" className="form-control form-control-lg" onChange={e => setPassword(e.target.value)} />
                    <label className="form-label" >Password</label>
                </div>
                <div className="pt-1 mb-4">
                    <button className="btn btn-dark btn-lg btn-block" type="button" onClick={() => getUser()}>Login</button>
                </div>
                <p className="mb-5 pb-lg-2" >If you have an account Sign in</p>
                <p className="small text-muted">It is test Project</p>
            </div>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        addInitialState: (obj) => {
            const action = {
                type: "ADD_CURRENT_USER",
                payload: obj,
            }
            dispatch(action)
        }
    }
}

export default connect(mapDispatchToProps)(LoginPage);