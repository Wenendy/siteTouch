import React, { useState } from 'react';
import Router from 'next/router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Description, Title } from '../../components/common/title/index';
import { FormGroup, Input, Label, CustomInput } from 'reactstrap';
import InputBox from '../../components/common/input/index';
import Image from '../../components/common/image/index';
import GoogleImg from '../../public/assets/images/login/google.png';
import Facebook from '../../public/assets/images/login/facebook.png';
import Twitter from '../../public/assets/images/login/twitter.png';
import Check from '../../public/assets/images/login/check.png';
import { X } from 'react-feather';
import api from '../../src/api';

// Firebase
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import firebaseConfig from '../../firebaseConfig'

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


function Login(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setErrors] = useState('');
    const [success, setSuccess] = useState(null);

    
    async function loginWithFirebase () {
        const credentials = {
            email: email, 
            password: password
            }

            const response = await api.post('',credentials)

            const user = response.data

            await success(user)

            console.log(response)

        }
  

    


    return (
        <div className="login-register-outer">
            <Tabs>
                <TabList>
                    <Tab>Login</Tab>
                </TabList>

                <TabPanel>
                    <div className="tabfirst-block">
                        <Title Class="tab-title" Name="Bem Vindo a TouchWorks" />
                        <Description Class="tab-dec" Name="Faça o login para continuar" />

                        <div className="form-wrapper">
                            <FormGroup>
                                <InputBox
                                    Type="String"
                                    Name="email"
                                    PlaceHolder="Email Address"
                                    ChangeValue={setEmail}
                                />
                            </FormGroup>
                            <FormGroup>
                                <InputBox
                                    Type="password"
                                    Name="password"
                                    PlaceHolder="Password"
                                    ChangeValue={setPassword}
                                />
                                <span className="errorFirebase">{error}</span>
                            </FormGroup>


                            <FormGroup className="checkbox-password">
                                <CustomInput
                                    type="checkbox"
                                    id="exCustomCheckbox"
                                    label="Lembrar de Mim"
                                />
                                <button type="button" className="forget-password">Esqueceu a senha?</button>
                            </FormGroup>
                            <button type="button" className="login-btn gradient-color" onClick={loginWithFirebase}>Login</button>
                        </div>
                    </div>
                </TabPanel>
                

            </Tabs>
            <div className="login-close gradient-color" onClick={props.Click}>
                <X />
            </div>
            {success &&
                <div className="login-success-popup">
                    <div className="login-success-box">
                        <div className="login-check-images">
                            <Image Path={Check} />
                        </div>
                        <div className="login-success-content">
                            <Title Class="login-success-title" Name="Success" />
                            <Description Class="login-success-dec" Name="Aguarde..." />
                            <button
                                type="button"
                                className="login-success-btn"
                                onClick={() => Router.push('')}
                            > Ok
                            </button>
                        </div>
                    </div>
                </div>
            }

            <style jsx>
                {`
                    .errorFirebase{
                        color: red;
                        margin-top: 10px;
                        display: block;
                    }
                `}
            </style>

        </div>
    );
}

export default Login;
