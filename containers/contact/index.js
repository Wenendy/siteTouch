import React, { useState } from 'react';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import { Subtitle, Description, Title, Titlespan } from '../../components/common/title/index';
import Image from '../../components/common/image/index';
import ContactImg from '../../public/assets/images/contact/woman.png';
import InputBox from '../../components/common/input/index';
import Button from '../../components/common/button';
import ContactBackgroundImages from '../../data/contact';
import '../contact/contact.scss';


function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});

    const handelSubmit = () => {
        const error = {}
        if (!name) {
            error.name = 'First Name field shouldn’t be empty';
        }
        if (!email) {
            error.email = 'Email field shouldn’t be empty';
        }
        if (!message) {
            error.message = 'Message field shouldn’t be empty';
        }

        if (error) {
            setErrors(error)
        } else {
            setName('');
            setEmail('');
            setMessage('');
        }
    }

    return (
        <section className="contact-wrapper" id="contact">
            <div className="contact-animation-images">
                {ContactBackgroundImages.map((img, index) => (
                    <span key={`contact-img-${index}`} className={`image${index + 1}`}><Image Path={img.img} /></span>
                ))}
            </div>
            <Container>
                <Row>
                    <Col sm={0} md={6}>
                        <div className="contact-image">
                            <Image Path={ContactImg} Class="logo-img" />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="contact-content-block main-title-wrapper">
                            <Subtitle
                                Class="sitemain-subtitle"
                                Name="Send us mesage for any Info"
                            />
                            <Subtitle
                                Class="site-subtitle2"
                                Name="Call us for any emergency"
                            />
                            <Description
                                Class="contact-dec"
                                Name="+1 123 - 456 - 7890"
                            />
                            <div className="form">
                                <Form method="POST">
                                    <FormGroup>
                                        <Title Class="form-label" Name="Name *" />
                                        <InputBox
                                            Type="text"
                                            Name="name"
                                            PlaceHolder="John Doe"
                                            value={name}
                                            ChangeValue={setName}
                                            Class={errors && errors.name && 'error'}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Title Class="form-label" Name="Email *" />
                                        <InputBox
                                            Type="text"
                                            Name="email"
                                            PlaceHolder="example@gmail.com"
                                            value={email}
                                            ChangeValue={setEmail}
                                            Class={errors && errors.email && 'error'}
                                        />
                                    </FormGroup>
                                    <FormGroup>
                                        <Title Class="form-label" Name="Message *" />
                                        <InputBox
                                            Type="textarea"
                                            Name="text"
                                            PlaceHolder="write your message"
                                            Class={`textbox ${errors && errors.message && 'error'}`}
                                            value={message}
                                            ChangeValue={setMessage}
                                        />
                                    </FormGroup>
                                </Form>
                            </div>
                            <Button
                                Class="button1 btn button2 gradient-color"
                                Name="SUBMIT"
                                Clickble={handelSubmit}
                                BtnIcon="btn-icon"
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Contact;
