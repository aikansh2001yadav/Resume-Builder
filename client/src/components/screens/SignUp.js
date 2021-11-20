import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import '../CSS/SignUp.css'
import {Link} from 'react-router-dom';

const SignUp = () => {
    return (
        <Container>
            <Row>
                <Col sm={12} lg={6}>
                    <div className="aboutUs">
                        <h1>
                            About Us
                        </h1>
                        <h3>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </h3>
                    </div>
                </Col>
                <Col sm={12} lg={6}>
                    <div className="signUpCard">
                        <div className="card AuthCard input-field">
                            <h2 className="signUpHeading">RESUME BUILDER</h2>
                            <input
                                type="text"
                                placeholder="Name"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                            />
                            <input
                                type="password"
                                placeholder="Password"
                            />
                            <button className="signUpButton btn waves-effect waves-light blue darken-1">Sign Up</button>
                            <h5>
                                <Link className="linkStyle" to='/signin'>Already Have an Account?</Link>
                            </h5>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default SignUp;